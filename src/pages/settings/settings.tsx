import {Button} from '@mantine/core';
import {useForm} from '@mantine/form';
import SubpageContainer from 'components/containers/subpage-container';
import {formGenerator} from 'components/form-generator/form-generator';
import settingsFields from 'pages/settings/settings.fields';
import {SettingsInterface} from 'pages/settings/settings.interface';
import {updateSettings} from 'pages/settings/settings.thunks';
import {useLoaderData, useNavigate} from 'react-router-dom';

export default function Settings() {
  const data = useLoaderData() as SettingsInterface;
  const form = useForm<SettingsInterface>({
    initialValues: data,
  });

  const onSubmit = async (values: SettingsInterface) => {
    await updateSettings(values)
  };

    return <>
      <SubpageContainer header="Settings">
        <form onSubmit={form.onSubmit((values) => onSubmit(values))}>
          {formGenerator(settingsFields, form)}
          <Button mt="xl" type="submit">
            Submit
          </Button>
        </form>
      </SubpageContainer>
    </>
}

