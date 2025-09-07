// Tatami Labs Icon System - Matching Design Style

interface IconProps {
  className?: string
  size?: number
}

// Shoe Icon - From design reference
export function ShoeIcon({ className = "", size = 24 }: IconProps) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 64 64" 
      fill="none" 
      className={className}
    >
      <path
        d="M12 40c0-4 4-8 8-8h20c4 0 8 4 8 8v4c0 2-1 4-3 4H15c-2 0-3-2-3-4v-4z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M16 32c2-4 6-8 12-8s10 4 12 8"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="24" cy="36" r="2" fill="white" />
      <circle cx="32" cy="36" r="2" fill="white" />
    </svg>
  )
}

// Fox Icon - From design reference
export function FoxIcon({ className = "", size = 24 }: IconProps) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 64 64" 
      fill="none" 
      className={className}
    >
      <ellipse cx="32" cy="42" rx="16" ry="12" fill="#E67E22" />
      <ellipse cx="32" cy="35" rx="12" ry="10" fill="#F39C12" />
      <path d="M20 25l8 12-4 6z" fill="#E67E22" />
      <path d="M44 25l-8 12 4 6z" fill="#E67E22" />
      <circle cx="28" cy="32" r="2" fill="#2C3E50" />
      <circle cx="36" cy="32" r="2" fill="#2C3E50" />
      <path d="M30 38c1 1 3 1 4 0" stroke="#2C3E50" strokeWidth="2" strokeLinecap="round" />
      <ellipse cx="32" cy="45" rx="6" ry="4" fill="white" />
    </svg>
  )
}

// Traditional Hat Icon
export function HatIcon({ className = "", size = 24 }: IconProps) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 64 64" 
      fill="none" 
      className={className}
    >
      <ellipse cx="32" cy="45" rx="20" ry="6" fill="currentColor" opacity="0.6" />
      <path
        d="M16 40c0-8 7.2-14.4 16-14.4s16 6.4 16 14.4c0 2-1 4-3 4H19c-2 0-3-2-3-4z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <rect x="26" y="20" width="12" height="8" rx="2" fill="currentColor" />
    </svg>
  )
}

// Book/Stories Icon
export function BookIcon({ className = "", size = 24 }: IconProps) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 64 64" 
      fill="none" 
      className={className}
    >
      <rect x="16" y="12" width="28" height="36" rx="2" fill="currentColor" stroke="currentColor" strokeWidth="2" />
      <rect x="18" y="14" width="24" height="32" fill="white" opacity="0.9" />
      <line x1="22" y1="22" x2="38" y2="22" stroke="currentColor" strokeWidth="1.5" opacity="0.6" />
      <line x1="22" y1="28" x2="36" y2="28" stroke="currentColor" strokeWidth="1.5" opacity="0.6" />
      <line x1="22" y1="34" x2="34" y2="34" stroke="currentColor" strokeWidth="1.5" opacity="0.6" />
      <path d="M18 48c0-2 1-4 3-4h18c2 0 3 2 3 4v2H18v-2z" fill="currentColor" />
    </svg>
  )
}

// Arrow Icon
export function ArrowIcon({ className = "", size = 24, direction = "right" }: IconProps & { direction?: "up" | "down" | "left" | "right" }) {
  const rotations = {
    up: "-90",
    down: "90", 
    left: "180",
    right: "0"
  }
  
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      className={className}
      style={{ transform: `rotate(${rotations[direction]}deg)` }}
    >
      <path 
        d="M5 12h14m-7-7l7 7-7 7" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </svg>
  )
}

// Tatami Logo - Realistic stacked tatami mats
export function TatamiLogo({ className = "", size = 24 }: IconProps) {
  return (
    <svg 
      width={size} 
      height={size * 0.6} 
      viewBox="0 0 80 48" 
      fill="none" 
      className={className}
    >
      {/* Bottom mat - slightly visible */}
      <rect x="4" y="32" width="68" height="12" rx="2" fill="currentColor" opacity="0.3" />
      <rect x="6" y="34" width="64" height="8" fill="white" opacity="0.1" />
      
      {/* Middle mat */}
      <rect x="2" y="22" width="72" height="14" rx="2" fill="currentColor" opacity="0.7" />
      <rect x="4" y="24" width="68" height="10" fill="white" opacity="0.15" />
      <line x1="38" y1="24" x2="38" y2="34" stroke="currentColor" strokeWidth="1" opacity="0.3" />
      
      {/* Top mat */}
      <rect x="0" y="12" width="76" height="16" rx="3" fill="currentColor" />
      <rect x="2" y="14" width="72" height="12" fill="white" opacity="0.2" />
      <line x1="25" y1="14" x2="25" y2="26" stroke="currentColor" strokeWidth="1" opacity="0.4" />
      <line x1="51" y1="14" x2="51" y2="26" stroke="currentColor" strokeWidth="1" opacity="0.4" />
      
      {/* Traditional binding pattern */}
      <circle cx="13" cy="20" r="1.5" fill="currentColor" opacity="0.6" />
      <circle cx="38" cy="20" r="1.5" fill="currentColor" opacity="0.6" />
      <circle cx="63" cy="20" r="1.5" fill="currentColor" opacity="0.6" />
    </svg>
  )
}

// Plus Icon
export function PlusIcon({ className = "", size = 24 }: IconProps) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      className={className}
    >
      <path 
        d="M12 5v14m-7-7h14" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </svg>
  )
}

// Menu Icon
export function MenuIcon({ className = "", size = 24 }: IconProps) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      className={className}
    >
      <path 
        d="M3 12h18M3 6h18M3 18h18" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </svg>
  )
}

// Quote Icon
export function QuoteIcon({ className = "", size = 24 }: IconProps) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      className={className}
    >
      <path 
        d="M10 8c-1 0-2 1-2 2v4c0 1 1 2 2 2h2c1 0 2-1 2-2v-2c0-1-1-2-2-2h-2c0-1 0-1 0-2zM19 8c-1 0-2 1-2 2v4c0 1 1 2 2 2h2c1 0 2-1 2-2v-2c0-1-1-2-2-2h-2c0-1 0-1 0-2z" 
        fill="currentColor" 
      />
    </svg>
  )
}

// TATAMI LABS Text Logo - Custom SVG Typography
export function TatamiTextLogo({ className = "", size = 120 }: IconProps) {
  return (
    <svg 
      width={size} 
      height={size * 0.25} 
      viewBox="0 0 240 60" 
      fill="none" 
      className={className}
    >
      <defs>
        <style>
          {`
            .tatami-text { 
              font-family: 'Playfair Display', serif;
              font-weight: 500;
              letter-spacing: 0.1em;
            }
          `}
        </style>
      </defs>
      
      {/* TATAMI */}
      <text x="10" y="35" className="tatami-text" fill="currentColor" fontSize="28">
        TATAMI
      </text>
      
      {/* LABS */}
      <text x="10" y="55" className="tatami-text" fill="currentColor" fontSize="18" opacity="0.8">
        LABS
      </text>
      
      {/* Decorative underline with tatami pattern */}
      <rect x="10" y="42" width="140" height="2" fill="currentColor" opacity="0.3" />
      <rect x="15" y="44" width="8" height="1" fill="currentColor" opacity="0.2" />
      <rect x="28" y="44" width="8" height="1" fill="currentColor" opacity="0.2" />
      <rect x="41" y="44" width="8" height="1" fill="currentColor" opacity="0.2" />
      <rect x="54" y="44" width="8" height="1" fill="currentColor" opacity="0.2" />
    </svg>
  )
}