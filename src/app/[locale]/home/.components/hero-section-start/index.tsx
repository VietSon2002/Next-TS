'use client';

import { setupSwiper } from '@/core/lib/i18n/Swiper';
import { useEffect, useState } from 'react';
import './style.scss';
import LightboxImage from '@/shared/components/atoms/image';
import { EIcon } from '@/shared/enums';
import { Icon } from '../../../../../shared/components/atoms';
import SlideContent from '@/shared/components/molecules/SlideContent';

type Slide = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  src: string;
  alt: string;
};

const HeroSectionStart = () => {
  const [slides, setSlides] = useState<Slide[]>([]);
  const [swiperInitialized, setSwiperInitialized] = useState(false);

  useEffect(() => {
    fetch('/api/slides')
      .then(res => res.json())
      .then((data: Slide[]) => {
        console.log('Slides fetched in client:', data);
        setSlides(data);
        
        // Setup Swiper SAU KHI có data
        if (data.length > 0 && !swiperInitialized) {
          setTimeout(() => {
            setupSwiper();
            setSwiperInitialized(true);
          }, 100);
        }
      })
      .catch(err => console.error('Error fetching slides:', err));
  }, [swiperInitialized]);

  if (!slides.length) return null;

  return (
    <section className="hero-section-start">
      <div className="swiper mySwiper w-full h-full" data-slides="1">
        <div className="swiper-wrapper">
          {slides.map((slide, index) => (
            <div className="swiper-slide" key={slide.id || index}>
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
                primaryBtnHref='#ExploreMore'
                secondaryBtnText='Contact Us'
                secondaryBtnHref='#contact'
              />
            </div>
          ))}
        </div>

        {/* Navigation - chỉ hiển thị khi có nhiều slide */}
        {slides.length > 1 && (
          <>
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
          </>
        )}
      </div>
    </section>
  );
};

export default HeroSectionStart;