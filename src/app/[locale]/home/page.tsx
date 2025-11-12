'use client';
import {
  AboutStart,
  BlogStart,
  BrandLogoStart,
  DiscoverStart,
  FeatureStart,
  FromStat,
  HeroSectionStart,
  PortfolioStart,
  ServiceStart,
  TeamStart,
  TestimonialStart,
} from './.components';

import MarqueeText from '@/shared/components/organisms/marquee';

export default function HomePage() {
  return (
    <div>
      <HeroSectionStart/>
      <FeatureStart/>
      <MarqueeText words={['Laboratory', 'Science', 'Research']} />
      <AboutStart/>
      <ServiceStart/>
      <DiscoverStart/>
      <MarqueeText words={['Our Specialist', 'Team Member', 'Expert Doctor']} />
      <TeamStart />
      <FromStat/>
      <PortfolioStart/>
      <TestimonialStart/>
      <BrandLogoStart/>
      <BlogStart/>
      <main>
      </main>
    </div>
  );
}