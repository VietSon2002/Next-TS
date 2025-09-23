'use client';
import {
  AboutStart,
  BlogStart,
  BrandLogoStart,
  DiscoverStart,
  FeatureStart,
  Footer,
  FromStat,
  HeroSectionStart,
  MarqueeText,
  NavBar,
  PortfolioStart,
  ServiceStart,
  TeamStart,
  TestimonialStart,
} from '@/shared/components/organisms';

export default function HomePage() {
  return (
    <div>
      <NavBar/>
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
      <Footer/>
      <main>
      </main>
    </div>
  );
}