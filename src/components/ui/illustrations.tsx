import React from 'react';

export const ShodoTitle = ({ className }: { className?: string }) => (
  <h1
    className={`font-shodo text-6xl text-japandi-white lg:text-8xl ${className}`}
    style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.3)' }}
  >
    Tatami Labs
  </h1>
);

export const TatamiLogo = ({ style, ...props }: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 160 40" xmlns="http://www.w3.org/2000/svg" style={style} {...props}>
      <defs>
        <filter id="brush-stroke" x="-20%" y="-20%" width="140%" height="140%">
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" result="turbulence"/>
          <feDisplacementMap in="SourceGraphic" in2="turbulence" scale="3" xChannelSelector="R" yChannelSelector="G" result="displacement"/>
        </filter>
      </defs>
      <g fill="currentColor">
        <rect x="5" y="5" width="30" height="30" style={{ filter: 'url(#brush-stroke)' }} />
        <rect x="40" y="5" width="30" height="30" style={{ filter: 'url(#brush-stroke)' }} />
      </g>
      <text x="80" y="28" fontFamily="'Helvetica Neue', sans-serif" fontSize="20" fill="currentColor" fontWeight="300">
        Tatami Labs
      </text>
    </svg>
);


export const GetaSandal = ({ style, ...props }: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" style={style} {...props}>
    <path d="M10 70 Q 50 50, 90 70 L 90 80 Q 50 95, 10 80 Z" fill="currentColor"/>
    <path d="M30 75 L 30 90 M 70 75 L 70 90" strokeWidth="4"/>
    <path d="M40 70 Q 50 60, 60 70" strokeWidth="3"/>
  </svg>
);

export const Sneakers = ({ style, ...props }: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" style={style} {...props}>
    <path d="M10 80 C 10 60, 30 50, 50 55 C 80 60, 90 70, 90 80 Z" fill="currentColor" />
    <path d="M30 65 L 45 75 M 40 63 L 55 73" />
    <path d="M60 58 A 10 10 0 0 1 70 58" strokeWidth="3"/>
  </svg>
);

export const SleepingFox = ({ style, ...props }: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" style={style} {...props}>
    <path d="M30 70 C 10 70, 20 40, 50 40 C 80 40, 90 70, 70 70 C 60 70, 60 75, 50 75 C 40 75, 40 70, 30 70 Z" fill="currentColor" />
    <path d="M70 70 Q 85 60, 90 40" strokeWidth="3"/>
    <path d="M45 55 L 55 55 M 65 55 L 75 55" strokeWidth="1.5"/>
  </svg>
);