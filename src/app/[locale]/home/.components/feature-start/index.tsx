'use client';

import './style.scss';
import { Icon } from '../../../../../shared/components/atoms';
import { EIcon } from '@/shared/enums';
import Text from '@/shared/components/atoms/text';

type Feature = {
  icon: EIcon;
  title: string;
  description: string;
  href: string;
};

const features: Feature[] = [
  {
    icon: EIcon.Business_Money,
    title: 'Microbiology',
    description: 'This includes bacteria, viruses, fungi, and parasites.',
    href: '#',
  },
  {
    icon: EIcon.Business_Money,
    title: 'Biochemistry',
    description: 'Study of chemical processes within living organisms.',
    href: '#',
  },
  {
    icon: EIcon.Business_Money,
    title: 'Hematology',
    description: 'Analysis of blood, blood-forming organs, and diseases.',
    href: '#',
  },
  {
    icon: EIcon.Business_Money,
    title: 'Pathology',
    description: 'Diagnosis of disease based on lab analysis.',
    href: '#',
  },
];

const FeatureItem = ({ icon, title, description, href }: Feature) => (
  <div className="col">
    <div className="item">
      <Icon name={icon} className="nav-icon fill-primary-500" />
      <div className="featured-title">
        <Text as="h6">{title}</Text>
        <Text>{description}</Text>
        <a href={href} className="read-more">
          Read more
          <Icon name={EIcon.Arrow_Right} className="icon-arrow" />
        </a>
      </div>
    </div>
  </div>
);

const FeatureStart = () => {
  return (
    <section className="feature-start">
      <div className="container">
        <div className="row">
          {features.map((feature, i) => (
            <FeatureItem key={i} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureStart;
