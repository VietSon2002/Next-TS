'use client';

import Text from '@/shared/components/atoms/text';
import type { ReactNode, ElementType } from 'react';

type SlideContentProps = {
  subtitle: ReactNode;
  title: ReactNode;
  description?: ReactNode;
  subtitleAs?: ElementType;   // 👈 thêm mới
  titleAs?: ElementType;
  primaryBtnText?: string;
  primaryBtnHref?: string;
  secondaryBtnText?: string;
  secondaryBtnHref?: string;
};

export default function SlideContent({
  subtitle,
  title,
  description,
  subtitleAs = 'p',
  titleAs = 'h2',
  primaryBtnText,
  primaryBtnHref = '#',
  secondaryBtnText,
  secondaryBtnHref = '#',
}: SlideContentProps) {
  return (
    <div className="slide-content">
      <Text as={subtitleAs}>{subtitle}</Text>
      <Text as={titleAs}>{title}</Text>
      {description && <Text as="p">{description}</Text>}
      <div className="buttons">
        {primaryBtnText && (
          <Text as="a" href={primaryBtnHref} className="appointment-btn">
            {primaryBtnText}
          </Text>
        )}
        {secondaryBtnText && (
          <Text as="a" href={secondaryBtnHref} className="appointment-btn-secondary">
            {secondaryBtnText}
          </Text>
        )}
      </div>
    </div>
  );
}
