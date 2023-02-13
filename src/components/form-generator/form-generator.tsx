import {Grid, NumberInput, Select, SelectProps, TextInput} from '@mantine/core';
import {UseFormReturnType} from '@mantine/form';
import {IconCalendar} from '@tabler/icons';
import {FormGeneratorInterface, FormType} from 'components/form-generator/form-generator.interface';
import DateInput from 'components/form-inputs/date-input';
import {dateFormat} from 'config';
import {snakeToCapitalize} from 'lib/helpers';

// todo separate each component type to a different file using dynamic imports
function getFormField(form: UseFormReturnType<any>, formValues: FormGeneratorInterface) {
  const name = formValues.name;
  const formLabel = formValues.label || snakeToCapitalize(name);
  const type = formValues.type || 'input';
  const isRequired = formValues.isOptional !== true;
  switch (type) {
    case FormType.NUMBER:
      return <NumberInput label={formLabel} withAsterisk={isRequired} {...form.getInputProps(name)} />;
    case FormType.SELECT:
      const selectInput = formValues as SelectProps
      return <Select {...selectInput} withAsterisk={isRequired} label={formLabel} {...form.getInputProps(name)} />;
    case FormType.DATE:
      return (
        <DateInput
          label={formLabel}
          withAsterisk={isRequired}
          allowFreeInput
          inputFormat={dateFormat}
          icon={<IconCalendar size={16} />}
          {...form.getInputProps(name)}
        />
      );
    case FormType.PERSON:
      const firstName = name + '.firstName';
      const lastName = name + '.lastName';
      const firstNameLabel = formLabel + ' First Name';
      const lastNameLabel = formLabel + ' Last Name';

      return (
        <Grid>
          <Grid.Col span={6}>
            <TextInput
              key={firstName}
              withAsterisk={isRequired}
              label={firstNameLabel}
              {...form.getInputProps(firstName)}
            />
          </Grid.Col>
          <Grid.Col span={6}>
            <TextInput
              key={lastName}
              withAsterisk={isRequired}
              label={lastNameLabel}
              {...form.getInputProps(lastName)}
            />
          </Grid.Col>
        </Grid>
      );
    default:
      return <TextInput key={name} withAsterisk={isRequired} label={formLabel} {...form.getInputProps(name)} />;
  }
}

export function formGenerator(fields: FormGeneratorInterface[], form: UseFormReturnType<any>) {
  return (
    <Grid>
      {fields.map((f) => {
        const formSpan = f.span || 6;
        return (
          <Grid.Col key={f.name + '-col'} span={formSpan}>
            {getFormField(form, f)}
          </Grid.Col>
        );
      })}
    </Grid>
  );
}
