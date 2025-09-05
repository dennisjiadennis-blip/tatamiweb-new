import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // New Design System Colors
        background: '#F8F5F2',
        foreground: '#1a202c',
        primary: '#D97706',
        'primary-foreground': '#FFFFFF',
        muted: '#E2E8F0',
        card: '#FFFFFF',
        
        // Legacy Tatami Labs colors (for backward compatibility)
        'burnt-orange': '#D97706',
        'powder-blue': '#B0C4DE',
        'moss-green': '#7A8A6B',
        'linen': '#F5F0E8',
        'charcoal': '#1C1C1C',
        'border-primary': '#8B8B8B',
        
        // Additional utility colors
        border: '#E2E8F0',
        input: '#E2E8F0',
        ring: '#D97706',
        accent: '#F7FAFC',
        'accent-foreground': '#1a202c',
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
        serif: ['var(--font-lora)'],
        
        // Legacy support
        primary: ['var(--font-inter)', 'sans-serif'],
        decorative: ['var(--font-lora)', 'serif'],
      },
      fontSize: {
        // Responsive typography scale
        'xs': 'clamp(0.625rem, 0.8vw, 0.75rem)',
        'sm': 'clamp(0.75rem, 1vw, 0.875rem)',
        'base': 'clamp(0.875rem, 1.2vw, 1rem)',
        'lg': 'clamp(1rem, 1.4vw, 1.125rem)',
        'xl': 'clamp(1.125rem, 1.6vw, 1.25rem)',
        '2xl': 'clamp(1.25rem, 2vw, 1.5rem)',
        '3xl': 'clamp(1.5rem, 2.5vw, 2rem)',
        '4xl': 'clamp(2rem, 3.5vw, 3rem)',
      },
      spacing: {
        // Spacing system
        'gap-xs': '0.5rem',
        'gap-sm': '1rem',
        'gap-base': '1.25rem',
        'gap-lg': '2rem',
        'gap-xl': '3rem',
      },
      boxShadow: {
        // Shadow system
        'flat': '4px 4px 0px rgba(0, 0, 0, 0.2)',
        'soft': '0 12px 40px rgba(0, 0, 0, 0.15)',
        'deep': '0 20px 60px rgba(0, 0, 0, 0.25)',
      },
      borderRadius: {
        'tatami': '16px',
        'tatami-lg': '20px',
      },
      transitionDuration: {
        'tatami': '400ms',
      },
    },
  },
  plugins: [],
}

export default config