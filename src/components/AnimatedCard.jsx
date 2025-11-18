import React from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const AnimatedCard = ({ children, className }) => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <div
      ref={ref}
      className={`fade-in ${isVisible ? 'visible' : ''} ${className}`}
    >
      {children}
    </div>
  );
};

export default AnimatedCard;
