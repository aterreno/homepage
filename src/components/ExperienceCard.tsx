import React, { useState } from 'react';
import { ChevronRight, ExternalLink } from 'lucide-react';

interface ExperienceCardProps {
  title: string;
  company: string;
  period: string;
  description: string;
  logoUrl: string;
  delay: number;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ 
  title, 
  company, 
  period, 
  description, 
  logoUrl,
  delay
}) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const animationDelayClass = `animate-fade-in-delay-${delay}`;
  
  return (
    <div 
      className={`opacity-0 ${animationDelayClass} timeline-item`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative group">
        <div className="flex flex-col md:flex-row md:items-start gap-4 p-5 glass-card rounded-xl transition-all duration-300 hover:shadow-xl">
          <div className="shrink-0 w-16 h-16 bg-white/90 rounded-lg p-2 flex items-center justify-center shadow-sm">
            {logoUrl ? (
              <img src={logoUrl} alt={`${company} logo`} className="max-w-full max-h-full object-contain" />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-antonio-blue/10 rounded-md text-antonio-blue font-bold text-xl">
                {company.charAt(0)}
              </div>
            )}
          </div>
          
          <div className="flex-1">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
              <h3 className="text-xl font-semibold text-antonio-navy">{title}</h3>
              <span className="text-sm font-medium text-gray-500">{period}</span>
            </div>
            
            <div className="mb-2 inline-flex items-center text-antonio-blue">
              <span className="font-medium">{company}</span>
              <ChevronRight size={16} className={`ml-1 transition-transform duration-300 ${isHovered ? 'translate-x-1' : ''}`} />
            </div>
            
            <p className="text-gray-700">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;