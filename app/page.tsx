import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import Carrusel from "@/components/carrusel";
import Title from "@/components/title";
import LatestOffersPage from "./latest-offers/page";
import ToGiveAwayPage from "./to-give-away/page";
import Slider from "@/components/slider";

export default function HomePage() {
  return (
    <>
      <section className="h-[90vh]">
        <Carrusel />
      </section>
      <section>
        <Title title="¡Lo Ultimo!" />
        <LatestOffersPage />
      </section>
      <section>
        <Title title="Para mujeres" />
        <Slider />
      </section>
      <section className="lg:mt-10">
        <Title title="Para hombres" />
        <Slider />
      </section>
      <section>
        <Title title="Para regalar" />
        <ToGiveAwayPage />
      </section>
    </>
  );
}
