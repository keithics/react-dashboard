import { Box, Paper } from '@mantine/core';
import SubpageHeader from 'components/headers/subpage.header';
import Alert from 'components/alerts/alert';
import { ReactNode } from 'react';

export default function SubpageContainer({ header, children }: { header: ReactNode; children: ReactNode }) {
  return (
    <>
      <Box>
        <SubpageHeader>{header}</SubpageHeader>
        <Alert />
        <Paper shadow="xs" p="md" mt="md">
          {children}
        </Paper>
      </Box>
    </>
  );
}
