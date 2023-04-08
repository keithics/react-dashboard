import MainTable from 'components/table/main-table';
import { getBasePath } from 'lib/route-handle';
import BaptismalItem from 'pages/baptismal/baptismal-item';
import { getType } from 'pages/baptismal/baptismal.helper';
import { BaptismalResponseInterface } from 'pages/baptismal/baptismal.interface';
import { useLoaderData } from 'react-router-dom';

export default function Baptismal() {
  const data = useLoaderData() as BaptismalResponseInterface;
  const headers = ['Name', 'Baptismal Date', 'Created Date', 'Last Updated', 'Print', 'Delete'];
  const basePath = getBasePath(getType());

  return (
    <MainTable basePath={basePath} title={`${getType()} Certificates`} headers={headers}>
      <BaptismalItem basePath={basePath} data={data} />
    </MainTable>
  );
}
