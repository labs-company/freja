import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import ImageCarrusel from "../ImageCarrusel";
import pulserRed from "../../assets/pulser-red.jpg";
import pulserRetro from "../../assets/pulser-retro.jpg";
import pulserTela from "../../assets/pulser-tela.jpg";

export default function CarruselFreja() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        centeredSlides={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="h-full"
      >
        <SwiperSlide>
          <ImageCarrusel image={pulserRed.src} />
        </SwiperSlide>
        <SwiperSlide>
          <ImageCarrusel image={pulserRetro.src} />
        </SwiperSlide>
        <SwiperSlide>
          <ImageCarrusel image={pulserTela.src} />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
