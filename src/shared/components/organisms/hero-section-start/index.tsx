'use client';

import { setupSwiper } from '@/core/lib/i18n/Swiper';
import { useEffect } from 'react';
import './style.scss';
import LightboxImage from '@/shared/components/atoms/image';
import { EIcon } from '@/shared/enums';
import { Icon } from '../../atoms';
import SlideContent from '@/shared/components/molecules/SlideContent';

const slides = [
  {
    src: '/assets/images/banner/01.png',
    alt: 'Ảnh 1',
    subtitle: 'Lab Research Excellence',
    title: (
      <>
        High Laboratory <br /> Quality Services
      </>
    ),
    description: 'Welcome to our research laboratory center...',
  },
  {
    src: '/assets/images/banner/02.png',
    alt: 'Ảnh 2',
    subtitle: 'Advanced Medical Tests',
    title: (
      <>
        Trusted Diagnostics <br /> Quality Services
      </>
    ),
    description: 'We deliver reliable lab test results with precision...',
  },
];

const HeroSectionStart = () => {
  useEffect(() => {
    setupSwiper();
  }, []);

  return (
    <section className="hero-section-start">
      <div className="swiper mySwiper w-full h-full" data-slides="1">
        <div className="swiper-wrapper">
          {slides.map((slide, index) => (
            <div className="swiper-slide" key={index}>
              <LightboxImage
                src={slide.src}
                alt={slide.alt}
                width={1920}
                height={600}
              />
              <div className="image-overlay"></div>
              <SlideContent
                subtitle={slide.subtitle}
                title={slide.title}
                description={slide.description}
                primaryBtnText='Explore More'
                primaryBtnHref='ExploreMore'
                secondaryBtnText='Contact Us'
                secondaryBtnHref='#contact'
              />
            </div>
          ))}
        </div>

        {/* Navigation */}
        <div className="swiper-button-prev" aria-label="Previous slide">
          <svg className="nav-icon" width="24" height="24">
            <Icon name={EIcon.Arrow_Right} className="nav-icon" />
          </svg>
        </div>
        <div className="swiper-button-next" aria-label="Next slide">
          <svg className="nav-icon" width="24" height="24">
            <Icon name={EIcon.Arrow_Right} className="nav-icon" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default HeroSectionStart;
