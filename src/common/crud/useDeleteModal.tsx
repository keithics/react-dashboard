import { Text } from '@mantine/core';
import { openConfirmModal } from '@mantine/modals';
import { showNotification } from '@mantine/notifications';
import { CrudContextInterface } from 'common/crud/crud.interface';
import { Context, useContext } from 'react';
import { useRevalidator } from 'react-router-dom';

export function useDeleteModal<T>(context: Context<CrudContextInterface<T>>) {
  const revalidate = useRevalidator();
  const { remove, url } = useContext<CrudContextInterface<T>>(context);

  const openDeleteModal = (id: string) => {
    openConfirmModal({
      title: 'Delete Item',
      centered: true,
      children: <Text size="sm">Are you sure you want to delete this item?</Text>,
      labels: { confirm: 'Delete', cancel: 'Cancel' },
      confirmProps: { color: 'red' },
      onConfirm: async function () {
        await remove?.(url! + '/' + id);
        revalidate.revalidate();
        showNotification({
          message: 'Item Deleted',
          color: 'red',
        });
      },
    });
  };

  return openDeleteModal;
}
