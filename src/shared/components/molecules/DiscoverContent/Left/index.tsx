import Text from "@/shared/components/atoms/text";
import ContactInfoItem from "../../ContactInfoItem";
import { EIcon } from "@/shared/enums";
import SlideContent from "../../SlideContent";
import './style.scss';

const featured = [
  {
    icon: EIcon.Business_Money,
    title: "Medical laboratory Technician",
    desc: "New evidence has been published on the protein dosing patients.",
  },
  {
    icon: EIcon.Business_Money,
    title: "Medical laboratory Technician",
    desc: "New evidence has been published on the protein dosing patients.",
  },
];

export default function DiscoverContentLeft() {
  return (
    <div className="left">
      <SlideContent
        subtitle="Who We Are"
        title="Discover Our Commitment to Research Center"
        description="Delivering cutting-edge scientific services with precise testing, research support, and consultation, committed to excellence and advancement in every project."
        titleAs="h4"
      />

      <div className="main-contain">
        {featured.map((item, idx) => (
          <div key={idx} className="item">
            <ContactInfoItem name={item.icon} titleAs="h6" iconClassName="w-15 h-15 fill-primary-500">
              {item.title}
            </ContactInfoItem>
            <hr />
            <Text as="p">{item.desc}</Text>
          </div>
        ))}
      </div>

      <div>
        <Text as="a" href="#" className="appointment-btn">
          More about us
        </Text>
      </div>
    </div>
  );
}
