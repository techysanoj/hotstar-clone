'use client';

import { useState, useEffect } from 'react';
import './HomeScreen.css';
type Props = {
  items: string[];
  interval?: number; // milliseconds
};

export default function HomeScreen({ items, interval = 3000 }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length);
    }, interval);

    return () => clearInterval(timer);
  }, [items.length, interval]);

  return (
    <div className='main-slide'>
        <div className='main-content'>{items[currentIndex]}</div>
        <div className='page-number'>{currentIndex + 1}</div>
    </div>
  );
}
