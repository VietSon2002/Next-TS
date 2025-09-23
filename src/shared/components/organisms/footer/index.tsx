import Image from 'next/image';
import './style.scss';
import { Icon } from '../../atoms';
import { EIcon } from '@/shared/enums';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="top-contain">
          <div className="left">
            <h4> Need help on Emergency? Book Your Appointment Today. </h4>
          </div>
          <div className="right">
            <a href="#" className="appointment-btn">
              Make Appointment
            </a>
            <a href="#" className="appointment-btn secondary">
              Make Appointment
            </a>
          </div>
        </div>
        <hr />
        <div className="bottom-contain">
          <div className="right flex-[1]">
            <Image src="/assets/icons/logo-dark.png" alt="" width={180} height={180} />
            <ul className="flex flex-col gap-y-5 pb-4 font-bold">
              <li>
                <p>5th Street, 21st Floor, New York, USA </p>
              </li>
              <li>
                <p>themeht23@gmail.com</p>
              </li>
              <li>
                <p>+91-234-567-8900</p>
              </li>
            </ul>
          </div>
          <div className="left flex-[3]">
            <div className="contain">
              <div className="flex-[1]">
                <h6 className="font-bold mb-5">Quick Links</h6>
                <ul className="flex flex-col gap-y-5 pb-4 font-bold">
                  <li>
                    <p>About Us</p>
                  </li>
                  <li>
                    <p>Contact Us</p>
                  </li>
                  <li>
                    <p>Portfolio</p>
                  </li>
                  <li>Doctor Team</li>
                </ul>
              </div>
              <div className="flex-[1]">
                <h6 className="font-bold mb-5">Our Services</h6>
                <ul className="flex flex-col gap-y-5 pb-4 font-bold">
                  <li>
                    <p>Biochemistry Solution</p>
                  </li>
                  <li>
                    <p>Pharmaceutical Research</p>
                  </li>
                  <li>
                    <p>Pathologycam Testing</p>
                  </li>
                  <li>Chemical Research</li>
                </ul>
              </div>
              <div className="flex-[2]">
                <h6 className="font-bold mb-5">Newsletter</h6>
                <ul className="flex flex-col gap-y-5 pb-4 font-bold">
                  <li>
                    <p>
                      Build responsive, mobile-first projects on the web with the world’s most
                      popular front-end component library.
                    </p>
                  </li>
                  <form
                    id="mc-form"
                    className="flex items-center w-full max-w-md border border-gray-800 rounded-lg px-4 py-2">
                    <input
                      type="email"
                      name="EMAIL"
                      id="mc-email"
                      placeholder="Email Address"
                      required
                      className="flex-grow h-12 bg-transparent text-white placeholder-gray-400 border-none focus:outline-none"
                    />
                    <button
                      type="submit"
                      className="ml-3 w-12 h-12 flex items-center justify-center bg-blue-600 rounded-lg hover:bg-blue-700 transition">
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
            <p className="text-sm text-center lg:text-left">
              Copyright 2025 Labozu Theme By
              <a href="#" className="text-blue-400 hover:underline">
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
