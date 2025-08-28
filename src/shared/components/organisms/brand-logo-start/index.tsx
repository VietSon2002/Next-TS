import Image from 'next/image';
import './style.scss';

const TestimonialStart = () => {
  return (
    <section className="brand-logo-start">
      <div className="container">
        <div>
          {/* <!-- Title --> */}
          <div className="title">
            <h6>Trusted Partner:</h6>
          </div>

          {/* <!-- Swiper --> */}
          <div>
            <div className="swiper client-swiper">
              <div className="swiper-wrapper">
                {/* <!-- Repeat these slides --> */}
                <div className="swiper-slide">
                  <div className="clients-logo">
                    <Image src="/assets/images/logo/01.png" alt="" width={180} height={180} />
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="clients-logo">
                    <Image src="/assets/images/logo/02.png" alt="" width={180} height={180} />
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="clients-logo">
                    <Image src="/assets/images/logo/03.png" alt="" width={180} height={180} />
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="clients-logo">
                    <Image src="/assets/images/logo/04.png" alt="" width={180} height={180} />
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="clients-logo">
                    <Image src="/assets/images/logo/05.png" alt="" width={180} height={180} />
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="clients-logo">
                    <Image src="/assets/images/logo/06.png" alt="" width={180} height={180} />
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="clients-logo">
                    <Image src="/assets/images/logo/07.png" alt="" width={180} height={180} />
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="clients-logo">
                    <Image src="/assets/images/logo/08.png" alt="" width={180} height={180} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
      </div>
    </section>
  );
};

export default TestimonialStart;
