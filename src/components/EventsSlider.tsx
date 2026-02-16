import React, { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { EventsSliderProps } from '../types';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../styles/EventsSlider.scss';

SwiperCore.use([Navigation, Pagination]);

const EventsSlider: React.FC<EventsSliderProps> = ({ events }) => {
  const swiperRef = useRef<any>(null);

  useEffect(() => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideTo(0);
    }
  }, [events]);

  return (
    <div className="events-slider">
      <div className="events-slider__container">
        <Swiper
          ref={swiperRef}
          spaceBetween={30}
          slidesPerView={1.5}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            768: {
              slidesPerView: 2.5,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }}>
          {events.map((event, idx) => (
            <SwiperSlide key={idx}>
              <div className="events-slider__card">
                <div className="events-slider__year">{event.year}</div>
                <div className="events-slider__description">{event.description}</div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
//
export default EventsSlider;
