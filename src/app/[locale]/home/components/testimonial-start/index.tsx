import Image from "next/image";
import "./style.scss";
import { Icon } from "../../../../../shared/components/atoms";
import { EIcon } from "@/shared/enums";
import Text from "../../../../../shared/components/atoms/text";
import SlideContent from "../../../../../shared/components/molecules/SlideContent";

type Testimonial = {
  id: number;
  name: string;
  role: string;
  avatar: string;
  rating: number;
  comment: string;
  icon: EIcon;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Vitoria Carrillo",
    role: "Lab Specialist",
    avatar: "/assets/images/testimonial-start.png",
    rating: 5,
    comment:
      "Labozu is the best diagnostic lab in the city. I have great experience with them. They provide authentic results & have the best environment inside here. I highly recommend them.",
    icon: EIcon.Flaticon,
  },
  {
    id: 2,
    name: "John Doe",
    role: "Patient",
    avatar: "/assets/images/testimonial-start.png",
    rating: 4,
    comment:
      "Professional staff and fast service. Definitely my go-to lab for health check-ups.",
    icon: EIcon.Flaticon,
  },
  {
    id: 3,
    name: "Sophia Lee",
    role: "Researcher",
    avatar: "/assets/images/testimonial-start.png",
    rating: 5,
    comment:
      "The environment is clean, staff are very helpful, and the reports are highly accurate.",
    icon: EIcon.Flaticon,
  },
];

const TestimonialCard = ({ t }: { t: Testimonial }) => {
  return (
    <div className="swiper-slide">
      <Image
        src={t.avatar}
        alt={t.name}
        className="avatar-img"
        width={600}
        height={600}
      />
      <div className="img-icon">
        <Icon className="nav-icon w-10 h-10" name={t.icon} />
      </div>
      <div className="testimonial-content">
        <div className="testimonial-rating flex gap-1">
          {Array.from({ length: 5 }, (_, i) => (
            <Icon
              key={i}
              name={EIcon.Star}
              className={`w-6 h-6 ${i < t.rating ? "text-yellow-400" : "text-gray-300"}`}
            />
          ))}
        </div>
        <Text as="p">{t.comment}</Text>
        <div className="testimonial-caption">
          <SlideContent
            subtitle={t.name}
            subtitleAs="h5"
            title={t.role}
            titleAs="label"
          />
        </div>
      </div>
    </div>
  );
};

const TestimonialStart = () => {
  return (
    <section className="testimonial-start">
      <div className="container">
        {/* Header */}
        <div className="top-contain flex items-start gap-6">
          <div className="flex-[5]">
            <Text as="h6">Testimonial</Text>
            <Text as="h3">
              Hear Review From Our <Text as="span">Happy Patients</Text>
            </Text>
          </div>
          <div className="flex-[4]">
            <Text as="p">
              Our CEO Lead Bioscientist Chloe Hazell attended the talks alongside
              multiple tenants and companies from across Wales.
            </Text>
          </div>
          <div className="flex-[2] text-center">
            <div className="rating">
              <Text as="h3">4.8</Text>
              <Text as="h6">Average Rating</Text>
            </div>
          </div>
        </div>

        <hr className="w-full my-6" />

        {/* Swiper Slides */}
        <div className="bottom-contain swiper mySwiper w-full">
          <div className="swiper-wrapper">
            {testimonials.map((t) => (
              <TestimonialCard key={t.id} t={t} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialStart;
