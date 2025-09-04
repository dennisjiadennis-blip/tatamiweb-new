import React from 'react';

// =====================================================
// Tatami Labs - 主页 SVG 插图组件库
// =====================================================

/**
 * TatamiLogo - 品牌Logo组件
 * 融合传统榻榻米纹理与现代品牌标识
 */
export const TatamiLogo = ({ className, style, ...props }: React.SVGProps<SVGSVGElement>) => (
  <svg 
    viewBox="0 0 180 60" 
    xmlns="http://www.w3.org/2000/svg" 
    className={className}
    style={style} 
    {...props}
  >
    <defs>
      {/* 手绘纹理滤镜效果 */}
      <filter id="tatami-texture" x="-20%" y="-20%" width="140%" height="140%">
        <feTurbulence 
          type="fractalNoise" 
          baseFrequency="0.8" 
          numOctaves="3" 
          result="noise"
        />
        <feDisplacementMap 
          in="SourceGraphic" 
          in2="noise" 
          scale="2" 
          xChannelSelector="R" 
          yChannelSelector="G"
        />
      </filter>
    </defs>
    
    {/* 榻榻米方块图案 */}
    <g fill="currentColor" opacity="0.9">
      <rect x="8" y="15" width="28" height="28" rx="2" style={{ filter: 'url(#tatami-texture)' }} />
      <rect x="42" y="15" width="28" height="28" rx="2" style={{ filter: 'url(#tatami-texture)' }} />
      {/* 纹理线条 */}
      <line x1="22" y1="20" x2="22" y2="38" stroke="currentColor" strokeWidth="1" opacity="0.6" />
      <line x1="56" y1="20" x2="56" y2="38" stroke="currentColor" strokeWidth="1" opacity="0.6" />
    </g>
    
    {/* 品牌文字 */}
    <text 
      x="85" 
      y="38" 
      fontFamily="'Cormorant Garamond', serif" 
      fontSize="22" 
      fill="currentColor" 
      fontWeight="400"
      letterSpacing="1px"
    >
      Tatami Labs
    </text>
  </svg>
);

/**
 * Sneakers - 运动鞋组件
 * 代表行动和探索精神
 */
export const Sneakers = ({ className, style, ...props }: React.SVGProps<SVGSVGElement>) => (
  <svg 
    viewBox="0 0 120 80" 
    xmlns="http://www.w3.org/2000/svg" 
    className={className}
    style={style} 
    {...props}
  >
    {/* 鞋底 */}
    <path 
      d="M15 60 C 15 45, 35 35, 60 38 C 90 42, 105 52, 105 62 C 105 70, 95 72, 80 70 L 25 68 C 18 67, 15 65, 15 60 Z" 
      fill="currentColor" 
      opacity="0.8"
    />
    
    {/* 鞋面 */}
    <path 
      d="M20 60 C 20 50, 30 45, 45 45 L 85 45 C 95 45, 100 50, 100 55 L 100 62 L 20 62 Z" 
      fill="currentColor" 
      opacity="0.9"
    />
    
    {/* 鞋带 */}
    <g stroke="currentColor" strokeWidth="2" fill="none" opacity="0.7">
      <path d="M35 50 L 50 58 M 45 48 L 60 56" />
      <path d="M55 48 L 70 56 M 65 50 L 80 58" />
    </g>
    
    {/* 装饰孔 */}
    <g fill="currentColor" opacity="0.6">
      <circle cx="75" cy="52" r="2" />
      <circle cx="85" cy="52" r="2" />
    </g>
    
    {/* 鞋跟细节 */}
    <path 
      d="M15 62 L 25 64 L 25 68 L 15 66 Z" 
      fill="currentColor" 
      opacity="0.7"
    />
  </svg>
);

/**
 * GetaSandal - 日式木屐组件
 * 代表传统日本文化和匠人精神
 */
