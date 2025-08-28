type IconProps = {
  id: string; // id trong sprite.svg
  className?: string;
};

export default function Icon({ id, className }: IconProps) {
  return (
    <svg className={className}>
      <use xlinkHref={`/assets/icons/sprite.svg#${id}`} />
    </svg>
  );
}
