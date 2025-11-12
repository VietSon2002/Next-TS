import Image from 'next/image';
import './style.scss';
import { Icon } from '../../atoms';
import { EIcon } from '@/shared/enums';
import Text from '../../atoms/text';

const Footer = () => {
  const quickLinks = ['About Us', 'Contact Us', 'Portfolio', 'Doctor Team'];
  const services = [
    'Biochemistry Solution',
    'Pharmaceutical Research',
    'Pathologycam Testing',
    'Chemical Research',
  ];
  const contactInfo = [
    '5th Street, 21st Floor, New York, USA',
    'themeht23@gmail.com',
    '+91-234-567-8900',
  ];
  const socialIcons = [
    { name: EIcon.Facebook, href: '#' },
    { name: EIcon.X, href: '#' },
    { name: EIcon.Linkedin, href: '#' },
    { name: EIcon.WhatApp, href: '#' },
  ];

  return (
    <footer>
      <div className="container">
        {/* Top Section */}
        <div className="top-contain">
          <div className="left">
            <Text as="h4">Need help on Emergency? Book Your Appointment Today.</Text>
          </div>
          <div className="right">
            <button type="button" title="MAKE APPOINTMENT" className="appointment-btn">
              MAKE APPOINTMENT
            </button>
            <button
              type="button"
              title="MAKE APPOINTMENT"
              className="appointment-btn secondary"
            >
              MAKE APPOINTMENT
            </button>
          </div>
        </div>

        <hr />

        {/* Bottom Section */}
        <div className="bottom-contain">
          {/* Left: Logo + Contact Info */}
          <div className="right flex-[1]">
            <Image src="/assets/icons/logo-dark.png" alt="logo" width={180} height={180} />
            <ul>
              {contactInfo.map((info, i) => (
                <li key={i}>
                  <Text as="p">{info}</Text>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Links + Newsletter */}
          <div className="left flex-[3]">
            <div className="contain">
              {/* Quick Links */}
              <div className="flex-[1]">
                <Text as="h6">Quick Links</Text>
                <ul>
                  {quickLinks.map((link, i) => (
                    <li key={i}>
                      <Text as="p">{link}</Text>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Services */}
              <div className="flex-[1]">
                <Text as="h6">Our Services</Text>
                <ul>
                  {services.map((service, i) => (
                    <li key={i}>
                      <Text as="p">{service}</Text>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Newsletter */}
              <div className="flex-[2]">
                <Text as="h6">Newsletter</Text>
                <ul>
                  <li>
                    <Text as="p">
                      Build responsive, mobile-first projects on the web with the world’s most
                      popular front-end component library.
                    </Text>
                  </li>
                  <form id="mc-form">
                    <input
                      type="email"
                      name="EMAIL"
                      id="mc-email"
                      placeholder="Email Address"
                      required
                    />
                    <button type="submit">
                      <Icon name={EIcon.Send} className="size-4 fill-base-0" />
                    </button>
                  </form>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <hr />

        {/* Secondary Footer */}
        <div className="secondary-footer">
          <div className="container">
            <p className="text-center lg:text-left">
              Copyright 2025 Labozu Theme By{' '}
              <a href="#" className="text-primary-500 hover:underline">
                ThemeHt
              </a>{' '}
              | All Rights Reserved
            </p>
            <div className="right">
              {socialIcons.map((icon, i) => (
                <a key={i} href={icon.href}>
                  <Icon className="size-4" name={icon.name} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
