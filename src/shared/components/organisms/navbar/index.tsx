'use client';
import { setupDropdown } from '@/core/lib/dropdown';
import { useEffect } from 'react';
import './style.scss';
import { EIcon } from '@/shared/enums';
import Logo from '../../atoms/Logo';
import ActionGroup from '../../molecules/ActionGroup';
import ContactInfoItem from '../../molecules/ContactInfoItem';
import NavMenu, { type NavItem } from '../../molecules/NavMenu';

const navItems: NavItem[] = [
  {
    label: 'HOME',
    children: [
      { label: 'HOME 01', href: '#' },
      { label: 'HOME 02', href: '#' },
      { label: 'HOME 03', href: '#' },
      { label: 'HOME 04', href: '#' },
    ],
  },
  {
    label: 'PAGES',
    children: [
      { label: 'ABOUT US', href: '#' },
      { label: 'TEAM', href: '#' },
      { label: 'TEAM SINGLE', href: '#' },
      { label: 'PRICE TABLE', href: '#' },
      { label: 'FAQ', href: '#' },
      { label: 'LOGIN', href: '#' },
      { label: 'COMING SOON', href: '#' },
      { label: 'ERROR 404', href: '#' },
    ],
  },
  {
    label: 'SHOP',
    children: [
      { label: 'PRODUCT GRID', href: '#' },
      { label: 'PRODUCT LIST', href: '#' },
      { label: 'PRODUCT SINGLE', href: '#' },
      { label: 'CART', href: '#' },
      { label: 'CHECK OUT', href: '#' },
      { label: 'ORDER COMPLETED', href: '#' },
      { label: 'FORGOT PASSWORD', href: '#' },
    ],
  },
  {
    label: 'SERVICES',
    children: [
      { label: 'SERVICE STYLE ONE', href: '#' },
      { label: 'SERVICE STYLE TWO', href: '#' },
      { label: 'SERVICE STYLE THREE', href: '#' },
      { label: 'SERVICE SINGLE', href: '#' },
    ],
  },
  {
    label: 'RESEARCH',
    children: [
      { label: 'RESEARCH MASONRY', href: '#' },
      { label: 'RESEARCH GRID 2', href: '#' },
      { label: 'RESEARCH GRID  3', href: '#' },
      { label: 'RESEARCH SLIDER', href: '#' },
      { label: 'RESEARCH SINGLE', href: '#' },
    ],
  },
  {
    label: 'BLOGS',
    children: [
      { label: 'BLOG LEFT SIDEBAR', href: '#' },
      { label: 'BLOG RIGHT SIDEBAR', href: '#' },
      { label: 'BLOG SINGLE', href: '#' },
    ],
  },
  { label: 'CONTACT', href: '#' },
];

const NavBar = () => {
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
          <NavMenu items={navItems} />
        </div>
        <div className="right-contain">
          <ActionGroup />
        </div>
      </div>
    </header>
  );
};

export default NavBar;
