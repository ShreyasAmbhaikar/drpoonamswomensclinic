'use client';

import { useState } from 'react';

export default function CardStack({ items }: { items: any[] }) {
  const [cards, setCards] = useState(items.map((item, i) => ({ ...item, id: i })));
  const [animatingOut, setAnimatingOut] = useState<number | null>(null);

  const handleCardClick = () => {
    if (animatingOut !== null) return;
    
    setAnimatingOut(cards[0].id);
    
    setTimeout(() => {
      setCards((prev) => {
        const newArray = [...prev];
        const first = newArray.shift();
        newArray.push(first!);
        return newArray;
      });
      setAnimatingOut(null);
    }, 450); 
  };

  return (
    <div className="relative h-[340px] md:h-[300px] w-full max-w-2xl mx-auto select-none" onClick={handleCardClick}>
      {cards.map((card, index) => {
        const isTop = index === 0;
        const isAnimating = animatingOut === card.id;
        
        // Fan-out: each stacked card tilts alternating directions and shifts up
        const rotation = index === 0 ? 0 : (index % 2 === 1 ? -2.5 * index : 2.5 * index);
        const yOffset = index * -14;
        const scale = 1 - index * 0.04;
        
        let transformStyle = `translateY(${yOffset}px) scale(${scale}) rotate(${rotation}deg)`;
        let opacityStyle = index < 3 ? 1 : 0;
        
        if (isAnimating) {
          // Swipe-up-and-right with heavy tilt
          transformStyle = `translateY(-180px) translateX(200px) rotate(22deg) scale(0.85)`;
          opacityStyle = 0;
        }

        return (
          <div
            key={card.id}
            className="absolute inset-0 cursor-pointer rounded-[32px] overflow-hidden"
            style={{
              zIndex: cards.length - index,
              transform: transformStyle,
              opacity: opacityStyle,
              pointerEvents: isTop ? 'auto' : 'none',
              transition: isAnimating 
                ? 'transform 450ms cubic-bezier(0.22, 0.68, 0, 1.2), opacity 400ms ease-out' 
                : 'transform 500ms cubic-bezier(0.34, 1.56, 0.64, 1), opacity 500ms ease-out',
            }}
          >
            {/* Card background layer */}
            <div 
              className="absolute inset-0"
              style={{ background: card.bgGradient || '#fff' }}
            ></div>

            {/* Noise / grain texture overlay */}
            <div 
              className="absolute inset-0 opacity-[0.08] mix-blend-overlay pointer-events-none"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                backgroundSize: '128px 128px',
              }}
            ></div>

            {/* Soft mesh blurs */}
            <div className="absolute -top-24 -right-24 w-72 h-72 bg-white/25 blur-[60px] rounded-full pointer-events-none"></div>
            <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-white/20 blur-[70px] rounded-full pointer-events-none"></div>

            {/* Subtle border */}
            <div className="absolute inset-0 rounded-[32px] border border-white/40 pointer-events-none"></div>

            {/* Shadow */}
            <div className="absolute inset-0 rounded-[32px] shadow-[0_25px_60px_rgba(0,0,0,0.12)] pointer-events-none"></div>

            {/* Content */}
            <div className="relative z-10 h-full p-8 md:p-10 flex flex-col justify-center">
              <div className="flex gap-6 items-center">
                {/* Icon container with frosted glass */}
                <div 
                  className="shrink-0 w-[72px] h-[72px] rounded-[22px] flex items-center justify-center shadow-lg border border-white/50"
                  style={{ 
                    background: card.iconBg || 'rgba(255,255,255,0.35)',
                    backdropFilter: 'blur(12px)',
                  }}
                >
                  {card.icon}
                </div>
                <div>
                  <h3 
                    className="text-[24px] md:text-[28px] font-bold mb-3 tracking-tight"
                    style={{ color: card.titleColor || '#1a1a2e' }}
                  >
                    {card.title}
                  </h3>
                  <p 
                    className="text-[15px] md:text-[16px] leading-relaxed font-medium"
                    style={{ color: card.textColor || 'rgba(30,30,50,0.75)' }}
                  >
                    {card.description}
                  </p>
                </div>
              </div>
              
              {isTop && (
                <div 
                  className="absolute top-6 right-8 text-[13px] font-bold tracking-wider uppercase animate-bounce flex items-center gap-2 px-4 py-2 rounded-full border"
                  style={{ 
                    color: card.titleColor || '#1a1a2e',
                    background: 'rgba(255,255,255,0.35)',
                    borderColor: 'rgba(255,255,255,0.5)',
                    backdropFilter: 'blur(8px)',
                  }}
                >
                  <span>Next</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
