import { EIcon } from '@/shared/enums';
import Icon from '../../atoms/icon';
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
          <Icon name={EIcon.Arrow_Down} className='nav-icon'/>
        )}
      </button>
      {children && <div className="dropdown-template hidden">{children}</div>}
    </div>
  );
}
