import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar, Navigation, EffectCoverflow } from "swiper";
import React from "react";

export const CardSwiper: React.FC<{
  cards: React.ReactNode[];
  className?: string;
  slideClasses?: string;
}> = ({ cards, className = "", slideClasses = "" }) => {
  return (
    <Swiper
      className={className}
      scrollbar={{
        hide: true,
      }}
      grabCursor={true}
      navigation={true}
      modules={[EffectCoverflow, Navigation, Scrollbar]}
      spaceBetween={10}
      slidesPerView="auto"
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
    >
      {cards.map((card, index) => {
        return (
          <SwiperSlide className={slideClasses} key={index}>
            {card}
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};
