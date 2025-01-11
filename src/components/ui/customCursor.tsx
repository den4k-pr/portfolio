import React, { useEffect, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState<boolean>(false); // Початково прихований
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const [isDesktop, setIsDesktop] = useState<boolean>(window.innerWidth > 768); // Визначаємо пристрій

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 768);
    };

    const handleMouseMove = (event: MouseEvent) => {
      const { clientX: x, clientY: y } = event;
      setPosition({ x, y });

      if (x <= 0 || y <= 0 || x >= document.documentElement.clientWidth || y >= document.documentElement.clientHeight) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    const handleMouseDown = () => {
      setIsClicked(true);
    };

    const handleMouseUp = () => {
      setIsClicked(false);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener('resize', handleResize);
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, []);

  // Не відображаємо курсор на мобільних пристроях
  if (!isDesktop) {
    return null;
  }

  return (
    <div
      className={`cursor ${isVisible ? '' : 'hidden'} ${isClicked ? 'clicked' : ''}`}
      style={{ left: `${position.x}px`, top: `${position.y}px` }}
    />
  );
};
