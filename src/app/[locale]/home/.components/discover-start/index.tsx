import './style.scss';
import DiscoverContentLeft from "@/shared/components/molecules/DiscoverContent/Left";
import DiscoverContentRight from "@/shared/components/molecules/DiscoverContent/Right";

export default function DiscoverStart() {
  return (
    <section className="discover-start">
      <div className="container">
        <div className="contain">
          <DiscoverContentLeft />
          <DiscoverContentRight />
        </div>
      </div>
    </section>
  );
}