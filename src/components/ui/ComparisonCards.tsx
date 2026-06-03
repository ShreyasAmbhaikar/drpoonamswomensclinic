import React from 'react';
import { CheckCircle, XCircle } from 'lucide-react';

interface ComparisonItem {
  feature: string;
  isAvailable: boolean | string; // Can be a boolean for check/cross, or a string for description
}

interface ComparisonColumn {
  title: string;
  items: ComparisonItem[];
  theme?: 'primary' | 'accent' | 'secondary';
}

interface ComparisonCardsProps {
  title?: string;
  columns: [ComparisonColumn, ComparisonColumn]; // Exactly two columns for comparison
}

export default function ComparisonCards({ title, columns }: ComparisonCardsProps) {
  const getThemeClasses = (theme?: string) => {
    switch (theme) {
      case 'accent': return 'bg-accent text-white';
      case 'secondary': return 'bg-secondary text-primary';
      default: return 'bg-[#242736] text-white';
    }
  };

  return (
    <div className="w-full">
      {title && (
        <h3 className="text-[24px] md:text-[28px] font-bold text-primary mb-[30px] text-center leading-tight">
          {title}
        </h3>
      )}
      <div className="flex flex-col md:flex-row gap-6 lg:gap-10">
        {columns.map((col, idx) => (
          <div key={idx} className="flex-1 rounded-[24px] overflow-hidden border border-divider/10 shadow-sm flex flex-col">
            <div className={`p-6 text-center ${getThemeClasses(col.theme)}`}>
              <h4 className="text-[20px] md:text-[22px] font-bold m-0">{col.title}</h4>
            </div>
            <div className="bg-white p-6 md:p-8 flex-1 flex flex-col gap-4">
              {col.items.map((item, itemIdx) => (
                <div key={itemIdx} className="flex items-start gap-3 border-b border-divider/5 pb-3 last:border-0 last:pb-0">
                  <div className="mt-0.5 shrink-0">
                    {typeof item.isAvailable === 'boolean' ? (
                      item.isAvailable ? (
                        <CheckCircle className="w-5 h-5 text-accent" />
                      ) : (
                        <XCircle className="w-5 h-5 text-text/40" />
                      )
                    ) : (
                      <div className="w-2 h-2 rounded-full bg-accent mt-2"></div>
                    )}
                  </div>
                  <div className="text-[14px] md:text-[15px] leading-relaxed">
                    {typeof item.isAvailable === 'string' ? (
                      <p>
                        <span className="font-semibold text-primary">{item.feature}:</span> {item.isAvailable}
                      </p>
                    ) : (
                      <span className="text-text">{item.feature}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
