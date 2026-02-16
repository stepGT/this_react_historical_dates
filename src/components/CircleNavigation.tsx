import React, { useEffect, useRef, useState } from 'react';
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
  const rotationRef = useRef<GSAPTween | null>(null);
  const circleRef = useRef<HTMLDivElement>(null);
  const labelsRef = useRef<(HTMLSpanElement | null)[]>([]);
  const [currentRotation, setCurrentRotation] = useState(0);
  const INITIAL_OFFSET = -90;
  //
  const handlePointClick = (idx: number) => {
    rotateContainer(idx);
    onPeriodChange(idx);
  };
  const rotateContainer = (idx: number) => {
    const currentAngle = currentRotation;
    const angleStep = 360 / periods.length;
    const targetAngle = INITIAL_OFFSET - idx * angleStep;

    let delta = targetAngle - currentAngle;
    if (delta > 180) delta -= 360;
    if (delta < -180) delta += 360;

    if (rotationRef.current) {
      rotationRef.current.kill();
    }

    rotationRef.current = gsap.to(containerRef.current, {
      rotation: currentAngle + delta,
      duration: 1,
      ease: 'power2.inOut',
      onUpdate: function () {
        const progress = this.progress();
        const newRotation = currentAngle + delta * progress;
        setCurrentRotation(newRotation);

        labelsRef.current.forEach((label) => {
          label.style.transform = `translateY(-50%) rotate(${-newRotation}deg)`;
        });
      },
      onComplete: () => {
        setCurrentRotation(targetAngle);
      },
    });
  };
  const handlePrev = () => {
    const newIndex = activeID === 0 ? periods.length - 1 : activeID - 1;
    rotateContainer(newIndex);
    onPeriodChange(newIndex);
  };
  const handleNext = () => {
    const newIndex = activeID === periods.length - 1 ? 0 : activeID + 1;
    rotateContainer(newIndex);
    onPeriodChange(newIndex);
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
        <div className="circle-navigation__circle" ref={circleRef} />
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
              ref={(el) => {
                labelsRef.current[idx] = el;
              }}
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
          {periods[activeID].startYear}
        </span>
        <span className="circle-navigation__year circle-navigation__year--end">
          {periods[activeID].endYear}
        </span>
      </div>

      <div className="circle-navigation__controls">
        <span className="circle-navigation__pagination">
          {String(activeID + 1).padStart(2, '0')}/{String(periods.length).padStart(2, '0')}
        </span>
        <button
          className="circle-navigation__button"
          onClick={handlePrev}
          aria-label="Previous period">
          &larr;
        </button>
        <button className="circle-navigation__button" onClick={handleNext} aria-label="Next period">
          &rarr;
        </button>
      </div>
    </div>
  );
};
//
export default CircleNavigation;
