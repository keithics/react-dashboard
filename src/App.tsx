import { MantineProvider } from '@mantine/core';
import Dashboard from 'components/dashboard/dashboard';

export default function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Dashboard />
    </MantineProvider>
  );
}
