import { Title } from '@mantine/core';

export default function SubpageHeader({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Title order={2}>
        {children}
      </Title>
    </>
  );
}


