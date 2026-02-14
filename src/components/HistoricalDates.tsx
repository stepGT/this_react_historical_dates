import React from 'react';
import TitleBlock from './TitleBlock';
import CircleNavigation from './CircleNavigation';

const HistoricalDates: React.FC = () => {
  return (
    <div className="historical-dates">
      <div className="container">
        <TitleBlock />
        <CircleNavigation />
      </div>
    </div>
  );
};

export default HistoricalDates;
