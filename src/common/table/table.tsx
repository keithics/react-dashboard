import {TableInterface} from 'common/table/table.interface';
import MainTable from 'components/table/main-table';
import {useBasePath} from 'lib/route-handle';
import BaptismalItem from 'pages/baptismal/baptismal.item';
import {useLoaderData} from 'react-router-dom';

export default function Table({headers,path,title}:TableInterface) {
  const data = useLoaderData();
  const basePath = useBasePath(path);
  return (
    <MainTable basePath={basePath} title={title} headers={headers}>
      <BaptismalItem basePath={basePath} data={data} />
    </MainTable>
  );
}
