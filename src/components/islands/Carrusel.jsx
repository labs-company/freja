import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import imagePulser from "../../assets/font-principle-pulser.jpg";
import imagePulserNasim from "../../assets/nasim-keshmiri-CQ3xrqbV58s-unsplash.jpg";
import imagePulserKeshim from "../../assets/nasim-keshmiri-jlgrGDDmNlI-unsplash.jpg";

export default function CarruselFreja() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={imagePulser.src} className="w-full object-cover h-max" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={imagePulserNasim.src} className="w-full object-cover" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={imagePulserKeshim.src} className="w-full object-cover" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
