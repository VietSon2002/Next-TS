import Image from 'next/image';
import './style.scss';

const TestimonialStart = () => {
  return (
    <section className="testimonial-start">
      <div className="container">
        <div className="top-contain">
          <div className="flex-[5]">
            <h6>Testimonial</h6>
            <h3>
              Hear Review From Our <span>Happy Patients</span>
            </h3>
          </div>
          <div className="flex-[4]">
            <p>
              Our CEO Lead Bioscientist Chloe Hazell attended the talks alongside multiple tenants
              and companies from across Wales.
            </p>
          </div>
          <div className="flex-[2]">
            <div className="rating">
              <h3>4.8</h3>
              <h6>Average Rating</h6>
            </div>
          </div>
        </div>
        <hr className="w-full" />
        <div className="bottom-contain swiper mySwiper w-full">
          <div className="swiper-wrapper">
            {/* Slide 1  */}
            <div className="swiper-slide">
              <Image
                src="/assets/images/testimonial-start.png"
                alt="Avatar"
                className="avatar-img"
                width={600}
                height={600}
              />
              <div className="img-icon">
                <svg className="nav-icon" width="40" height="40">
                  <use href="/assets/icons/sprite.svg#icon-flaticon"></use>
                </svg>
              </div>
              <div className="testimonial-content">
                <div className="testimonial-rating">
                  <svg className="icon-arrow" width="24" height="24">
                    <use href="/assets/icons/sprite.svg#icon-star"></use>
                  </svg>
                  <svg className="icon-arrow" width="24" height="24">
                    <use href="/assets/icons/sprite.svg#icon-star"></use>
                  </svg>
                  <svg className="icon-arrow" width="24" height="24">
                    <use href="/assets/icons/sprite.svg#icon-star"></use>
                  </svg>
                  <svg className="icon-arrow" width="24" height="24">
                    <use href="/assets/icons/sprite.svg#icon-star"></use>
                  </svg>
                  <svg className="icon-arrow" width="24" height="24">
                    <use href="/assets/icons/sprite.svg#icon-star"></use>
                  </svg>
                </div>
                <p>
                  labozu is the best diagnostic lab in the city. I have great experience with them.
                  The provide authentic results &amp; have the best environment inside here. I
                  highly recommend them. It is nothing but a website with a catalog of products and
                  the possibility of buying them by visitors.
                </p>
                <div className="testimonial-caption">
                  <h5>Vitoria Carrillo</h5>
                  <label>Lab Specialist</label>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <Image
                src="/assets/images/testimonial-start.png"
                alt="Avatar"
                className="avatar-img"
                width={600}
                height={600}
              />
              <div className="img-icon">
                <svg className="nav-icon" width="40" height="40">
                  <use href="/assets/icons/sprite.svg#icon-flaticon"></use>
                </svg>
              </div>
              <div className="testimonial-content">
                <div className="testimonial-rating">
                  <svg className="icon-arrow" width="24" height="24">
                    <use href="/assets/icons/sprite.svg#icon-star"></use>
                  </svg>
                  <svg className="icon-arrow" width="24" height="24">
                    <use href="/assets/icons/sprite.svg#icon-star"></use>
                  </svg>
                  <svg className="icon-arrow" width="24" height="24">
                    <use href="/assets/icons/sprite.svg#icon-star"></use>
                  </svg>
                  <svg className="icon-arrow" width="24" height="24">
                    <use href="/assets/icons/sprite.svg#icon-star"></use>
                  </svg>
                  <svg className="icon-arrow" width="24" height="24">
                    <use href="/assets/icons/sprite.svg#icon-star"></use>
                  </svg>
                </div>
                <p>
                  labozu is the best diagnostic lab in the city. I have great experience with them.
                  The provide authentic results &amp; have the best environment inside here. I
                  highly recommend them. It is nothing but a website with a catalog of products and
                  the possibility of buying them by visitors.
                </p>
                <div className="testimonial-caption">
                  <h5>Vitoria Carrillo</h5>
                  <label>Lab Specialist</label>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <Image
                src="/assets/images/testimonial-start.png"
                alt="Avatar"
                className="avatar-img"
                width={600}
                height={600}
              />
              <div className="img-icon">
                <svg className="nav-icon" width="40" height="40">
                  <use href="/assets/icons/sprite.svg#icon-flaticon"></use>
                </svg>
              </div>
              <div className="testimonial-content">
                <div className="testimonial-rating">
                  <svg className="icon-arrow" width="24" height="24">
                    <use href="/assets/icons/sprite.svg#icon-star"></use>
                  </svg>
                  <svg className="icon-arrow" width="24" height="24">
                    <use href="/assets/icons/sprite.svg#icon-star"></use>
                  </svg>
                  <svg className="icon-arrow" width="24" height="24">
                    <use href="/assets/icons/sprite.svg#icon-star"></use>
                  </svg>
                  <svg className="icon-arrow" width="24" height="24">
                    <use href="/assets/icons/sprite.svg#icon-star"></use>
                  </svg>
                  <svg className="icon-arrow" width="24" height="24">
                    <use href="/assets/icons/sprite.svg#icon-star"></use>
                  </svg>
                </div>
                <p>
                  labozu is the best diagnostic lab in the city. I have great experience with them.
                  The provide authentic results &amp; have the best environment inside here. I
                  highly recommend them. It is nothing but a website with a catalog of products and
                  the possibility of buying them by visitors.
                </p>
                <div className="testimonial-caption">
                  <h5>Vitoria Carrillo</h5>
                  <label>Lab Specialist</label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialStart;
