'use client';

import React, { useState, useEffect } from 'react';

interface AnimationTitle {
  title: string;
  animTitle: string;
}

const TypewriterAnimation = ({ title, animTitle }: AnimationTitle) => {
  const [typedText, setTypedText] = useState('');
  const text = animTitle;

  useEffect(() => {
    let timeoutId: any;
    let currentIndex = 0;

    const type = () => {
      if (currentIndex === text.length) {
        clearTimeout(timeoutId);
        setTimeout(() => {
          setTypedText('');
          currentIndex = 0;
          type();
        }, 5000);
        return;
      }

      const nextChar = text[currentIndex];
      setTypedText((prevText) => prevText + nextChar);

      currentIndex++;

      const delay = Math.random() * 200 + 50;
      timeoutId = setTimeout(type, delay);
    };

    type();

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div className="textBox">
      {title} <span style={{ color: '#0ef', display: 'inline' }}>{typedText}</span>
    </div>
  );
};

export default TypewriterAnimation;
