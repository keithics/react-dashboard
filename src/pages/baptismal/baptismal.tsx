import MainTable from 'components/table/main-table';
import {getBasePath} from 'lib/route-handle';
import BaptismalItem from 'pages/baptismal/baptismal-item';
import {BaptismalResponseInterface} from 'pages/baptismal/baptismal.interface';
import {useLoaderData} from 'react-router-dom';

export default function Baptismal() {
  const data = useLoaderData() as BaptismalResponseInterface;
  const headers = ['Name', 'Birth Date','Created Date', 'Last Updated', 'Print', 'Delete'];
  const basePath = getBasePath('baptismal');

  return (
    <MainTable basePath={basePath} title="Baptismal Certificates" headers={headers}>
      <BaptismalItem basePath={basePath} data={data} />
    </MainTable>
  );
}
