import { ActionIcon, Anchor } from '@mantine/core';
import { IconPrinter, IconTrash } from '@tabler/icons';
import { useDeleteModal } from 'common/crud/useDeleteModal';
import { ResponseInterface } from 'common/interfaces/request.interface';
import { friendlyDate, getPrintLink } from 'lib/helpers';
import { DeathInterface } from 'pages/death/death.interface';
import { DeathContext } from 'pages/death/death.routes';
import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

function DeathItem() {
  const data = useLoaderData() as ResponseInterface<DeathInterface>;
  const openDeleteModal = useDeleteModal(DeathContext);

  return (
    <>
      {data?.docs.map((row) => (
        <tr key={row._id}>
          <td key={row._id}>
            <Anchor component={Link} to={`edit/${row._id!}`}>
              {row.firstName} {row.lastName}
            </Anchor>
          </td>
          <td>{friendlyDate(row.burialDate)}</td>
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

export default DeathItem;
