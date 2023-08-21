import { Plugin, registerPlugin } from 'enmity/managers/plugins';
import { React } from 'enmity/metro/common';
import { getByProps } from 'enmity/metro';
import { create } from 'enmity/patcher';
import manifest from '../manifest.json';

import Settings from './components/Settings';

const Typing = getByProps('startTyping');
const Patcher = create('show-connections');
const UserProfile = getByProps("PRIMARY_INFO_TOP_OFFSET", "SECONDARY_INFO_TOP_MARGIN", "SIDE_PADDING")
const UserTheme = getByProps('theme', 'primaryColor');
import { findInReactTree } from "enmity/utilities"
import Connections from './components/Connections';

const ShowConnections: Plugin = {
   ...manifest,

   onStart() {
      Patcher.instead(Typing, 'startTyping', () => { });
      Patcher.instead(Typing, 'stopTyping', () => { });
      Patcher.after(UserProfile.default, "type", (_, __, res) => {
         const profileCardSection = findInReactTree(res, r => 
             r?.type?.displayName === "View" &&
             r?.props?.children.findIndex(i => i?.type?.name === "UserProfileBio") !== -1
         )?.props?.children

         if (!profileCardSection) return res;

         const { userId } = profileCardSection?.find((r: any) => typeof r?.props?.displayProfile?.userId === "string")?.props?.displayProfile ?? {};
         

         profileCardSection.unshift(<Connections userId={userId} theme="light"/>)
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