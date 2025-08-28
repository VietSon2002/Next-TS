import '@/shared/components/molecules/IconWithLabel/style.scss';
import type { IconWithLabelProps } from './type';

export const IconWithLabel = ({
  icon,
  label,
  iconClassName = 'w-6 h-6 fill-base-0',
  wrapperClassName = 'flex items-center gap-1',
}: IconWithLabelProps) => {
  return (
    <div className={wrapperClassName}>
      <span className="">
        <svg className={iconClassName}>
          <use xlinkHref={`/assets/icons/sprite.svg#${icon}`}></use>
        </svg>
      </span>
      <span>{label}</span>
    </div>
  );
};

export default IconWithLabel;
