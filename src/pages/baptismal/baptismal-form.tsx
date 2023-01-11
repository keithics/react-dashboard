import { Button } from '@mantine/core';
import { useForm } from '@mantine/form';
import SubpageContainer from 'components/containers/subpage-container';
import { formGenerator } from 'components/form-generator/form-generator';
import { customJoi } from 'lib/joi';
import baptismalFields from 'pages/baptismal/baptismal.fields';
import { BaptismalInterface } from 'pages/baptismal/baptismal.interface';
import { baptismalSchema } from 'pages/baptismal/baptismal.schema';
import { saveBirth } from 'pages/baptismal/baptismal.thunks';
import { useLoaderData, useNavigate } from 'react-router-dom';

export default function BaptismalForm() {
  const navigate = useNavigate();
  const data = useLoaderData() as BaptismalInterface;
  const form = useForm<BaptismalInterface>({
    initialValues: data,
    validate: customJoi(baptismalSchema),
  });

  const onSubmit = async (values: BaptismalInterface) => {

    const res = await saveBirth(values);
    if (res) {
      navigate('/baptism');
    }
  };

  return (
    <SubpageContainer header="Add New Baptismal">
      <form onSubmit={form.onSubmit((values) => onSubmit(values))}>
        {formGenerator(baptismalFields, form)}
        <Button mt="xl" type="submit">
          Submit
        </Button>
      </form>
    </SubpageContainer>
  );
}
