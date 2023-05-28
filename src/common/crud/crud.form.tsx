import { Button } from '@mantine/core';
import { useForm } from '@mantine/form';
import { FormValidateInput } from '@mantine/form/lib/types';
import { CrudFormInterface, TWithId } from 'common/crud/crud.interface';
import SubpageContainer from 'components/containers/subpage-container';
import { formGenerator } from 'components/form-generator/form-generator';
import { hasProp } from 'lib/helpers';
import { customJoi } from 'lib/joi';
import { useLoaderData, useNavigate } from 'react-router-dom';

export default function CrudForm<T>({ schema, fields, add, update, redirectUrl }: CrudFormInterface<T>) {
  const navigate = useNavigate();
  const data = useLoaderData() as T;
  const form = useForm<T>({
    initialValues: data,
    validate: customJoi(schema) as FormValidateInput<T>,
  });

  const hasId = hasProp<T>(data, '_id');
  const header = hasId ? 'Update' : 'Create';

  const onSubmit = async (values: T) => {
    const res = hasId ? await update(values as TWithId<T>) : await add(values);
    if (res) {
      navigate(redirectUrl);
    }
  };

  return (
    <SubpageContainer header={`${header}`}>
      <form onSubmit={form.onSubmit((values) => onSubmit(values))}>
        {formGenerator(fields, form)}
        <Button mt="xl" type="submit">
          Submit
        </Button>
      </form>
      {/*<pre>{JSON.stringify(form.errors, null, 2)}</pre>*/}
    </SubpageContainer>
  );
}
