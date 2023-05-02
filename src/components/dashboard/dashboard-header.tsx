import { Burger, Group, Header } from '@mantine/core';
import { dashboardHeaderStyle } from 'components/dashboard/dashboard.styles';
import { selectSidebarOpen, toggleSidebar } from 'components/navbar/navbar.slice';
import { getApiUrl } from 'lib/helpers';
import {selectUserData} from 'pages/user/user.slice';
import { useAppDispatch, useAppSelector } from 'rtk/hooks';

export function DashboardHeader() {
  const dispatch = useAppDispatch();
  const isSidebarOpen = useAppSelector(selectSidebarOpen);
  const userData = useAppSelector(selectUserData);
  const { classes } = dashboardHeaderStyle();
  const setSidebarOpen = (open: boolean) => {
    dispatch(toggleSidebar(open));
  };

  return (
    <Header height={56} className={classes.header}>
      <div className={classes.inner}>
        <Group>
          <Burger opened={!isSidebarOpen} onClick={() => setSidebarOpen(!isSidebarOpen)} size="sm" />
          <b>Our Lady Of the Sacred Heart Parish</b>
        </Group>
      </div>
    </Header>
  );
}
