import { FormRadio, FormRow, FormSelect, ScrollView, View } from 'enmity/components';
import { SettingsStore } from 'enmity/api/settings';
import { React, StyleSheet, Constants } from 'enmity/metro/common';
import Credits from './Credits';
import manifest from "../../manifest.json";

interface SettingsProps {
   settings: SettingsStore;
}

type DefaultObject = { [key: string]: string | number | DefaultObject }
const shadow = (opacity: number = 0.10): DefaultObject => ({
    shadowColor: "#000",
    shadowOffset: {
        width: 1,
        height: 4,
    },
    shadowOpacity: opacity,
    shadowRadius: 4.65,
    elevation: 8
});


const styles = StyleSheet.createThemedStyleSheet({
   container: {
      width: "90%",
      marginLeft: '5%',
      borderRadius: 10,
      backgroundColor: Constants.ThemeColorMap.BACKGROUND_MOBILE_SECONDARY,
      shadow
   }
});

export default ({ settings }: SettingsProps) => {
   return <ScrollView>
      <Credits manifest={manifest}/>
      <View style={[styles.container]}>
         <FormRow label="Compact" trailing=
            {
               <FormRadio value={false}/>
            }
         />
         <FormRow label="Cozy" trailing=
            {
               <FormRadio value={true}/>
            }
         />
         <FormRow label="Roomy" trailing=
            {
               <FormRadio value={false}/>
            }
         />
      </View>
   </ScrollView>;
};