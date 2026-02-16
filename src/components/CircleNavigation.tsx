import React, { useEffect, useRef } from 'react';
import '../styles/CircleNavigation.scss';
import { CircleNavigationProps } from '../types';
import { gsap } from 'gsap';

const CircleNavigation: React.FC<CircleNavigationProps> = ({
  periods,
  activeID,
  onPeriodChange,
}) => {
  const pointsRef = useRef<(HTMLDivElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const handlePointClick = (idx: number) => {
    onPeriodChange(idx);
  };
  //
  useEffect(() => {
    if (containerRef.current && periods.length >= 2 && periods.length <= 6) {
      const points = pointsRef.current.filter(Boolean);
      const angleStep = 360 / periods.length;
      const radius = containerRef.current.offsetWidth / 2;

      points.forEach((point, index) => {
        const angle = (index * angleStep + 45) * (Math.PI / 180);
        const x = radius * Math.cos(angle);
        const y = radius * Math.sin(angle);

        gsap.set(point, {
          x: x,
          y: y,
          xPercent: -50,
          yPercent: -50,
        });
      });
    }
  }, [periods.length]);
  //
  return (
    <div className="circle-navigation">
      <div className="circle-navigation__container" ref={containerRef}>
        <div className="circle-navigation__circle" />
        {periods.map((prd, idx) => (
          <div
            className={`circle-navigation__point ${
              idx === activeID ? 'circle-navigation__point--active' : ''
            }`}
            ref={(el) => {
              pointsRef.current[idx] = el;
            }}
            key={prd.id}
            onClick={() => handlePointClick(idx)}>
            <span
              className="circle-navigation__point-label"
              onClick={(e) => {
                e.stopPropagation();
              }}
              style={{}}>
              {activeID + 1}
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
