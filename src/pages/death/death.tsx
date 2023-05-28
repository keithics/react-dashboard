import MainTable from 'components/table/main-table';
import {useBasePath} from 'lib/route-handle';
import BaptismalItem from 'pages/baptismal/baptismal.item';
import {BaptismalResponseInterface} from 'pages/baptismal/baptismal.interface';
import {useLoaderData} from 'react-router-dom';

export default function Death() {
  const data = useLoaderData() as BaptismalResponseInterface;
  const headers = ['Name', 'Sacrament', 'Created Date', 'Last Updated', 'Print', 'Delete'];
  const basePath = useBasePath('death');

  return (
    <MainTable basePath={basePath} title={`Death Certificates`} headers={headers}>
      <BaptismalItem basePath={basePath} data={data} />
    </MainTable>
  );
}
