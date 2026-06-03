'use client';
import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ScrollCard {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

interface HorizontalScrollCardsProps {
  cards: ScrollCard[];
  title?: string;
  subtitle?: string;
}

export default function HorizontalScrollCards({ cards, title, subtitle }: HorizontalScrollCardsProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -320 : 320;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full relative group">
      <div className="flex justify-between items-end mb-[30px]">
        <div>
          {title && (
            <h3 className="text-[24px] md:text-[28px] font-bold text-primary leading-tight">
              {title}
            </h3>
          )}
          {subtitle && (
            <p className="text-text mt-2 text-[15px]">{subtitle}</p>
          )}
        </div>
        <div className="hidden md:flex gap-2">
          <button 
            onClick={() => scroll('left')}
            className="w-10 h-10 rounded-full border border-divider/20 flex items-center justify-center text-text hover:bg-accent hover:text-white hover:border-accent transition-colors"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button 
            onClick={() => scroll('right')}
            className="w-10 h-10 rounded-full border border-divider/20 flex items-center justify-center text-text hover:bg-accent hover:text-white hover:border-accent transition-colors"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div 
        ref={scrollContainerRef}
        className="flex overflow-x-auto gap-6 pb-6 pt-2 snap-x snap-mandatory hide-scrollbar"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {cards.map((card, idx) => (
          <div 
            key={idx} 
            className="snap-start shrink-0 w-[280px] md:w-[320px] bg-white p-6 rounded-[20px] border border-divider/10 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col h-full"
          >
            {card.icon && (
              <div className="w-12 h-12 bg-secondary/30 rounded-xl flex items-center justify-center text-primary mb-5">
                {card.icon}
              </div>
            )}
            <h4 className="font-bold text-primary text-[18px] mb-3 leading-snug">{card.title}</h4>
            <p className="text-text text-[14px] leading-relaxed flex-1">{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
