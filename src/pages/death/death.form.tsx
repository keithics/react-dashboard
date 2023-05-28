import { Button } from '@mantine/core';
import { useForm } from '@mantine/form';
import SubpageContainer from 'components/containers/subpage-container';
import { formGenerator } from 'components/form-generator/form-generator';
import { customJoi } from 'lib/joi';
import baptismalFields from 'pages/baptismal/baptismal.fields';
import { getType } from 'pages/baptismal/baptismal.helper';
import { BaptismalInterface } from 'pages/baptismal/baptismal.interface';
import { baptismalSchema } from 'pages/baptismal/baptismal.schema';
import { addBirth, updateBirth } from 'pages/baptismal/baptismal.thunks';
import { useLoaderData, useNavigate } from 'react-router-dom';

export default function DeathForm() {
  const navigate = useNavigate();
  const data = useLoaderData() as BaptismalInterface;
  const form = useForm<BaptismalInterface>({
    initialValues: data,
    validate: customJoi(baptismalSchema),
  });

  const hasId = Object.hasOwn(data, '_id');
  const header = hasId ? 'Update' : 'New';

  const onSubmit = async (values: BaptismalInterface) => {
    const upsert = hasId ? updateBirth : addBirth;
    const res = await upsert(values);
    if (res) {
      navigate(`/${getType()}`);
    }
  };

  return (
    <SubpageContainer header={`${header} ${getType()}`}>
      <form onSubmit={form.onSubmit((values) => onSubmit(values))}>
        {formGenerator(baptismalFields, form)}
        <Button mt="xl" type="submit">
          Submit
        </Button>
      </form>
    </SubpageContainer>
  );
}
