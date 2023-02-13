import {DatePicker} from '@mantine/dates';
import dayjs from 'dayjs';
import React from 'react';

interface JsonInputProps
    extends Omit<React.ComponentPropsWithoutRef<typeof DatePicker>, 'error' | 'onChange'> {
  value: Date;
  onChange(value: Date | null): void;
}

export default function DateInput({ value, onChange, onBlur, onFocus, ...others }: JsonInputProps) {

  return (
      <DatePicker
          value={
            value === null || value === undefined ? null : dayjs(value).toDate()
          }
          onChange={(date) => {
            if (date !== undefined && date !== null) {
              onChange(dayjs(date).toDate());
            } else onChange(null);
          }}
          {...others}
      />
  );
}
