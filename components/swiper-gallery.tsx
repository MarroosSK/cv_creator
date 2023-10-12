// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-creative";

import "../app/globals.css";

// import required modules
import { EffectCreative } from "swiper/modules";
import Image from "next/image";

export default function SwiperGallery() {
  return (
    <>
      <Swiper
        grabCursor={true}
        effect={"creative"}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, -400],
          },
          next: {
            translate: ["100%", 0, 0],
          },
        }}
        modules={[EffectCreative]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Image
            src="/dashboard-preview.jpg"
            alt="product preview"
            width={600}
            height={700}
            quality={100}
            className="rounded-md bg-white p-2 sm:p-8 md:p-20 shadow-2xl ring-1 ring-indigo-900/10"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/dashboard-preview.jpg"
            alt="product preview"
            width={600}
            height={700}
            quality={100}
            className="rounded-md bg-white p-2 sm:p-8 md:p-20 shadow-2xl ring-1 ring-indigo-900/10"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/dashboard-preview.jpg"
            alt="product preview"
            width={600}
            height={700}
            quality={100}
            className="rounded-md bg-white p-2 sm:p-8 md:p-20 shadow-2xl ring-1 ring-indigo-900/10"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
