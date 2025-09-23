'use client';
import { EIcon } from '@/shared/enums';
import ContactInfoItem from '../../molecules/ContactInfoItem';
import './style.scss';
import LightboxImage from '@/shared/components/atoms/image';
import Text from '@/shared/components/atoms/text';

const AboutStart = () => {
  return (
    <section className="about-start">
      <div className="container">
        <div className="about-wrapper">
          {/* --------- Cột ảnh --------- */}
          <div className="images">
            <div className="img-row">
              <LightboxImage src="/assets/images/avatar/ava01.png" width={600} height={600} alt="Avatar 1" />
              <LightboxImage src="/assets/images/avatar/ava02.png" width={600} height={600} alt="Avatar 2" />
            </div>
            <LightboxImage
              src="/assets/images/avatar/ava03.png"
              width={800}
              height={600}
              alt="Avatar 3"
            />
          </div>

          {/* --------- Cột nội dung --------- */}
          <div className="about-us">
            <div>
              <Text as="h6" className="uppercase">About Us</Text>
              <Text as="h5">Experiment With The Best</Text>
              <Text as="h5">Lab Test And Service</Text>
            </div>

            <Text as="p">
              With a belief that knowledge is power, we connect our patients directly with their
              results so they have valuable health information when they need it most.
            </Text>

            <div className="services-grid">
              <ContactInfoItem name={EIcon.Double_Check}>Toxicological assessment</ContactInfoItem>
              <ContactInfoItem name={EIcon.Double_Check}>Clinical laboratory testing</ContactInfoItem>
              <ContactInfoItem name={EIcon.Double_Check}>Toxicological assessment</ContactInfoItem>
              <ContactInfoItem name={EIcon.Double_Check}>Clinical laboratory testing</ContactInfoItem>
            </div>

            <hr />

            <div className="signature-block">
              <LightboxImage
                className="w-45"
                src="/assets/images/sing.png"
                width={300}
                height={100}
                alt="Signature"
              />
              <div className="circle-avatar">
                <LightboxImage
                  className="w-16 rounded-full"
                  src="/assets/images/avatar/avatar.png"
                  width={128}
                  height={128}
                  alt="Dr. Abigail George"
                />
                <div className="pl-3">
                  <Text as="h6">Dr. Abigail George</Text>
                  <Text as="label">Laboratory Specialist</Text>
                </div>
              </div>
            </div>

            <div><button type="button" title="MAKE APPOINTMENT" className="appointment-btn uppercase">
              <Text as="span">MAKE APPOINTMENT</Text>
            </button></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutStart;
