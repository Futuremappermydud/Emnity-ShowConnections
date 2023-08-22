import { FormSwitch, FormRadio, FormRow, FormSelect, ScrollView, View } from 'enmity/components';
import { get, getBoolean, set, SettingsStore } from 'enmity/api/settings';
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
      marginTop: 25,
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
         <FormRow 
            label="Compact" 
            trailing={<FormRadio selected={get(manifest.name, "mode", "cozy") === "compact"}/>} 
            onPress={() => {
               set(manifest.name, "mode", "compact");;
             }}
         />
         <FormRow 
            label="Cozy" 
            trailing={<FormRadio selected={get(manifest.name, "mode", "cozy") === "cozy"}/>} 
            onPress={() => {
               set(manifest.name, "mode", "cozy");;
             }}
         />
         <FormRow 
            label="Roomy" 
            trailing={<FormRadio selected={get(manifest.name, "mode", "cozy") === "roomy"}/>} 
            onPress={() => {
               set(manifest.name, "mode", "roomy");;
             }}
         />
         <FormRow 
            label="Extreme" 
            trailing={<FormRadio selected={get(manifest.name, "mode", "cozy") === "extreme"}/>} 
            onPress={() => {
               set(manifest.name, "mode", "extreme");;
             }}
         />
         <FormRow
            label="Keep Original Connections"
            subLabel="Whether to keep the original connections in popout or to hide them"
            trailing={<FormSwitch value={getBoolean(manifest.name, "keepOg", false)} onChange={(value)=>{set(manifest.name, "keepOg", value);}} />}
         />
      </View>
   </ScrollView>;
};