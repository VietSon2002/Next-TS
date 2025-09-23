import './style.scss';
import Text from '@/shared/components/atoms/text';

type MarqueeTextProps = {
  words?: string[];
};

const MarqueeText = ({ words = ['Laboratory', 'Science', 'Research'] }: MarqueeTextProps) => {
  return (
    <section className="marquee-text-section">
      <div className="scroll-wrapper">
        <div className="scroll-fade left"></div>
        <div className="scroll-fade right"></div>

        <div className="marquee-text">
          {[...Array(2)].map((_, i) => (
            <div className="marquee-inner" key={i}>
              {words.map((word, j) => (
                <Text as="span" key={`${i}-${j}`}>
                  {word}
                </Text>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MarqueeText;
