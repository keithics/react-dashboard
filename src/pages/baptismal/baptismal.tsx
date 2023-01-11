import { Box, Paper, Table } from '@mantine/core';
import SubpageContainer from 'components/containers/subpage-container';
import SubpageTableHeader from 'components/headers/subpage-table.header';
import {BaptismalResponseInterface} from 'pages/baptismal/baptismal.interface';
import BaptismalItem from 'pages/baptismal/baptismal.item';
import { getBaptisms } from 'pages/baptismal/baptismal.thunks';
import { useQuery } from 'react-query';
import {useLoaderData} from 'react-router-dom';

export default function Baptismal() {
  const data = useLoaderData() as BaptismalResponseInterface

  return (
    <SubpageContainer header={<SubpageTableHeader>Baptismal Certificates</SubpageTableHeader>}>
      <Table>
        <thead>
        <tr>
          <th>Name</th>
          <th>Birth Date</th>
          <th>Last Updated</th>
          <th></th>
        </tr>
        </thead>
        <tbody>
        <BaptismalItem data={data} />
        </tbody>
      </Table>
    </SubpageContainer>
  );
}
