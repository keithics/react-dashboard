import {Navbar} from '@mantine/core';
import {IconLogout, IconSwitchHorizontal} from '@tabler/icons';
import {dashboardStyles} from 'components/dashboard/dashboard.styles';
import NavbarItems from 'components/navbar/navbar-items';

export function Navigationbar() {
  const { classes } = dashboardStyles();
  return (
    <Navbar width={{ base: 300 }} p={'xs'}>
      <Navbar.Section grow>
        <NavbarItems />
      </Navbar.Section>

      <Navbar.Section className={classes.footer}>
        <a
          href=""
          className={classes.link}
          onClick={(event) => event.preventDefault()}
        >
          <IconSwitchHorizontal className={classes.linkIcon} stroke={1.5} />
          <span>Change account</span>
        </a>

        <a
          href=""
          className={classes.link}
          onClick={(event) => event.preventDefault()}
        >
          <IconLogout className={classes.linkIcon} stroke={1.5} />
          <span>Logout</span>
        </a>
      </Navbar.Section>
    </Navbar>
  );
}
