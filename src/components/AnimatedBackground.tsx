import React from 'react';

const AnimatedBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {/* Top left gradient */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-antonio-blue/10 rounded-full filter blur-[100px] opacity-70 animate-float" />
      
      {/* Bottom right gradient */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-antonio-light-blue/10 rounded-full filter blur-[100px] opacity-60 animate-float" style={{ animationDelay: '2s' }} />
      
      {/* Middle accent */}
      <div className="absolute top-1/3 -right-24 w-[300px] h-[300px] bg-antonio-blue/5 rounded-full filter blur-[60px] opacity-60 animate-float" style={{ animationDelay: '3s' }} />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMTIxMjEiIGZpbGwtb3BhY2l0eT0iMC4wMSI+PHBhdGggZD0iTTM2IDM0aDJ2MmgtMnpNNDAgMzJoMnYyaC0yek00MCAyOGgydjJoLTJ6TTM2IDI2aDJ2MmgtMnpNMzYgMzBoMnYyaC0yek00NCAzMGgydjJoLTJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-50" />
    </div>
  );
};

export default AnimatedBackground;
