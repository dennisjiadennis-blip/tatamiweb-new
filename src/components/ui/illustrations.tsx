'use client'

interface IconProps {
  size?: number
  className?: string
}

export function SneakersIcon({ size = 48, className = '' }: IconProps) {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
        <path 
          d="M8 36c0-4 2-8 6-10l12-6c4-2 8-2 12 0l12 6c4 2 6 6 6 10v8c0 4-2 8-6 10l-12 6c-4 2-8 2-12 0l-12-6c-4-2-6-6-6-10v-8z" 
          fill="currentColor" 
          fillOpacity="0.8"
        />
        <path 
          d="M16 32c2-2 6-4 10-4s8 2 10 4l6 4c2 2 2 4 0 6l-6 4c-2 2-6 4-10 4s-8-2-10-4l-6-4c-2-2-2-4 0-6l6-4z" 
          fill="currentColor" 
          fillOpacity="0.6"
        />
        <circle cx="28" cy="36" r="4" fill="currentColor" fillOpacity="0.9"/>
        <circle cx="36" cy="36" r="4" fill="currentColor" fillOpacity="0.9"/>
      </svg>
    </div>
  )
}

export function GetaSandalsIcon({ size = 48, className = '' }: IconProps) {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
        <ellipse 
          cx="32" 
          cy="40" 
          rx="20" 
          ry="8" 
          fill="currentColor" 
          fillOpacity="0.8"
        />
        <rect 
          x="30" 
          y="20" 
          width="4" 
          height="16" 
          rx="2" 
          fill="currentColor" 
          fillOpacity="0.9"
        />
        <ellipse 
          cx="32" 
          cy="20" 
          rx="6" 
          ry="3" 
          fill="currentColor" 
          fillOpacity="0.7"
        />
        <path 
          d="M20 38c-2 0-4 2-4 4s2 4 4 4h24c2 0 4-2 4-4s-2-4-4-4H20z" 
          fill="currentColor" 
          fillOpacity="0.6"
        />
      </svg>
    </div>
  )
}

export function SleepingFoxIcon({ size = 48, className = '' }: IconProps) {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
        <ellipse 
          cx="32" 
          cy="42" 
          rx="16" 
          ry="12" 
          fill="currentColor" 
          fillOpacity="0.8"
        />
        <ellipse 
          cx="28" 
          cy="32" 
          rx="12" 
          ry="10" 
          fill="currentColor" 
          fillOpacity="0.9"
        />
        <ellipse 
          cx="24" 
          cy="28" 
          rx="3" 
          ry="5" 
          fill="currentColor" 
          fillOpacity="0.8"
          transform="rotate(-20 24 28)"
        />
        <ellipse 
          cx="32" 
          cy="26" 
          rx="3" 
          ry="5" 
          fill="currentColor" 
          fillOpacity="0.8"
          transform="rotate(-10 32 26)"
        />
        <ellipse 
          cx="44" 
          cy="38" 
          rx="8" 
          ry="4" 
          fill="currentColor" 
          fillOpacity="0.7"
          transform="rotate(15 44 38)"
        />
        <circle cx="22" cy="30" r="1" fill="currentColor" fillOpacity="0.9"/>
        <circle cx="30" cy="30" r="1" fill="currentColor" fillOpacity="0.9"/>
      </svg>
    </div>
  )
}

export function TatamiLabsLogo({ size = 64, className = '' }: IconProps) {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <svg width={size * 1.5} height={size} viewBox="0 0 96 64" fill="none">
        {/* 三个方形块 - 代表榻榻米 */}
        <rect 
          x="4" 
          y="16" 
          width="12" 
          height="12" 
          rx="2" 
          fill="#D97D54"
          fillOpacity="0.9"
        />
        <rect 
          x="20" 
          y="16" 
          width="12" 
          height="12" 
          rx="2" 
          fill="#B0C4DE"
          fillOpacity="0.9"
        />
        <rect 
          x="36" 
          y="16" 
          width="12" 
          height="12" 
          rx="2" 
          fill="#7A8A6B"
          fillOpacity="0.9"
        />
        
        {/* 简约文字 */}
        <text 
          x="56" 
          y="20" 
          fontSize="8" 
          fill="currentColor" 
          fontFamily="serif"
          fontWeight="300"
        >
          TATAMI
        </text>
        <text 
          x="56" 
          y="28" 
          fontSize="6" 
          fill="currentColor" 
          fontFamily="serif"
          fontWeight="300"
          fillOpacity="0.8"
        >
          LABS
        </text>
      </svg>
    </div>
  )
}