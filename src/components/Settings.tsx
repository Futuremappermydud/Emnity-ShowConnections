import { FormDivider, FormRadio, FormRow, FormSelect, ScrollView, TouchableHighlight } from 'enmity/components';
import { SettingsStore } from 'enmity/api/settings';
import { React } from 'enmity/metro/common';
import Credits from './Credits';
import manifest from "../../manifest.json";

interface SettingsProps {
   settings: SettingsStore;
}

export default ({ settings }: SettingsProps) => {
   return <ScrollView>
      <Credits manifest={manifest}/>
      <FormDivider/>
      <TouchableHighlight>
         <FormRow label="Compact" trailing=
            {
               <FormRadio value={false}/>
            }
         />
      </TouchableHighlight>
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
   </ScrollView>;
};