import React from 'react';
import HistoricalDates from './components/HistoricalDates';
import mockData from './mocks/mockData.json';
const { periods } = mockData;
//
const App: React.FC = () => {
  return (
    <div className="App">
      <HistoricalDates />
    </div>
  );
};

export default App;
