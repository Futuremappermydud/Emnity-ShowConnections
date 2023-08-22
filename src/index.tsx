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
import { json } from 'stream/consumers';

const ShowConnections: Plugin = {
   ...manifest,

   onStart() {
      Patcher.after(UserProfile.default, "type", (_, __, res) => {
         const profileCardSection = findInReactTree(res, r => 
             r?.type?.displayName === "View" &&
             r?.props?.children.findIndex(i => i?.type?.name === "UserProfileBio") !== -1
         )?.props?.children

         const userProfileTheme = findInReactTree(res, r => 
         {
            console.log(r?.type?.displayName);
            if(r?.type?.name === "ThemeContextProvider")
            {
               console.log("found");
               const { children, ...props } = r?.props
               console.log(JSON.stringify(props));
               return true;
            }
            return false;
         }
        )?.props?.children

         if (!profileCardSection) return res;

         const { userId } = profileCardSection?.find((r: any) => typeof r?.props?.displayProfile?.userId === "string")?.props?.displayProfile ?? {};
         const { theme } = userProfileTheme?.find((r: any) => typeof r?.props?.theme === "string")?.props?.theme ?? {};

         profileCardSection.unshift(<Connections userId={userId} theme={theme}/>)
     })
   },

   onStop() {
      Patcher.unpatchAll();
   },

   getSettingsPanel({ settings }) {
      return <Settings settings={settings} />;
   }
};

registerPlugin(ShowConnections);