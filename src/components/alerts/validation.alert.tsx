import {Alert} from '@mantine/core';
import {IconAlertCircle} from '@tabler/icons';
import {AlertBoxesInterface} from 'components/alerts/alert.interface';
import React from 'react';

export default function AlertValidation({ message, onClose }:AlertBoxesInterface) {
  return (
      <Alert icon={<IconAlertCircle size={16} />} color="yellow" withCloseButton onClose={onClose}>
        {message}
      </Alert>
  );
}
