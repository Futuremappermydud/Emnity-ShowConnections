import { Plugin, registerPlugin } from 'enmity/managers/plugins';
import { React } from 'enmity/metro/common';
import { getByProps } from 'enmity/metro';
import { create } from 'enmity/patcher';
import manifest from '../manifest.json';

import Settings from './components/Settings';

const Patcher = create('show-connections');
const UserProfile = getByProps("PRIMARY_INFO_TOP_OFFSET", "SECONDARY_INFO_TOP_MARGIN", "SIDE_PADDING")
const UserProfileStore = getByProps("getUserProfile");
import { findInReactTree } from "enmity/utilities"
import Connections from './components/Connections';
import { getBoolean } from 'enmity/api/settings';

function encode(primary: number, accent: number): string {
   const message = `[#${primary.toString(16).padStart(6, "0")},#${accent.toString(16).padStart(6, "0")}]`;
   const padding = "";
   const encoded = Array.from(message)
       .map(x => x.codePointAt(0))
       .filter(x => x! >= 0x20 && x! <= 0x7f)
       .map(x => String.fromCodePoint(x! + 0xe0000))
       .join("");

   return (padding || "") + " " + encoded;
}

// Courtesy of Cynthia.
function decode(bio: string): Array<number> | null {
   if (bio == null) return null;

   const colorString = bio.match(
       /\u{e005b}\u{e0023}([\u{e0061}-\u{e0066}\u{e0041}-\u{e0046}\u{e0030}-\u{e0039}]+?)\u{e002c}\u{e0023}([\u{e0061}-\u{e0066}\u{e0041}-\u{e0046}\u{e0030}-\u{e0039}]+?)\u{e005d}/u,
   );
   if (colorString != null) {
       const parsed = [...colorString[0]]
           .map(x => String.fromCodePoint(x.codePointAt(0)! - 0xe0000))
           .join("");
       const colors = parsed
           .substring(1, parsed.length - 1)
           .split(",")
           .map(x => parseInt(x.replace("#", "0x"), 16));

       return colors;
   } else {
       return null;
   }
}

const ShowConnections: Plugin = {
   ...manifest,

   onStart() {
      Patcher.instead(UserProfileStore, 'getUserProfile', (self, args, res) => {
         console.log('1');
         let result = res.apply(self, args);
         console.log('2');
         if (true && result?.themeColors) return result;
         console.log('3');
         const colors = decode(result?.bio);
         console.log('4');
         if (colors) {
            console.log('5');
            result.themeColors = colors;
            console.log('6');
            result.premiumType = 2;
         }
         return result;
      });

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

        userProfileTheme.primaryColor = 335222;
        userProfileTheme.secondaryColor = 4183545;

         if (!profileCardSection) return res;

         const { userId } = profileCardSection?.find((r: any) => typeof r?.props?.displayProfile?.userId === "string")?.props?.displayProfile ?? {};
         
         const profile = UserProfileStore.getUserProfile(userId);
         console.log(profile.bio.length);
         console.log(profile.bio);

         if(!getBoolean(manifest.name, "keepOg", false))
         {
            const index = profileCardSection.findIndex(key => key?.type?.name === "UserProfileConnections");
            profileCardSection.splice(index, 1);
         }

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