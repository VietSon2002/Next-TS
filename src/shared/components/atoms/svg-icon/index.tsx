// src/components/atoms/svg-icon/index.tsx
import './style.scss';
import type { SvgIconProps } from './type';

/**
 * SVG Icon Atom
 * @description Hiển thị icon từ sprite.svg
 */
const SvgIcon = ({ name, className = '' }: SvgIconProps) => (
  <svg className={`svg-icon ${className}`}>
    <use href={`/assets/images/sprite.svg#icon-${name}`} />
  </svg>
);

export default SvgIcon;
