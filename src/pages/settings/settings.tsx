import { Button } from '@mantine/core';
import { useForm } from '@mantine/form';
import SubpageContainer from 'components/containers/subpage-container';
import { formGenerator } from 'components/form-generator/form-generator';
import settingsFields from 'pages/settings/settings.fields';
import { SettingsInterface } from 'pages/settings/settings.interface';
import { updateSettings } from 'pages/settings/settings.thunks';
import { useLoaderData, useNavigate } from 'react-router-dom';

export default function Settings() {
  const navigate = useNavigate();
  const data = useLoaderData() as SettingsInterface;
  const form = useForm<SettingsInterface>({
    initialValues: data,
  });

  const onSubmit = async (values: SettingsInterface) => {
    const formData = new FormData();
    for (let valuesKey in form.values) {
      // @ts-ignore
      formData.append(valuesKey, form.values[valuesKey]);
    }

    formData.delete("logo");
    formData.delete("currentPriestSignature");

    formData.append('logo', form.values.logo);
    formData.append('currentPriestSignature', form.values.currentPriestSignature);
    await updateSettings(formData);
  };

  return (
    <>
      <SubpageContainer header="Settings">
        <div>
          <form
            onSubmit={form.onSubmit((values) => {
              console.log(values);
              onSubmit(values);
            })}
          >
            {formGenerator(settingsFields, form)}
            <Button mt="xl" type="submit">
              Submit
            </Button>
          </form>
        </div>
      </SubpageContainer>
    </>
  );
}
