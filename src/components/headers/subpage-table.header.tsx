import { Button } from '@mantine/core';
import { useCommonStyles } from 'common/styles/common.styles';
import SubpageHeader from 'components/headers/subpage.header';
import {ReactNode} from 'react';
import { Link } from 'react-router-dom';

function SubpageTableHeader({ children, link = 'new' }: { children: ReactNode; link?: string }) {
  const {
    classes: { subpageTitle },
  } = useCommonStyles();

  return (
    <>
      <div className={subpageTitle}>
        <SubpageHeader>{children}</SubpageHeader>
        <Link to={link}>
          <Button>Add New</Button>
        </Link>
      </div>
    </>
  );
}

export default SubpageTableHeader;
