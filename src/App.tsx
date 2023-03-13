import { MantineProvider } from '@mantine/core';
import { ModalsProvider } from '@mantine/modals';
import { NotificationsProvider } from '@mantine/notifications';
import Dashboard from 'components/dashboard/dashboard';
export default function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <ModalsProvider>
        <NotificationsProvider>
          <Dashboard />
        </NotificationsProvider>
      </ModalsProvider>
    </MantineProvider>
  );
}
