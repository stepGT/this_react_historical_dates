import React from 'react';
import TitleBlock from './TitleBlock';
import CircleNavigation from './CircleNavigation';
import { HistoricalDatesProps } from '../types';

const HistoricalDates: React.FC<HistoricalDatesProps> = ({ periods }) => {
  return (
    <div className="historical-dates">
      <div className="container">
        <TitleBlock />
        <CircleNavigation periods={periods} />
      </div>
    </div>
  );
};

export default HistoricalDates;
