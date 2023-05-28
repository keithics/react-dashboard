import MainTable from 'components/table/main-table';
import { useBasePath } from 'lib/route-handle';
import BaptismalItem from 'pages/baptismal/baptismal.item';
import { getType } from 'pages/baptismal/baptismal.helper';
import { useLoaderData } from 'react-router-dom';

export default function Baptismal() {
  const data = useLoaderData();
  const headers = ['Name', 'Baptismal Date', 'Created Date', 'Last Updated', 'Print', 'Delete'];
  const basePath = useBasePath(getType());

  return (
    <MainTable basePath={basePath} title={`${getType()} Certificates`} headers={headers}>
      <BaptismalItem basePath={basePath} data={data} />
    </MainTable>
  );
}
