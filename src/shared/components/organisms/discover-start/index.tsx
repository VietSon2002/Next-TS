import '@/shared/components/organisms/discover-start/style.scss';
import Image from 'next/image';

const DiscoverStart = () => {
  return (
    <section className="discover-start">
      <div className="container">
        <div className="contain">
          <div className="left">
            <div className="theme-title">
              <h6>Who We Are</h6>
              <h4>
                Discover Our Commitment to <span>Research Center</span>
              </h4>
              <p>
                Delivering cutting-edge scientific services with precise testing, research support,
                and consultation, committed to excellence and advancement in every project.
              </p>
            </div>
            <div className="main-contain">
              <div className="featured-item">
                <div className="featured-top">
                  <svg className="nav-icon" width="120" height="120">
                    <use href="/assets/icons/sprite.svg#icon-business-money"></use>
                  </svg>
                  <h6>Medical laboratory Technician</h6>
                </div>
                <hr />
                <p>New evidence has been published on the protein dosing patients.</p>
              </div>
              <div className="featured-item">
                <div className="featured-top">
                  <svg className="nav-icon" width="120" height="120">
                    <use href="/assets/icons/sprite.svg#icon-business-money"></use>
                  </svg>
                  <h6>Medical laboratory Technician</h6>
                </div>
                <hr />
                <p>New evidence has been published on the protein dosing patients.</p>
              </div>
            </div>
            <div>
              <a href="#" className="appointment-btn">
                More about us
              </a>
            </div>
          </div>
          <div className="right">
            <div className="image-wrapper">
              <Image
                src="/assets/images/about-star-0.png"
                alt="About Us"
                width={1920}
                height={600}
              />
            </div>
            <Image
              className="img-2"
              src="/assets/images/about-star-1.png"
              alt="About Us"
              width={1920}
              height={600}
            />
            <div className="about-counter float">
              <div className="text-center">
                <span>15+</span>
                <h6>Years of Experience</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiscoverStart;
