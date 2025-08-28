import NavLink from '../../atoms/NavLink';

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
            <a key={sub.label} href={sub.href}>
              {sub.label}
            </a>
          ))}
        </NavLink>
      ))}
    </nav>
  );
}
