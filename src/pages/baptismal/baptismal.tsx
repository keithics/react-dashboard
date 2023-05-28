import { ResponseInterface } from 'common/interfaces/request.interface';
import MainTable from 'components/table/main-table';
import { useBasePath } from 'lib/route-handle';
import { BaptismalInterface } from 'pages/baptismal/baptismal.interface';
import BaptismalItem from 'pages/baptismal/baptismal.item';
import { getType } from 'pages/baptismal/baptismal.helper';
import { useLoaderData } from 'react-router-dom';

export default function Baptismal() {
  const data = useLoaderData() as ResponseInterface<BaptismalInterface>;
  const headers = ['Name', 'Baptismal/Confirmation', 'Created Date', 'Last Updated', 'Print', 'Delete'];
  const basePath = useBasePath(getType());

  return (
    <MainTable basePath={basePath} title={`${getType()} Certificates`} headers={headers}>
      <BaptismalItem basePath={basePath} data={data} />
    </MainTable>
  );
}
