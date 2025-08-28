'use clinet';

import '@/shared/components/organisms/feature-start/style.scss';

const FeatureStart = () => {
  return (
    <section className="feature-start">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="item">
              <svg className="nav-icon" width="24" height="24">
                <use xlinkHref="/assets/icons/sprite.svg#icon-business-money"></use>
              </svg>
              <div className="featured-title">
                <h5>Microbiology</h5>
                <p>This includes bacteria, viruses, fungi, and parasites.</p>
                <a href="#" className="read-more">
                  Read more
                  <svg className="icon-arrow" width="16" height="16" fill="currentColor">
                    <use xlinkHref="/assets/icons/sprite.svg#icon-arrow-right"></use>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="item">
              <svg className="nav-icon" width="24" height="24">
                <use href="/assets/icons/sprite.svg#icon-business-money"></use>
              </svg>
              <div className="featured-title">
                <h5>Microbiology</h5>
                <p>This includes bacteria, viruses, fungi, and parasites.</p>
                <a href="#" className="read-more">
                  Read more
                  <svg className="icon-arrow" width="16" height="16" fill="currentColor">
                    <use href="/assets/icons/sprite.svg#icon-arrow-right"></use>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="item">
              <svg className="nav-icon" width="24" height="24">
                <use href="/assets/icons/sprite.svg#icon-business-money"></use>
              </svg>
              <div className="featured-title">
                <h5>Microbiology</h5>
                <p>This includes bacteria, viruses, fungi, and parasites.</p>
                <a href="#" className="read-more">
                  Read more
                  <svg className="icon-arrow" width="16" height="16" fill="currentColor">
                    <use href="/assets/icons/sprite.svg#icon-arrow-right"></use>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="item">
              <svg className="nav-icon" width="24" height="24">
                <use href="/assets/icons/sprite.svg#icon-business-money"></use>
              </svg>
              <div className="featured-title">
                <h5>Microbiology</h5>
                <p>This includes bacteria, viruses, fungi, and parasites.</p>
                <a href="#" className="read-more">
                  Read more
                  <svg className="icon-arrow" width="16" height="16" fill="currentColor">
                    <use href="/assets/icons/sprite.svg#icon-arrow-right"></use>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureStart;
