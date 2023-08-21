import { FormRow, FormSelect } from 'enmity/components';
import { SettingsStore } from 'enmity/api/settings';
import { React } from 'enmity/metro/common';

interface SettingsProps {
   settings: SettingsStore;
}

export default ({ settings }: SettingsProps) => {
   return <FormRow
      label='Example Setting'
      trailing={
         <FormSelect
            options={ [ "bruh", "bruh2" ] }
            value={settings.get('example', true)}
            onValueChange={() => settings.toggle('example', true)}
         />
      }
   />;
};