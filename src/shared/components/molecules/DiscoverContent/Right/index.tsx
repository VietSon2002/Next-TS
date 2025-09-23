import './style.scss';
import LightboxImage from '@/shared/components/atoms/image';
import Text from '@/shared/components/atoms/text';

export default function DiscoverContentRight() {
  return (
    <div className="right">
      <div className="image-wrapper">
        <LightboxImage
          src="/assets/images/about-star-0.png"
          alt="About Us"
          width={1920}
          height={600}
        />
      </div>

      <LightboxImage
        className="img-2"
        src="/assets/images/about-star-1.png"
        alt="About Us"
        width={1920}
        height={600}
      />

      <div className="about-counter float">
        <div className="text-center">
          <Text>15+</Text>
          <Text as="p">Years of<br/> Experience</Text>
        </div>
      </div>
    </div>
  );
}
