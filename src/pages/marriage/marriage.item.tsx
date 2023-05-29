import { ActionIcon, Anchor } from '@mantine/core';
import { IconPrinter, IconTrash } from '@tabler/icons';
import { useDeleteModal } from 'common/crud/useDeleteModal';
import { ResponseInterface } from 'common/interfaces/request.interface';
import { friendlyDate, getPrintLink } from 'lib/helpers';
import { MarriageInterface } from 'pages/marriage/marriage.interface';
import { MarriageContext } from 'pages/marriage/marriage.routes';
import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

function MarriageItem() {
  const data = useLoaderData() as ResponseInterface<MarriageInterface>;
  const openDeleteModal = useDeleteModal(MarriageContext);

  return (
    <>
      {data?.docs.map((row) => (
        <tr key={row._id}>
          <td key={row._id}>
            <Anchor component={Link} to={`edit/${row._id!}`}>
              {row.bride.firstName} {row.bride.lastName}
            </Anchor>
          </td>
          <td>
              {row.groom.firstName} {row.groom.lastName}
          </td>
          <td>{friendlyDate(row.occasionDate)}</td>
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

export default MarriageItem;
