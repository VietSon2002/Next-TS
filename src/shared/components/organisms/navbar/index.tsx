'use client';
import { setupDropdown } from '@/core/lib/dropdown';
import { useEffect } from 'react';
import './style.scss';
import { EIcon } from '@/shared/enums';
import Logo from '../../atoms/Logo';
import ActionGroup from '../../molecules/ActionGroup';
import ContactInfoItem from '../../molecules/ContactInfoItem';
import NavMenu, { type NavItem } from '../../molecules/NavMenu';

interface NavBarProps {
  items: NavItem[];
}

const NavBar = ({ items }: NavBarProps) => {
  useEffect(() => {
    setupDropdown();
  }, []);

  return (
    <header>
      {/* Top bar */}
      <div className="header-top flex justify-between">
        <ContactInfoItem name={EIcon.Phone}>(528) 456–7592</ContactInfoItem>
        <div className="flex gap-4">
          <ContactInfoItem name={EIcon.Email}>info@example.com</ContactInfoItem>
          <ContactInfoItem name={EIcon.Clock}>Mon - Fri 10:00 to 6:00</ContactInfoItem>
        </div>
      </div>

      {/* Main navbar */}
      <div className="header-wrap flex justify-between items-center">
        <div className="flex items-center gap-4">
          <Logo />
          <NavMenu items={items} />
        </div>
        <div className="right-contain">
          <ActionGroup />
        </div>
      </div>
    </header>
  );
};

export default NavBar;
