import Image from 'next/image';
import './style.scss';

const BlogStart = () => {
  return (
    <section className="blog-start">
      <div className="container">
        <div className="title">
          <h6>Recent Articles</h6>
          <h3>
            Innovation in Focus Stories <br />
            <span>Updated From Lab</span>
          </h3>
        </div>
        <div className="posts">
          <div className="post-card">
            <div className="image">
              <Image
                src="/assets/images/blog-start.png"
                alt="Blog image"
                width={180}
                height={180}
              />
            </div>
            <div className="content" style={{ marginTop: -80 }}>
              <div>
                <div>
                  <svg className="icon-arrow" width="16" height="16">
                    <use href="/assets/icons/sprite.svg#icon-calender"></use>
                  </svg>
                  <span>10 March, 2025</span>
                </div>
                <div>
                  <svg className="icon-arrow" width="16" height="16">
                    <use href="/assets/icons/sprite.svg#icon-tag"></use>
                  </svg>
                  <span>Biochemistry</span>
                </div>
              </div>
              <hr />
              <h6>The Role of Medical Laboratories in Infectious Disease Testing</h6>
              <a href="#" className="read-more uppercase">
                Read more
                <svg className="icon-arrow" width="16" height="16" fill="currentColor">
                  <use href="/assets/icons/sprite.svg#icon-arrow-right"></use>
                </svg>
              </a>
            </div>
          </div>
          <div className="post-card">
            <div className="image">
              <Image
                src="/assets/images/blog-start.png"
                alt="Blog image"
                width={180}
                height={180}
              />
            </div>
            <div className="content" style={{ marginTop: -80 }}>
              <div>
                <div>
                  <svg className="icon-arrow" width="16" height="16">
                    <use href="/assets/icons/sprite.svg#icon-calender"></use>
                  </svg>
                  <span>10 March, 2025</span>
                </div>
                <div>
                  <svg className="icon-arrow" width="16" height="16">
                    <use href="/assets/icons/sprite.svg#icon-tag"></use>
                  </svg>
                  <span>Biochemistry</span>
                </div>
              </div>
              <hr />
              <h6>The Role of Medical Laboratories in Infectious Disease Testing</h6>
              <a href="#" className="read-more uppercase">
                Read more
                <svg className="icon-arrow" width="16" height="16" fill="currentColor">
                  <use href="/assets/icons/sprite.svg#icon-arrow-right"></use>
                </svg>
              </a>
            </div>
          </div>
          <div className="post-card">
            <div className="image">
              <Image
                src="/assets/images/blog-start.png"
                alt="Blog image"
                width={180}
                height={180}
              />
            </div>
            <div className="content" style={{ marginTop: -80 }}>
              <div>
                <div>
                  <svg className="icon-arrow" width="16" height="16">
                    <use href="/assets/icons/sprite.svg#icon-calender"></use>
                  </svg>
                  <span>10 March, 2025</span>
                </div>
                <div>
                  <svg className="icon-arrow" width="16" height="16">
                    <use href="/assets/icons/sprite.svg#icon-tag"></use>
                  </svg>
                  <span>Biochemistry</span>
                </div>
              </div>
              <hr />
              <h6>The Role of Medical Laboratories in Infectious Disease Testing</h6>
              <a href="#" className="read-more uppercase">
                Read more
                <svg className="icon-arrow" width="16" height="16" fill="currentColor">
                  <use href="/assets/icons/sprite.svg#icon-arrow-right"></use>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogStart;
