import '@/shared/components/organisms/about-start/style.scss';
import Image from 'next/image';

const AboutStart = () => {
  return (
    <section className="about-start">
      <div className="container">
        <div className="about-wrapper">
          <div className="images">
            <div className="img-row">
              <Image src="/assets/images/avatar/ava01.png" width={1920} height={600} alt="" />
              <Image src="/assets/images/avatar/ava02.png" width={1920} height={600} alt="" />
            </div>
            <Image
              src="/assets/images/avatar/ava03.png"
              width={1920}
              height={600}
              alt=""
              className="Image-full"
            />
          </div>

          <div className="about-us">
            <div>
              <h6>About Us</h6>
              <h5>Experiment With The Best</h5>
              <h5>Lab Test And Service</h5>
            </div>

            <p>
              With a belief that knowledge is power, we connect our patients directly with their
              results so they have valuable health information when they need it most.
            </p>

            <div>
              <span>
                <svg className="nav-icon" width="24" height="24">
                  <use href="/assets/icons/sprite.svg#icon-double-check"></use>
                </svg>
                Toxicological assessment
              </span>
              <span>
                <svg className="nav-icon" width="24" height="24">
                  <use href="/assets/icons/sprite.svg#icon-double-check"></use>
                </svg>
                Toxicological assessment
              </span>
              <span>
                <svg className="nav-icon" width="24" height="24">
                  <use href="/assets/icons/sprite.svg#icon-double-check"></use>
                </svg>
                Toxicological assessment
              </span>
              <span>
                <svg className="nav-icon" width="24" height="24">
                  <use href="/assets/icons/sprite.svg#icon-double-check"></use>
                </svg>
                Toxicological assessment
              </span>
            </div>
            <hr />
            <div>
              <div>
                <Image
                  className="w-45"
                  src="/assets/images/sing.png"
                  width={1920}
                  height={600}
                  alt=""
                />
              </div>
              <div className="circle-avatar">
                <Image
                  className="w-16"
                  src="/assets/images/avatar/avatar.png"
                  width={1920}
                  height={600}
                  alt=""
                />
                <div>
                  <h6>Dr. Abigail George</h6>
                  <label className="text-primary" htmlFor="">
                    Laboratory Specialist
                  </label>
                </div>
              </div>
            </div>

            <div>
              <a href="#" className="appointment-btn">
                More about us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutStart;
