'use client';

import { setupSwiper } from '@/core/lib/Swiper';
import Image from 'next/image';
import { useEffect } from 'react';
import './style.scss';

const HeroSectionStart = () => {
  useEffect(() => {
    setupSwiper();
  }, []);

  return (
    <section className="hero-section-start">
      <div className="swiper mySwiper w-full h-full" data-slides="1">
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <Image
              src="/assets/images/banner/01.png"
              alt="img"
              width={1920}
              height={600}
              className="w-full h-auto"
            />
            <div className="image-overlay"></div>
            <div className="slide-content">
              <h6>Lab Research Excellence</h6>
              <h2>
                <span>High Laboratory</span>
                <br />
                Quality Services
              </h2>
              <p>Welcome to our research laboratory center...</p>
              <div className="buttons">
                <a href="#" className="appointment-btn">
                  Explore More
                </a>
                <a href="#" className="appointment-btn-secondary">
                  Contact Us
                </a>
              </div>
            </div>
          </div>

          <div className="swiper-slide">
            <Image
              src="/assets/images/banner/02.png"
              alt="img"
              width={1920}
              height={600}
              className="w-full h-auto"
            />
            <div className="image-overlay"></div>
            <div className="slide-content">
              <h6>Lab Research Excellence</h6>
              <h2>
                <span>High Laboratory</span>
                <br />
                Quality Services
              </h2>
              <p>Welcome to our research laboratory center...</p>
              <div className="buttons">
                <a href="#" className="appointment-btn">
                  Explore More
                </a>
                <a href="#" className="appointment-btn-secondary">
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="swiper-button-prev">
          <svg className="nav-icon" width="24" height="24">
            <use href="/assets/icons/sprite.svg#icon-arrow-right"></use>
          </svg>
        </div>
        <div className="swiper-button-next">
          <svg width="24" height="24">
            <use href="/assets/icons/sprite.svg#icon-arrow-right"></use>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default HeroSectionStart;
