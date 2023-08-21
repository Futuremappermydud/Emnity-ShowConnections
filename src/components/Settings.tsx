import { FormRadio, FormRow, FormSelect } from 'enmity/components';
import { SettingsStore } from 'enmity/api/settings';
import { React } from 'enmity/metro/common';

interface SettingsProps {
   settings: SettingsStore;
}

export default ({ settings }: SettingsProps) => {
   return <FormRow trailing=
      {
         [
            <FormRadio label="Compact" value={true}/>,
            <FormRadio label="Cozy" value={false}/>,
            <FormRadio label="Roomy" value={false}/>
         ]
      }
   />;
};