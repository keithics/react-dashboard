import { AppShell, Title } from '@mantine/core';
import Alert from 'components/alerts/alert';
import { DashboardHeader } from 'components/dashboard/dashboard-header';
import { Navigationbar } from 'components/navbar/navbar';
import NavbarCollapse from 'components/navbar/navbar-collapse';
import { selectSidebarOpen } from 'components/navbar/navbar.slice';
import React from 'react';
import { Outlet } from 'react-router-dom';
import { useAppSelector } from 'rtk/hooks';

export default function Dashboard() {
  const isSidebarOpen = useAppSelector(selectSidebarOpen);

  const nav = isSidebarOpen ? <Navigationbar /> : <NavbarCollapse />;
  return (
    <AppShell
      padding="md"
      navbar={nav}
      header={<DashboardHeader />}
      styles={(theme) => ({
        main: {
          backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[1],
        },
      })}
    >
      <Outlet />
    </AppShell>
  );
}
