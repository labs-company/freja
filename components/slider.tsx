"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import images from "@/public/slider-photos";

export default function SliderCarrusel() {
  return (
    <article className="px-4 py-6">
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
        {images.photos.map((photo, index) => (
          <SwiperSlide key={index} className="!w-max">
            <figure className="h-full">
              <Image
                src={photo.url}
                alt="url"
                className="w-96 h-full shadow rounded-xl scale-90 hover:scale-100 transition-transform"
              />
            </figure>
          </SwiperSlide>
        ))}
      </Swiper>
    </article>
  );
}
