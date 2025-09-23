import type { EIcon } from '@/shared/enums';
import Icon from '../../atoms/icon';
import Text from '../../atoms/text';
import type { ReactNode, ElementType } from 'react';

type ContactInfoItemProps = {
  name: EIcon;
  children: ReactNode;
  titleAs?: ElementType;
  iconClassName?: string; // 👈 thêm prop mới
};

export default function ContactInfoItem({
  name,
  children,
  titleAs = 'span',
  iconClassName = 'w-6 h-6 fill-base-100',
}: ContactInfoItemProps) {
  return (
    <div className="flex items-center gap-1">
      <span className="text-lg bg-primary rounded-full flex items-center justify-center box-border">
        <Icon name={name} className={iconClassName} />
      </span>
      <Text as={titleAs}>{children}</Text>
    </div>
  );
}
