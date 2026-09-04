// components/RotatingCardStack.tsx
'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Card {
  id: number;
  title: string;
  emoji: string;
  color: string;
}

const cards: Card[] = [
  { id: 1, title: 'Frontend', emoji: '🎨', color: 'bg-blue-500' },
  { id: 2, title: 'Backend', emoji: '⚙️', color: 'bg-green-500' },
  { id: 3, title: 'Database', emoji: '🗄️', color: 'bg-purple-500' },
  { id: 4, title: 'DevOps', emoji: '🚀', color: 'bg-orange-500' },
  { id: 5, title: 'Mobile', emoji: '📱', color: 'bg-pink-500' },
];

export default function RotatingCardStack() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % cards.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const getCardPosition = (index: number) => {
    const diff = (index - currentIndex + cards.length) % cards.length;
    
    if (diff === 0) {
      return { zIndex: 5, scale: 1, y: 0, rotate: 0, opacity: 1 };
    } else if (diff === 1) {
      return { zIndex: 4, scale: 0.9, y: 40, rotate: 5, opacity: 0.8 };
    } else if (diff === cards.length - 1) {
      return { zIndex: 4, scale: 0.9, y: 40, rotate: -5, opacity: 0.8 };
    } else if (diff === 2 || diff === cards.length - 2) {
      return { zIndex: 3, scale: 0.8, y: 80, rotate: diff === 2 ? 10 : -10, opacity: 0.5 };
    } else {
      return { zIndex: 2, scale: 0.7, y: 120, rotate: 0, opacity: 0.2 };
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 p-8">
      <div className="relative w-full max-w-md h-[400px] perspective-1000">
        {cards.map((card, index) => {
          const position = getCardPosition(index);
          
          return (
            <motion.div
              key={card.id}
              className="absolute inset-0 cursor-pointer"
              initial={false}
              animate={{
                zIndex: position.zIndex,
                scale: position.scale,
                y: position.y,
                rotate: position.rotate,
                opacity: position.opacity,
              }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              onClick={() => setCurrentIndex(index)}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className={`relative w-full h-full rounded-2xl shadow-2xl ${card.color} overflow-hidden`}>
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent" />
                
                <div className="relative h-full flex flex-col items-center justify-center">
                  <div className="text-7xl mb-4">{card.emoji}</div>
                  <h3 className="text-white text-2xl font-bold">
                    {card.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Controls */}
      <div className="mt-8 flex items-center space-x-4">
        <button
          onClick={() => setCurrentIndex(prev => (prev - 1 + cards.length) % cards.length)}
          className="px-6 py-2 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors"
        >
          ← Prev
        </button>
        <button
          onClick={() => setIsAutoPlaying(!isAutoPlaying)}
          className="px-6 py-2 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors"
        >
          {isAutoPlaying ? '⏸ Pause' : '▶ Play'}
        </button>
        <button
          onClick={() => setCurrentIndex(prev => (prev + 1) % cards.length)}
          className="px-6 py-2 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors"
        >
          Next →
        </button>
      </div>
    </div>
  );
}