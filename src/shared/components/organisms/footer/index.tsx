import Image from 'next/image';
import './style.scss';
import { Icon } from '../../atoms';
import { EIcon } from '@/shared/enums';
import Text from '../../atoms/text';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="top-contain">
          <div className="left">
            <Text as="h4"> Need help on Emergency? Book Your Appointment Today. </Text>
          </div>
          <div className="right">
            <button type="button" title="MAKE APPOINTMENT" className="appointment-btn">MAKE APPOINTMENT</button>
            <button type="button" title="MAKE APPOINTMENT" className="appointment-btn secondary">MAKE APPOINTMENT</button>
          </div>
        </div>
        <hr />
        <div className="bottom-contain">
          <div className="right flex-[1]">
            <Image src="/assets/icons/logo-dark.png" alt="" width={180} height={180} />
            <ul>
              <li>
                <Text as="p">5th Street, 21st Floor, New York, USA </Text>
              </li>
              <li>
                <Text as="p">themeht23@gmail.com</Text>
              </li>
              <li>
                <Text as="p">+91-234-567-8900</Text>
              </li>
            </ul>
          </div>
          <div className="left flex-[3]">
            <div className="contain">
              <div className="flex-[1]">
                <Text as="h6">Quick Links</Text>
                <ul>
                  <li>
                    <Text as="p">About Us</Text>
                  </li>
                  <li>
                    <Text as="p">Contact Us</Text>
                  </li>
                  <li>
                    <Text as="p">Portfolio</Text>
                  </li>
                  <Text as="p">Doctor Team</Text>
                </ul>
              </div>
              <div className="flex-[1]">
                <Text as="h6">Our Services</Text>
                <ul>
                  <li>
                    <Text as="p">Biochemistry Solution</Text>
                  </li>
                  <li>
                    <Text as="p">Pharmaceutical Research</Text>
                  </li>
                  <li>
                    <Text as="p">Pathologycam Testing</Text>
                  </li>
                  <Text as="p">Chemical Research</Text>
                </ul>
              </div>
              <div className="flex-[2]">
                <Text as="h6">Newsletter</Text>
                <ul>
                  <li>
                    <Text as='p'>
                      Build responsive, mobile-first projects on the web with the world’s most
                      popular front-end component library.
                    </Text>
                  </li>
                  <form
                    id="mc-form">
                    <input
                      type="email"
                      name="EMAIL"
                      id="mc-email"
                      placeholder="Email Address"
                      required/>
                    <button
                      type="submit" >
                       <Icon name={EIcon.Send} className="size-4 fill-base-0"/>
                    </button>
                  </form>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="secondary-footer">
          <div className="container">
            <p className="text-center lg:text-left">
              Copyright 2025 Labozu Theme By
              <a href="#" className="text-primary-500 hover:underline">
                ThemeHt
              </a>{' '}
              | All Rights Reserved
            </p>
            <div className="right">
              <a href="#"><Icon className="size-4" name={EIcon.Facebook} /></a>
              <a href="#"><Icon className="size-4" name={EIcon.X} /></a>
              <a href="#"><Icon className="size-4" name={EIcon.Linkedin} /></a>
              <a href="#"><Icon className="size-4" name={EIcon.WhatApp} /></a>

            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
