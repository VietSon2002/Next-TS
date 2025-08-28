'use client';

import { setupSwiper } from '@/core/lib/Swiper';
import '@/shared/components/organisms/team-start/style.scss';
import Image from 'next/image';
import { useEffect } from 'react';

const TeamStart = () => {
  useEffect(() => {
    setupSwiper();
  }, []);
  return (
    <section className="team-start">
      <div className="container">
        <div className="swiper mySwiper-4">
          <div className="swiper-wrapper">
            {/*  Slide 1  */}
            <div className="swiper-slide">
              <div className="profile-card">
                <div className="relative">
                  <Image
                    src="/assets/images/avatar/avatar-2.png"
                    alt="Doctor"
                    width={1920}
                    height={600}
                  />
                  <div className="social">
                    <a href="#" className="social-btn">
                      <svg className="social-icon">
                        <use href="/assets/icons/sprite.svg#icon-facebook"></use>
                      </svg>
                    </a>

                    <a href="#" className="social-btn">
                      <svg className="social-icon">
                        <use href="/assets/icons/sprite.svg#icon-X"></use>
                      </svg>
                    </a>

                    <a href="#" className="social-btn">
                      <svg className="social-icon">
                        <use href="/assets/icons/sprite.svg#icon-linkin"></use>
                      </svg>
                    </a>
                  </div>
                </div>
                <h6>Salazar Myers</h6>
                <p>Manager Of Lab</p>
              </div>
            </div>

            {/*  Slide 2  */}
            <div className="swiper-slide">
              <div className="profile-card">
                <div className="relative">
                  <Image
                    src="/assets/images/avatar/avatar-2.png"
                    alt="Doctor"
                    width={1920}
                    height={600}
                  />
                  <div className="social">
                    <a href="#" className="social-btn">
                      <svg className="social-icon">
                        <use href="/assets/icons/sprite.svg#icon-facebook"></use>
                      </svg>
                    </a>

                    <a href="#" className="social-btn">
                      <svg className="social-icon">
                        <use href="/assets/icons/sprite.svg#icon-X"></use>
                      </svg>
                    </a>

                    <a href="#" className="social-btn">
                      <svg className="social-icon">
                        <use href="/assets/icons/sprite.svg#icon-linkin"></use>
                      </svg>
                    </a>
                  </div>
                </div>
                <h6>Salazar Myers</h6>
                <p>Manager Of Lab</p>
              </div>
            </div>

            {/* Slide 3 */}
            <div className="swiper-slide">
              <div className="profile-card">
                <div className="relative">
                  <Image
                    src="/assets/images/avatar/avatar-2.png"
                    alt="Doctor"
                    width={1920}
                    height={600}
                  />
                  <div className="social">
                    <a href="#" className="social-btn">
                      <svg className="social-icon">
                        <use href="/assets/icons/sprite.svg#icon-facebook"></use>
                      </svg>
                    </a>

                    <a href="#" className="social-btn">
                      <svg className="social-icon">
                        <use href="/assets/icons/sprite.svg#icon-X"></use>
                      </svg>
                    </a>

                    <a href="#" className="social-btn">
                      <svg className="social-icon">
                        <use href="/assets/icons/sprite.svg#icon-linkin"></use>
                      </svg>
                    </a>
                  </div>
                </div>
                <h6>Salazar Myers</h6>
                <p>Manager Of Lab</p>
              </div>
            </div>

            {/* Slide 4 */}
            <div className="swiper-slide">
              <div className="profile-card">
                <div className="relative">
                  <Image
                    src="/assets/images/avatar/avatar-2.png"
                    alt="Doctor"
                    width={1920}
                    height={600}
                  />
                  <div className="social">
                    <a href="#" className="social-btn">
                      <svg className="social-icon">
                        <use href="/assets/icons/sprite.svg#icon-facebook"></use>
                      </svg>
                    </a>

                    <a href="#" className="social-btn">
                      <svg className="social-icon">
                        <use href="/assets/icons/sprite.svg#icon-X"></use>
                      </svg>
                    </a>

                    <a href="#" className="social-btn">
                      <svg className="social-icon">
                        <use href="/assets/icons/sprite.svg#icon-linkin"></use>
                      </svg>
                    </a>
                  </div>
                </div>
                <h6>Salazar Myers</h6>
                <p>Manager Of Lab</p>
              </div>
            </div>
            {/* Slide 4  */}
            <div className="swiper-slide">
              <div className="profile-card">
                <div className="relative">
                  <Image
                    src="/assets/images/avatar/avatar-2.png"
                    alt="Doctor"
                    width={1920}
                    height={600}
                  />
                  <div className="social">
                    <a href="#" className="social-btn">
                      <svg className="social-icon">
                        <use href="/assets/icons/sprite.svg#icon-facebook"></use>
                      </svg>
                    </a>

                    <a href="#" className="social-btn">
                      <svg className="social-icon">
                        <use href="/assets/icons/sprite.svg#icon-X"></use>
                      </svg>
                    </a>

                    <a href="#" className="social-btn">
                      <svg className="social-icon">
                        <use href="/assets/icons/sprite.svg#icon-linkin"></use>
                      </svg>
                    </a>
                  </div>
                </div>
                <h6>Salazar Myers</h6>
                <p>Manager Of Lab</p>
              </div>
            </div>
            {/* Slide 4  */}
            <div className="swiper-slide">
              <div className="profile-card">
                <div className="relative">
                  <Image
                    src="/assets/images/avatar/avatar-2.png"
                    alt="Doctor"
                    width={1920}
                    height={600}
                  />
                  <div className="social">
                    <a href="#" className="social-btn">
                      <svg className="social-icon">
                        <use href="/assets/icons/sprite.svg#icon-facebook"></use>
                      </svg>
                    </a>

                    <a href="#" className="social-btn">
                      <svg className="social-icon">
                        <use href="/assets/icons/sprite.svg#icon-X"></use>
                      </svg>
                    </a>

                    <a href="#" className="social-btn">
                      <svg className="social-icon">
                        <use href="/assets/icons/sprite.svg#icon-linkin"></use>
                      </svg>
                    </a>
                  </div>
                </div>
                <h6>Salazar Myers</h6>
                <p>Manager Of Lab</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamStart;
