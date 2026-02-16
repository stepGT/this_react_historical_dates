import React from 'react';
import { EventsSliderProps } from '../types';

const EventsSlider: React.FC<EventsSliderProps> = ({ events }) => {
  return (
    <div className="events-slider">
      <div className="events-slider__container">
        <h2 className="events-slider__title">{1}</h2>
      </div>
    </div>
  );
};

export default EventsSlider;
