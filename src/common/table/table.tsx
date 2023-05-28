import { TableInterface } from 'common/table/table.interface';
import MainTable from 'components/table/main-table';

export default function Table<T>({ headers, path, title, children }: TableInterface) {
  return (
    <MainTable basePath={path} title={title} headers={headers}>
      {children}
    </MainTable>
  );
}
