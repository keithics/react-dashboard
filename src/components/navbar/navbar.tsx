import { Navbar } from '@mantine/core';
import { IconLogout, IconSettings } from '@tabler/icons';
import { dashboardStyles } from 'components/dashboard/dashboard.styles';
import NavbarItems from 'components/navbar/navbar-items';
import { clearAllData } from 'lib/cookie.helper';

export function Navigationbar() {
  const logoutUser = () => {
    clearAllData();
    window.location.href = '/';
  };
  const { classes } = dashboardStyles();
  return (
    <Navbar width={{ base: 300 }} p={'xs'}>
      <Navbar.Section grow>
        <NavbarItems />
      </Navbar.Section>

      <Navbar.Section className={classes.footer}>
        <a href="" className={classes.link} onClick={(event) => event.preventDefault()}>
          <IconSettings className={classes.linkIcon} stroke={1.5} />
          <span>Settings</span>
        </a>

        <a
          href=""
          className={classes.link}
          onClick={(event) => {
            event.preventDefault();
            logoutUser();
          }}
        >
          <IconLogout className={classes.linkIcon} stroke={1.5} />
          <span>Logout</span>
        </a>
      </Navbar.Section>
    </Navbar>
  );
}
