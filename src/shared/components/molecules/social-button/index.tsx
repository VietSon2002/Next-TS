// src/components/molecules/social-button/index.tsx
import SvgIcon from '@/shared/components/atoms/svg-icon';
import type { EIcon } from '@/shared/enums';

type SocialButtonProps = {
  icon: EIcon;
  label: string;
  href: string;
};

const SocialButton = ({ icon, label, href }: SocialButtonProps) => (
  <a href={href} target="-blank" rel="noopener noreferrer" className="flex items-center gap-2">
    <SvgIcon name={icon} />
    <span>{label}</span>
  </a>
);

export default SocialButton;
