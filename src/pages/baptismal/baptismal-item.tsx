import { ActionIcon, Anchor, Text } from '@mantine/core';
import { openConfirmModal } from '@mantine/modals';
import { showNotification } from '@mantine/notifications';
import { IconPrinter, IconTrash } from '@tabler/icons';
import { friendlyDate } from 'lib/helpers';
import { BaptismalResponseInterface } from 'pages/baptismal/baptismal.interface';
import { deleteBirth } from 'pages/baptismal/baptismal.thunks';
import { Link, useRevalidator } from 'react-router-dom';

function BaptismalItem({ data,basePath }: { data: BaptismalResponseInterface,basePath:string }) {
  const revalidate = useRevalidator();
  const openDeleteModal = (id: string) =>
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

  return (
    <>
      {data?.docs.map((row) => (
        <tr key={row._id}>
          <td>
            <Anchor component={Link} to={`${basePath}/edit/${row._id!}`}>
              {row.firstName} {row.lastName}
            </Anchor>
          </td>
          <td>{friendlyDate(row.birthDate)}</td>
          <td>{friendlyDate(row.createdAt!)}</td>
          <td>{friendlyDate(row.updatedAt!)}</td>
          <td width={20}>
            <ActionIcon color="green">
              <IconPrinter size={18} />
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

export default BaptismalItem;
