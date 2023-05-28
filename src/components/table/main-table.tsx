import { Pagination, Table } from '@mantine/core';
import { ResponseInterface } from 'common/interfaces/request.interface';
import SubpageContainer from 'components/containers/subpage-container';
import SubpageTableHeader from 'components/headers/subpage-table.header';
import { MainTableInterface } from 'components/table/main-table.interface';
import { useLoaderData, useNavigate, useParams } from 'react-router-dom';

export default function MainTable<T>({ basePath, title, headers, children, link }: MainTableInterface) {
  const data = useLoaderData() as ResponseInterface<T>;
  let { page } = useParams();
  const navigate = useNavigate();
  page ||= '1';
  const setPage = (nextPage: number) => {
    navigate(`${basePath}/${nextPage}`, { replace: true });
  };

  link ||= basePath + '/new';

  return (
    <>
      <SubpageContainer header={<SubpageTableHeader link={link}>{title}</SubpageTableHeader>}>
        <Table mb={6}>
          <thead>
            <tr>
              {headers.map((h) => (
                <th key={h}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>{children}</tbody>
        </Table>
        <Pagination position="right" size="sm" page={+page} onChange={setPage} total={data.totalPages} />
      </SubpageContainer>
    </>
  );
}
