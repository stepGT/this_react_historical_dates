import React, { useState } from 'react';
import TitleBlock from './TitleBlock';
import CircleNavigation from './CircleNavigation';
import { HistoricalDatesProps } from '../types';

const HistoricalDates: React.FC<HistoricalDatesProps> = ({ periods }) => {
  const [activePeriodID, setActivePeriodID] = useState(0);
  const handlePeriodChange = (idx: number) => {
    setActivePeriodID(idx);
  };
  return (
    <div className="historical-dates">
      <div className="container">
        <TitleBlock />
        <CircleNavigation
          onPeriodChange={handlePeriodChange}
          activeID={activePeriodID}
          periods={periods}
        />
      </div>
    </div>
  );
};

export default HistoricalDates;
