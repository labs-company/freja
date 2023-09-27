"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import pulserRed from "@/public/pulser-red.jpg";
import pulserRetro from "@/public/pulser-retro.jpg";
import pulserTela from "@/public/pulser-tela.jpg";
import Image from "next/image";

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
          <figure className="flex justify-center items-start h-full">
            <Image
              src={pulserRed}
              alt="Freja Componany"
              className="object-cover w-full h-full"
            />
          </figure>
        </SwiperSlide>
        <SwiperSlide>
          <figure className="flex justify-center items-start h-full">
            <Image
              src={pulserRetro}
              alt="Freja Componany"
              className="object-cover w-full h-full"
            />
          </figure>
        </SwiperSlide>
        <SwiperSlide>
          <figure className="flex justify-center items-start h-full">
            <Image
              src={pulserTela}
              alt="Freja Componany"
              className="object-cover w-full h-full"
            />
          </figure>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
