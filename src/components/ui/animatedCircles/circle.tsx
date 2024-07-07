import React, { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';

interface AnimatedCircleProps {
  radius: number;
  strokeWidth: number;
  position: number;
  whitePosition: number;
  whiteSize: number;
}

export const AnimatedCircle: React.FC<AnimatedCircleProps> = ({ whiteSize, radius, strokeWidth, position, whitePosition }) => {
  const [isClicked, setIsClicked] = useState(false);
  const [currentWhiteSize, setCurrentWhiteSize] = useState(0);
  const animationRef = useRef<number | null>(null);

  const circumference = 2 * Math.PI * radius;
  const viewBoxSize = (radius + strokeWidth) * 2;

  const animateStrokeDasharray = (start: number, end: number, duration: number) => {
    const startTime = performance.now();
    
    const animate = (currentTime: number) => {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);
      const newWhiteSize = start + (end - start) * progress;

      setCurrentWhiteSize(newWhiteSize);

      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate);
      }
    };

    animationRef.current = requestAnimationFrame(animate);
  };

  const handleCircleAnimate = () => {
    if (isClicked) {
      animateStrokeDasharray(whiteSize, 0, 1000);
    } else {
      animateStrokeDasharray(0, whiteSize, 1000);
    }
    setIsClicked(false);
  };

  const location = useLocation()

  useEffect(() => {
    if(location.pathname === "/work" || location.pathname === "/skills") {
      handleCircleAnimate()
    }
  }, [location.pathname]);

  return (
    <div className="circle">
      <svg width={viewBoxSize} height={viewBoxSize} viewBox={`0 0 ${viewBoxSize} ${viewBoxSize}`}>
        <circle
          className="background"
          cx={viewBoxSize / 2}
          cy={viewBoxSize / 2}
          r={radius}
          stroke="#333"
          strokeWidth={strokeWidth}
          fill="none"
          strokeDashoffset="0"
        />
        <circle
          className="foreground white"
          cx={viewBoxSize / 2}
          cy={viewBoxSize / 2}
          r={radius}
          stroke="#fff"
          strokeWidth={strokeWidth}
          fill="none"
          strokeDasharray={`${currentWhiteSize} ${circumference - currentWhiteSize}`}
          strokeDashoffset={whitePosition}
        />
        <circle
          className="foreground"
          cx={viewBoxSize / 2}
          cy={viewBoxSize / 2}
          r={radius}
          stroke="rgba(255, 255, 255, 0)"
          strokeWidth={strokeWidth}
          fill="none"
          strokeDasharray={`10 ${circumference - 10}`}
          strokeDashoffset={position}
        />
      </svg>
    </div>
  );
};
