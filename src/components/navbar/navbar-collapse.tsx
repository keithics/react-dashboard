import { Navbar, Stack } from '@mantine/core';
import { IconLogout, IconSwitchHorizontal } from '@tabler/icons';
import { navbarMenu } from 'components/navbar/navbar-menu';
import { useState } from 'react';
import { NavbarLink } from 'components/navbar/navbar-link';

export default function NavbarCollapse() {
  const [active, setActive] = useState(2);

  const links = navbarMenu.map((link, index) => (
    <NavbarLink {...link} key={link.label} active={index === active} onClick={() => setActive(index)} />
  ));

  return (
    <Navbar width={{ base: 80 }} p="md">
      <Navbar.Section grow>
        <Stack justify="center" spacing={0}>
          {links}
        </Stack>
      </Navbar.Section>
      <Navbar.Section>
        <Stack justify="center" spacing={0}>
          <NavbarLink icon={IconSwitchHorizontal} label="Change account" />
          <NavbarLink icon={IconLogout} label="Logout" />
        </Stack>
      </Navbar.Section>
    </Navbar>
  );
}
