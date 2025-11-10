import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const profileImgRef = useRef<HTMLImageElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!profileImgRef.current) return;
      
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      // Calculate percentage of mouse position
      const xPercent = (clientX / innerWidth - 0.5) * 10;
      const yPercent = (clientY / innerHeight - 0.5) * 10;
      
      // Apply slight 3D transform effect using CSS transform
      profileImgRef.current.style.transform = `perspective(1000px) rotateY(${xPercent}deg) rotateX(${-yPercent}deg) translateZ(0)`;
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 pb-16">
      <div className="container mx-auto px-6">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
          <div className="w-full lg:w-3/5 animate-fade-in">
            <h1 className="text-5xl lg:text-6xl font-bold text-antonio-navy mb-6 leading-tight">
              Engineering Executive<br />
              <span className="text-gradient">Building High-Performing Teams</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              20+ years' experience building scalable platforms and engineering functions from the ground up. 
              I translate best practices into faster delivery, higher quality, and resilient systems that drive business growth.
            </p>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-antonio-blue">$100M+</div>
                <div className="text-sm text-gray-600">Budget Managed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-antonio-blue">80K+</div>
                <div className="text-sm text-gray-600">Users Supported</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-antonio-blue">$30M+</div>
                <div className="text-sm text-gray-600">Annual Savings</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-antonio-blue">25%</div>
                <div className="text-sm text-gray-600">IRR Delivered</div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#experience" 
                className="px-8 py-3 bg-antonio-blue text-white rounded-lg font-medium transition-all hover:bg-antonio-navy hover:shadow-lg btn-shine"
              >
                Explore My Journey
              </a>
              <a 
                href="#contact"
                className="px-8 py-3 border border-antonio-blue text-antonio-blue rounded-lg font-medium transition-all hover:bg-antonio-blue/10"
              >
                Get in Touch
              </a>
            </div>
          </div>
          
          <div className="w-full lg:w-2/5 flex justify-center lg:justify-end animate-fade-in-delay-2">
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-antonio-blue to-antonio-light-blue rounded-2xl blur opacity-40 animate-pulse"></div>
              <div className="relative overflow-hidden rounded-2xl border border-white/40 bg-white/80 p-1.5 backdrop-blur-sm">
                <img 
                  ref={profileImgRef}
                  src="images/official-avatar-2025.jpg" 
                  alt="Antonio Terreno" 
                  className="w-64 md:w-80 h-auto rounded-xl shadow-xl transition-all duration-500"
                />
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#experience" className="block text-antonio-blue">
            <ChevronDown size={32} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;