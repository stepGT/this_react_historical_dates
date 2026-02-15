import React from 'react';
import '../styles/CircleNavigation.scss';
import { CircleNavigationProps } from '../types';

const CircleNavigation: React.FC<CircleNavigationProps> = ({ periods }) => {
  return (
    <div className="circle-navigation">
      <div className="circle-navigation__container">
        <div className="circle-navigation__circle" />
        {periods.map((prd, idx) => (
          <div className="circle-navigation__point" key={prd.id} onClick={() => {}}>
            <span
              className="circle-navigation__point-label"
              onClick={(e) => {
                e.stopPropagation();
              }}
              style={{}}>
              { prd.id }
            </span>
          </div>
        ))}
      </div>

      <div className="circle-navigation__years">
        <span className="circle-navigation__year circle-navigation__year--start">
          {periods[0].startYear}
        </span>
        <span className="circle-navigation__year circle-navigation__year--end">
          {periods[0].endYear}
        </span>
      </div>
    </div>
  );
};
//
export default CircleNavigation;
