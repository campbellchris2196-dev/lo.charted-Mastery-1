import { useEffect, useState } from "react";

const AnimatedChart = () => {
  const [pathLength, setPathLength] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setPathLength(1000), 100);
    return () => clearTimeout(timer);
  }, []);

  // Generate smooth chart points
  const generateChartPath = () => {
    const points = [];
    const width = 1200;
    const height = 600;
    const segments = 20;
    
    let y = height * 0.6;
    
    for (let i = 0; i <= segments; i++) {
      const x = (i / segments) * width;
      // Trending upward with some volatility
      const trend = -i * 8;
      const volatility = Math.sin(i * 0.8) * 40 + Math.cos(i * 1.5) * 20;
      y = Math.max(100, Math.min(height - 100, height * 0.6 + trend + volatility));
      points.push(`${i === 0 ? 'M' : 'L'} ${x} ${y}`);
    }
    
    return points.join(' ');
  };

  const chartPath = generateChartPath();

  return (
    <svg 
      viewBox="0 0 1200 600" 
      className="w-full h-full"
      preserveAspectRatio="xMidYMid slice"
    >
      {/* Grid lines */}
      {[...Array(10)].map((_, i) => (
        <line
          key={`h-${i}`}
          x1="0"
          y1={i * 60}
          x2="1200"
          y2={i * 60}
          stroke="hsl(45 100% 55% / 0.05)"
          strokeWidth="1"
        />
      ))}
      {[...Array(20)].map((_, i) => (
        <line
          key={`v-${i}`}
          x1={i * 60}
          y1="0"
          x2={i * 60}
          y2="600"
          stroke="hsl(45 100% 55% / 0.05)"
          strokeWidth="1"
        />
      ))}
      
      {/* Gradient definition */}
      <defs>
        <linearGradient id="chartGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="hsl(142 76% 45%)" stopOpacity="0.3" />
          <stop offset="100%" stopColor="hsl(45 100% 55%)" stopOpacity="0.8" />
        </linearGradient>
        <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="hsl(45 100% 55%)" stopOpacity="0.2" />
          <stop offset="100%" stopColor="hsl(45 100% 55%)" stopOpacity="0" />
        </linearGradient>
      </defs>
      
      {/* Area fill */}
      <path
        d={`${chartPath} L 1200 600 L 0 600 Z`}
        fill="url(#areaGradient)"
        className="animate-fade-in"
      />
      
      {/* Chart line */}
      <path
        d={chartPath}
        fill="none"
        stroke="url(#chartGradient)"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{
          strokeDasharray: 1000,
          strokeDashoffset: 1000 - pathLength,
          transition: "stroke-dashoffset 3s ease-out"
        }}
      />
      
      {/* Candles */}
      {[...Array(15)].map((_, i) => {
        const x = 80 + i * 75;
        const isUp = Math.random() > 0.35;
        const height = 30 + Math.random() * 50;
        const wickHeight = height * 0.3;
        const baseY = 200 + Math.sin(i * 0.5) * 80;
        
        return (
          <g key={i} className="animate-fade-in" style={{ animationDelay: `${i * 0.1}s` }}>
            {/* Wick */}
            <line
              x1={x}
              y1={baseY - wickHeight}
              x2={x}
              y2={baseY + height + wickHeight}
              stroke={isUp ? "hsl(142 76% 45%)" : "hsl(0 84% 60%)"}
              strokeWidth="2"
              opacity="0.6"
            />
            {/* Body */}
            <rect
              x={x - 8}
              y={baseY}
              width="16"
              height={height}
              fill={isUp ? "hsl(142 76% 45%)" : "hsl(0 84% 60%)"}
              rx="2"
              opacity="0.8"
            />
          </g>
        );
      })}
    </svg>
  );
};

export default AnimatedChart;
