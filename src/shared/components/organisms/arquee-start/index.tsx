import '@/shared/components/organisms/arquee-start/style.scss';

const ArqueeStart = () => {
  return (
    <section className="arquee-start">
      <div className="scroll-wrapper">
        <div className="scroll-fade left"></div>
        <div className="scroll-fade right"></div>

        <div className="marquee-text">
          <div className="marquee-inner">
            <span>Laboratory</span>
            <span>Science</span>
            <span>Research</span>
            <span>Laboratory</span>
            <span>Science</span>
            <span>Research</span>
          </div>
          <div className="marquee-inner">
            <span>Laboratory</span>
            <span>Science</span>
            <span>Research</span>
            <span>Laboratory</span>
            <span>Science</span>
            <span>Research</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArqueeStart;
