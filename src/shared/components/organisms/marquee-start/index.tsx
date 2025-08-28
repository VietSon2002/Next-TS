import '@/shared/components/organisms/marquee-start/style.scss';
const MarqueeStart = () => {
  return (
    <section className="marquee-start pb-14">
      <div className="scroll-wrapper">
        <div className="scroll-fade left"></div>
        <div className="scroll-fade right"></div>
        <div className="marquee-text">
          <span>Our Specialist</span>
          <span>Team Member</span>
          <span>Expert Doctor</span>
          <span>Our Specialist</span>
          <span>Team Member</span>
          <span>Expert Doctor</span>
        </div>
      </div>
    </section>
  );
};

export default MarqueeStart;
