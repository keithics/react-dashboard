import {Tooltip, UnstyledButton} from '@mantine/core';
import {NavbarLinkProps} from 'components/dashboard/dashboard.interface';
import {dasboardNavbarCollapseStyle} from 'components/dashboard/dashboard.styles';

export function NavbarLink({ icon: Icon, label, active, onClick }: NavbarLinkProps) {
  const { classes, cx } = dasboardNavbarCollapseStyle();
  return (
    <Tooltip label={label} position="right" transitionDuration={0}>
      <UnstyledButton onClick={onClick} className={cx(classes.link, { [classes.active]: active })}>
        <Icon stroke={1.5} />
      </UnstyledButton>
    </Tooltip>
  );
}
