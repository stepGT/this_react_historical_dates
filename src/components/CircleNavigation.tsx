import React from 'react';
import '../styles/CircleNavigation.scss';

const CircleNavigation: React.FC = () => {
  return (
    <div className="circle-navigation">
      <div className="circle-navigation__container">
        <div className="circle-navigation__circle" />
      </div>

      <div className="circle-navigation__years">
        <span className="circle-navigation__year circle-navigation__year--start">2020</span>
        <span className="circle-navigation__year circle-navigation__year--end">2026</span>
      </div>
    </div>
  );
};
//
export default CircleNavigation;
