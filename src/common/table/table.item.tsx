import { ActionIcon, Text } from '@mantine/core';
import { openConfirmModal } from '@mantine/modals';
import { showNotification } from '@mantine/notifications';
import { IconPrinter, IconTrash } from '@tabler/icons';
import { TWithId } from 'common/crud/crud.interface';
import { ResponseInterface } from 'common/interfaces/request.interface';
import { getPrintLink } from 'lib/helpers';
import { deleteBirth } from 'pages/baptismal/baptismal.thunks';
import React from 'react';
import { useRevalidator } from 'react-router-dom';

function TableItem<T>({ data, rows }: { data: ResponseInterface<TWithId<T>>; rows: React.ReactElement }) {
  const revalidate = useRevalidator();
  const openDeleteModal = (id: string) => {
    openConfirmModal({
      title: 'Delete Item',
      centered: true,
      children: <Text size="sm">Are you sure you want to delete this item?</Text>,
      labels: { confirm: 'Delete', cancel: 'Cancel' },
      confirmProps: { color: 'red' },
      onConfirm: async function () {
        await deleteBirth(id);
        revalidate.revalidate();
        return showNotification({
          message: 'Item Deleted',
          color: 'red',
        });
      },
    });
  };

  return (
    <>
      {data?.docs.map((row) => (
        <tr key={row._id}>
          {rows}
          <td width={20}>
            <ActionIcon color="green">
              <ActionIcon target="_blank" component="a" href={getPrintLink('baptismal', row._id as string)}>
                <IconPrinter size={18} />
              </ActionIcon>
            </ActionIcon>
          </td>
          <td width={20}>
            <ActionIcon color="red" onClick={() => openDeleteModal(row._id!)}>
              <IconTrash size={18} />
            </ActionIcon>
          </td>
        </tr>
      ))}
    </>
  );
}

export default TableItem;
