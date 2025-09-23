import NavLink from '../../atoms/NavLink';
import Text from '../../atoms/text';

export type NavItem = {
  label: string;
  href?: string;
  children?: { label: string; href: string }[];
};

type NavMenuProps = {
  items: NavItem[];
};

export default function NavMenu({ items }: NavMenuProps) {
  return (
    <nav className="nav-links">
      {items.map(item => (
        <NavLink key={item.label} label={item.label} href={item.href}>
          {item.children?.map(sub => (
            <Text key={sub.label} as="a" href={sub.href}>
              {sub.label}
            </Text>
          ))}
        </NavLink>
      ))}
    </nav>
  );
}
