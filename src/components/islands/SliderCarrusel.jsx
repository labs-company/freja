import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import ImageSlider from "../ImageSlider";
import images from "../../docs/images";

/**
 * @typedef {Object} Photo
 * @property {string} url - La URL de la imagen.
 */

/*** @type {Array<Photo>}*/
const sliderImages = images.photos;

export default function SliderCarrusel() {
  return (
    <>
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={30}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        coverflowEffect={{
          rotate: 40,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        loop={true}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="h-full flex justify-start"
      >
        {sliderImages.map((photo, index) => (
          <SwiperSlide key={index} className="w-max">
            <ImageSlider photo={photo.url} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
