import { FormRadio, FormRow, FormSelect, ScrollView } from 'enmity/components';
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
   </ScrollView>;
};