export const GetaSandal = ({ className, style, ...props }: React.SVGProps<SVGSVGElement>) => (
  <svg 
    viewBox="0 0 100 100" 
    xmlns="http://www.w3.org/2000/svg" 
    className={className}
    style={style} 
    {...props}
  >
    {/* 木屐底板 */}
    <ellipse 
      cx="50" 
      cy="70" 
      rx="35" 
      ry="12" 
      fill="currentColor" 
      opacity="0.9"
    />
    
    {/* 木屐底板纹理 */}
    <g stroke="currentColor" strokeWidth="1" opacity="0.4" fill="none">
      <path d="M20 70 Q 50 65, 80 70" />
      <path d="M22 75 Q 50 72, 78 75" />
    </g>
    
    {/* 前齿 */}
    <rect 
      x="35" 
      y="82" 
      width="8" 
      height="12" 
      rx="2" 
      fill="currentColor" 
      opacity="0.8"
    />
    
    {/* 后齿 */}
    <rect 
      x="57" 
      y="82" 
      width="8" 
      height="12" 
      rx="2" 
      fill="currentColor" 
      opacity="0.8"
    />
    
    {/* 绳带 */}
    <g stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.7">
      {/* 主绳 */}
      <path d="M50 65 L 50 45 Q 50 35, 42 35 Q 35 35, 35 42 Q 35 50, 42 50" />
      <path d="M50 65 L 50 45 Q 50 35, 58 35 Q 65 35, 65 42 Q 65 50, 58 50" />
      
      {/* 足趾环 */}
      <path d="M42 50 Q 50 45, 58 50" />
    </g>
    
    {/* 装饰纹路 */}
    <g stroke="currentColor" strokeWidth="0.5" opacity="0.3" fill="none">
      <circle cx="30" cy="70" r="3" />
      <circle cx="70" cy="70" r="3" />
    </g>
  </svg>
);

/**
 * SleepingFox - 睡眠狐狸组件
 * 代表宁静、智慧与内省
 */
export const SleepingFox = ({ className, style, ...props }: React.SVGProps<SVGSVGElement>) => (
  <svg 
    viewBox="0 0 120 80" 
    xmlns="http://www.w3.org/2000/svg" 
    className={className}
    style={style} 
    {...props}
  >
    {/* 狐狸身体 */}
    <ellipse 
      cx="60" 
      cy="55" 
      rx="45" 
      ry="18" 
      fill="currentColor" 
      opacity="0.9"
    />
    
    {/* 狐狸头部 */}
    <ellipse 
      cx="35" 
      cy="45" 
      rx="25" 
      ry="20" 
      fill="currentColor" 
      opacity="0.9"
    />
    
    {/* 狐狸耳朵 */}
    <g fill="currentColor" opacity="0.8">
      <path d="M25 35 Q 20 25, 15 30 Q 20 40, 25 35 Z" />
      <path d="M35 32 Q 30 22, 25 27 Q 30 37, 35 32 Z" />
    </g>
    
    {/* 狐狸尾巴 */}
    <path 
      d="M105 55 Q 115 45, 110 35 Q 105 25, 95 30 Q 90 40, 95 50 Q 100 55, 105 55 Z" 
      fill="currentColor" 
      opacity="0.85"
    />
    
    {/* 尾巴纹理 */}
    <g stroke="currentColor" strokeWidth="1" fill="none" opacity="0.4">
      <path d="M100 45 Q 105 40, 108 45" />
      <path d="M98 50 Q 103 45, 106 50" />
    </g>
    
    {/* 睡眠表情 */}
    <g stroke="currentColor" strokeWidth="2" fill="none" opacity="0.6">
      {/* 闭眼 */}
      <path d="M25 42 Q 30 40, 35 42" />
      <path d="M20 44 Q 25 42, 30 44" />
      
      {/* 鼻子 */}
      <circle cx="15" cy="48" r="1.5" fill="currentColor" opacity="0.7" />
    </g>
    
    {/* 睡眠 ZZZ */}
    <g fill="currentColor" opacity="0.4" fontSize="8" fontFamily="serif">
      <text x="45" y="25">z</text>
      <text x="52" y="20" fontSize="6">z</text>
      <text x="58" y="16" fontSize="4">z</text>
    </g>
    
    {/* 毛发纹理 */}
    <g stroke="currentColor" strokeWidth="0.5" opacity="0.3" fill="none">
      <path d="M40 40 Q 45 38, 50 40" />
      <path d="M50 58 Q 55 56, 60 58" />
      <path d="M70 58 Q 75 56, 80 58" />
    </g>
  </svg>
);