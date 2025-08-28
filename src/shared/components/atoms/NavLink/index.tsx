type NavLinkProps = {
  label: string;
  href?: string;
  children?: React.ReactNode; // submenu
};

export default function NavLink({ label, href = '#', children }: NavLinkProps) {
  return (
    <div className="nav-item">
      <button data-dropdown="hover" className="nav-button">
        {label}
        {children && (
          <svg className="nav-icon">
            <use xlinkHref="/assets/icons/sprite.svg#icon-arrow-down"></use>
          </svg>
        )}
      </button>
      {children && <div className="dropdown-template hidden">{children}</div>}
    </div>
  );
}
