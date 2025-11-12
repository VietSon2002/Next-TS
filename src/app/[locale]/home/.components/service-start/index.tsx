'use client';

import './style.scss';
import Text from '@/shared/components/atoms/text';
import ServiceCard from '@/shared/components/molecules/ServiceCard';
import { EIcon } from '@/shared/enums';

const services = [
  {
    image: '/assets/images/ima-demo.png',
    icon: EIcon.Business_Money,
    title: 'Pharmaceutical Research',
    description: 'We use cutting-edge technologies and…..',
    link: '#',
  },
  {
    image: '/assets/images/ima-demo.png',
    icon: EIcon.Business_Money,
    title: 'Clinical Laboratory',
    description: 'Providing accurate results with modern equipment.',
    link: '#',
  },
  {
    image: '/assets/images/ima-demo.png',
    icon: EIcon.Business_Money,
    title: 'Toxicological Assessment',
    description: 'Ensuring safety with comprehensive testing.',
    link: '#',
  },
  {
    image: '/assets/images/ima-demo.png',
    icon: EIcon.Business_Money,
    title: 'Genetic Screening',
    description: 'Advanced solutions for personalized healthcare.',
    link: '#',
  },
  {
    image: '/assets/images/ima-demo.png',
    icon: EIcon.Business_Money,
    title: 'Pharmaceutical Research',
    description: 'We use cutting-edge technologies and…..',
    link: '#',
  },
  {
    image: '/assets/images/ima-demo.png',
    icon: EIcon.Business_Money,
    title: 'Clinical Laboratory',
    description: 'Providing accurate results with modern equipment.',
    link: '#',
  },
  {
    image: '/assets/images/ima-demo.png',
    icon: EIcon.Business_Money,
    title: 'Toxicological Assessment',
    description: 'Ensuring safety with comprehensive testing.',
    link: '#',
  },
  {
    image: '/assets/images/ima-demo.png',
    icon: EIcon.Business_Money,
    title: 'Genetic Screening',
    description: 'Advanced solutions for personalized healthcare.',
    link: '#',
  },
];

export default function ServiceStart() {
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
        </div>
      </div>
    </section>
  );
}
