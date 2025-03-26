import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-antonio-navy py-10 text-white/80">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0">
            <a href="#home" className="text-lg font-semibold text-white">
              Antonio<span className="text-antonio-light-blue font-bold">.Terreno</span>
            </a>
          </div>
          
          <div className="flex items-center text-sm">
            <p>© {currentYear} Antonio Terreno. All rights reserved.</p>
          </div>
          
          <div className="mt-4 md:mt-0">
            <p className="text-sm flex items-center">
              Made with <Heart size={14} className="mx-1 text-antonio-light-blue" /> in London
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
