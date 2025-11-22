'use client';

import { useEffect, useState } from 'react';
import LightboxImage from '@/shared/components/atoms/image';
import SlideContent from '@/shared/components/molecules/SlideContent';
import { setupSwiper } from '@/core/lib/i18n/Swiper';
import './style.scss';
import { EIcon } from '@/shared/enums';
import { Icon } from '@/shared/components/atoms';

export type Slide = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  src: string;
  alt: string;
};

interface HeroSectionStartClientProps {
  slides: Slide[];
}

export default function HeroSectionStartClient({ slides }: HeroSectionStartClientProps) {
  const [swiperInit, setSwiperInit] = useState(false);

  useEffect(() => {
    if (!swiperInit && slides.length > 0) {
      const timer = setTimeout(() => {
        setupSwiper();
        setSwiperInit(true);
      }, 50);

      return () => clearTimeout(timer);
    }
  }, [swiperInit, slides]);

  if (!slides.length) return null;

  return (
    <section className="hero-section-start">
      <div className="swiper mySwiper w-full h-full" data-slides="1">
        <div className="swiper-wrapper">
          {slides.map((slide: Slide) => (
            <div className="swiper-slide" key={slide.id}>
              <LightboxImage src={slide.src} alt={slide.alt} width={1920} height={600} />
              <div className="image-overlay" />

              <SlideContent
                subtitle={slide.subtitle}
                title={slide.title}
                description={slide.description}
                primaryBtnText="Explore More"
                primaryBtnHref="#ExploreMore"
                secondaryBtnText="Contact Us"
                secondaryBtnHref="#contact"
              />
            </div>
          ))}
        </div>

        {slides.length > 1 && (
          <>
            <div className="swiper-button-prev">
              <Icon name={EIcon.Arrow_Right} className="nav-icon" />
            </div>
            <div className="swiper-button-next">
              <Icon name={EIcon.Arrow_Right} className="nav-icon" />
            </div>
          </>
        )}
      </div>
    </section>
  );
}
