import { navbarMenu } from 'components/navbar/navbar-menu';
import { dashboardStyles } from 'components/dashboard/dashboard.styles';
import { NavLink } from 'react-router-dom';

export default function NavbarItems() {
  const { classes, cx } = dashboardStyles();
  return (
    <>
      {navbarMenu.map((item) => (
        <NavLink
          key={item.label}
          to={item.link}
          className={({ isActive }) => {
            return cx(classes.link, { [classes.linkActive]: isActive });
          }}
        >
          <item.icon className={classes.linkIcon} stroke={1.5} />
          {item.label}
        </NavLink>
      ))}
    </>
  );
}
