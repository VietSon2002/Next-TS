'use client';

import { useEffect, useState } from 'react';
import './style.scss';
import Text from '@/shared/components/atoms/text';
import ServiceCard from '@/shared/components/molecules/ServiceCard';
import type { EIcon } from '@/shared/enums';
import { setupSwiper } from '@/core/lib/i18n/Swiper';

type TService = {
  image: string;
  icon: EIcon;
  title: string;
  description: string;
  link: string;
};

type ServiceStartProps = {
  services: TService[];
};

export default function ServiceStart({ services }: ServiceStartProps) {
  const [swiperInit, setSwiperInit] = useState(false);

  useEffect(() => {
    if (!swiperInit && services.length > 0) {
      const timer = setTimeout(() => {
        setupSwiper(); // init Swiper
        setSwiperInit(true);
      }, 50);

      return () => clearTimeout(timer);
    }
  }, [swiperInit, services]);

  if (!services.length) return null;

  return (
    <section className="service-start">
      <div className="container">
        <div className="theme-title">
          <Text as="h6">Our Services</Text>
          <Text as="h3">
            Comprehensive Solutions
            <br />
            For Every Challenge.
          </Text>
        </div>
      </div>

      <div className="swiper-contain">
        <div className="swiper mySwiper-4">
          <div className="swiper-wrapper">
            {services.map((service, index) => (
              <div className="swiper-slide justify-items-center" key={index}>
                <ServiceCard {...service} />
              </div>
            ))}
          </div>

          {services.length > 1 && (
            <>
              {/* <div className="swiper-button-prev" />
              <div className="swiper-button-next" /> */}
            </>
          )}
        </div>
      </div>
    </section>
  );
}
