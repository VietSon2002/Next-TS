type SocialIconProps = { id: string; href: string };

export default function SocialIcon({ id, href }: SocialIconProps) {
  return (
    <a href={href} className="social-btn">
      <svg className="social-icon">
        <use xlinkHref={`/assets/icons/sprite.svg#${id}`} />
      </svg>
    </a>
  );
}
