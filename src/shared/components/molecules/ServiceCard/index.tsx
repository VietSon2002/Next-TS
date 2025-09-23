import Image from "next/image";
import Icon from "@/shared/components/atoms/icon";
import { EIcon } from "@/shared/enums";
import Text from "@/shared/components/atoms/text";
import "./style.scss";

type ServiceCardProps = {
  image: string;
  icon: EIcon;
  title?: string;
  description: string;
  link: string;
};

export default function ServiceCard({
  image,
  icon,
  title,
  description,
  link,
}: ServiceCardProps) {
  return (
    <article className="service-item" role="group" aria-label={title ?? "Service"}>
      {/* image wrapper: chỉ render 1 ảnh */}
      <div className="image-wrapper">
        <Image
          src={image}
          alt={title ?? "Service image"}
          width={1920}
          height={600}
          className="main-image"
        />
      </div>

      {/* icon overlay (absolute, nằm trên ranh giới image / content) */}
      <div className="icon-wrapper" aria-hidden>
        <Icon name={icon} className="service-icon" />
      </div>

      <div className="info-wrapper">
        <div className="content">
          {title && (
            <Text as="h6" className="title">
              {title}
            </Text>
          )}

          <Text as="p" className="description">
            {description}
          </Text>

          <Text as="a" href={link} className="read-more">
            Read more
            <Icon name={EIcon.Arrow_Right} className="icon-arrow ml-1" />
          </Text>
        </div>
      </div>
    </article>
  );
}
