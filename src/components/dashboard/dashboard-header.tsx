import {Burger, Group, Header} from '@mantine/core';
import {dashboardHeaderStyle} from 'components/dashboard/dashboard.styles';
import {selectSidebarOpen, toggleSidebar} from 'components/navbar/navbar.slice';
import {useAppDispatch, useAppSelector} from 'rtk/hooks';

export function DashboardHeader() {
  const dispatch = useAppDispatch();
  const isSidebarOpen = useAppSelector(selectSidebarOpen);
  const { classes } = dashboardHeaderStyle();
  const setSidebarOpen = (open:boolean) => {
    dispatch(toggleSidebar(open));
  };

  return (
    <Header height={56} className={classes.header}>
      <div className={classes.inner}>
        <Group>
          <Burger opened={!isSidebarOpen} onClick={() => setSidebarOpen(!isSidebarOpen)} size="sm" />
          Logo
        </Group>
      </div>
    </Header>
  );
}
