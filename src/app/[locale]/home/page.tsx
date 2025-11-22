import {
  AboutStart,
  BlogStart,
  BrandLogoStart,
  DiscoverStart,
  FeatureStart,
  FromStat,
  TestimonialStart,
} from './.components';

import MarqueeText from '@/shared/components/organisms/marquee';

import HeroSectionStartServer from '@/app/server-component/HeroSectionStart';
import ServiceStartServer from '@/app/server-component/ServiceStartServer';
import TeamStartServer from '@/app/server-component/TeamStartServer';
import PortfolioStartServer from '@/app/server-component/PortfolioStartServer';
import TestimonialStartServer from '@/app/server-component/TestimonialStartServer';
import BlogStartServer from '@/app/server-component/BlogStartServer';

export default function HomePage() {
  return (
    <div>
      <HeroSectionStartServer />
      <FeatureStart />
      <MarqueeText words={['Laboratory', 'Science', 'Research']} />
      <AboutStart />
      <ServiceStartServer />;
      <DiscoverStart />
      <MarqueeText words={['Our Specialist', 'Team Member', 'Expert Doctor']} />
      <TeamStartServer />
      <FromStat />
      <PortfolioStartServer />
      <TestimonialStartServer />
      <BrandLogoStart />
      <BlogStartServer />
    </div>
  );
}
