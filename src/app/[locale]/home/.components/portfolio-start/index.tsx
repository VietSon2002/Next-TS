'use client';
import { setupSwiper } from '@/core/lib/i18n/Swiper';
import Image from 'next/image';
import { useEffect } from 'react';
import './style.scss';
import SlideContent from '../../../../../shared/components/molecules/SlideContent';

const portfolioItems = [
  {
    id: 1,
    img: '/assets/images/team-start.png',
    category: 'DNA',
    title: 'Blood DNA Detect',
    link: 'portfolio-single.html',
  },
  {
    id: 2,
    img: '/assets/images/team-start.png',
    category: 'DNA',
    title: 'Blood DNA Detect',
    link: 'portfolio-single.html',
  },
  {
    id: 3,
    img: '/assets/images/team-start.png',
    category: 'DNA',
    title: 'Blood DNA Detect',
    link: 'portfolio-single.html',
  },
  {
    id: 4,
    img: '/assets/images/team-start.png',
    category: 'DNA',
    title: 'Blood DNA Detect',
    link: 'portfolio-single.html',
  },
  {
    id: 5,
    img: '/assets/images/team-start.png',
    category: 'DNA',
    title: 'Blood DNA Detect',
    link: 'portfolio-single.html',
  },
  {
    id: 6,
    img: '/assets/images/team-start.png',
    category: 'DNA',
    title: 'Blood DNA Detect',
    link: 'portfolio-single.html',
  },
];

const PortfolioStart = () => {
  useEffect(() => {
    setupSwiper();
  }, []);

  return (
    <section className="portfolio-start">
      <div className="container">
        <div className="theme-title">
          <SlideContent
            subtitle="Latest Portfolio"
            subtitleAs="h6"
            title={
              <>
                We&apos;ve Done A Lot&apos;s, Check
            <br />
            <span>Our Latest Research</span>
              </>
            }
            titleAs="h3"
          />
        </div>
      </div>

      <div className="swiper-container">
        <div className="swiper mySwiper-stop">
          <div className="swiper-wrapper">
            {portfolioItems.map(item => (
              <div className="swiper-slide" key={item.id}>
                <div className="profile-card">
                  <div className="relative group">
                    <Image src={item.img} alt={item.title} width={300} height={300} />
                    <div className="portfolio-desc">
                      <span>{item.category}</span>
                      <h6>
                        <a href={item.link}>{item.title}</a>
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioStart;
