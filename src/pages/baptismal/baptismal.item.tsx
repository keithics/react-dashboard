import { Button } from '@mantine/core';
import { friendlyDate } from 'lib/helpers';
import { BaptismalResponseInterface } from 'pages/baptismal/baptismal.interface';
import { Link } from 'react-router-dom';

function BaptismalItem({ data }: { data: BaptismalResponseInterface }) {
  return (
    <>
      {data?.docs.map((row) => (
        <tr key={row._id}>
          <td>
            <Link to={`edit/${row._id!}`}>
              {row.firstName} {row.lastName}
            </Link>
          </td>
          <td>{friendlyDate(row.birthDate)}</td>
          <td>{friendlyDate(row.updatedAt!)}</td>
          <td>
            <Button color="red">delete</Button>
          </td>
        </tr>
      ))}
    </>
  );
}

export default BaptismalItem;
