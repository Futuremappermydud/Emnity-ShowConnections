import { Plugin, registerPlugin } from 'enmity/managers/plugins';
import { React } from 'enmity/metro/common';
import { getByProps } from 'enmity/metro';
import { create } from 'enmity/patcher';
import manifest from '../manifest.json';

import Settings from './components/Settings';

const Patcher = create('show-connections');
const UserProfile = getByProps("PRIMARY_INFO_TOP_OFFSET", "SECONDARY_INFO_TOP_MARGIN", "SIDE_PADDING")
import { findInReactTree } from "enmity/utilities"
import Connections from './components/Connections';
import { getBoolean } from 'enmity/api/settings';

const ShowConnections: Plugin = {
   ...manifest,

   onStart() {
      Patcher.after(UserProfile.default, "type", (_, __, res) => {
         let profileCardSection = findInReactTree(res, r => 
             r?.type?.displayName === "View" &&
             r?.props?.children.findIndex(i => i?.type?.name === "UserProfileBio") !== -1
         )?.props?.children

         const userProfileTheme = findInReactTree(res, r => 
         {
            return r?.type?.name === "ThemeContextProvider";
         }
        )?.props;

         if (!profileCardSection) return res;

         const { userId } = profileCardSection?.find((r: any) => typeof r?.props?.displayProfile?.userId === "string")?.props?.displayProfile ?? {};

         const index = profileCardSection.findIndex(key => key?.type?.name === "UserProfileConnections");
         profileCardSection.splice(index, 1);

         profileCardSection.unshift(<Connections userId={userId} theme={userProfileTheme?.theme}/>)

     });
   },

   onStop() {
      Patcher.unpatchAll();
   },

   getSettingsPanel({ settings }) {
      return <Settings settings={settings} />;
   }
};

registerPlugin(ShowConnections);