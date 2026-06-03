import React from 'react';
import { Activity } from 'lucide-react';

interface Symptom {
  title: string;
  description?: string;
  icon?: React.ReactNode;
}

interface SymptomGridProps {
  symptoms: Symptom[];
  title?: string;
}

export default function SymptomGrid({ symptoms, title }: SymptomGridProps) {
  return (
    <div className="w-full">
      {title && (
        <h3 className="text-[24px] md:text-[28px] font-bold text-primary mb-[30px] leading-tight">
          {title}
        </h3>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {symptoms.map((symptom, idx) => (
          <div 
            key={idx} 
            className="bg-white p-5 rounded-[16px] border border-divider/10 shadow-sm flex items-start gap-4 hover:border-accent hover:bg-secondary/10 transition-colors duration-300"
          >
            <div className="w-10 h-10 bg-accent/15 text-accent rounded-full flex items-center justify-center shrink-0">
              {symptom.icon || <Activity className="w-5 h-5" />}
            </div>
            <div>
              <h4 className="font-bold text-primary text-[16px] leading-snug mb-1">
                {symptom.title}
              </h4>
              {symptom.description && (
                <p className="text-text text-[13px] leading-relaxed">
                  {symptom.description}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
