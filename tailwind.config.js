/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Tatami Labs Japandi Color System
        background: '#2D323A',
        'burnt-orange': '#D97D54',
        'powder-blue': '#B0C4DE',
        'moss-green': '#7A8A6B',
        'linen': '#F5F0E8',
        'charcoal': '#1C1C1C',
        'border-primary': '#8B8B8B',
        
        // Legacy support (backwards compatibility)
        'japandi-background': '#2D323A',
        'japandi-orange': '#D97D54',
        'japandi-blue': '#B0C4DE',
        'japandi-green': '#7A8A6B',
        'japandi-white': '#F5F0E8',
        'japandi-charcoal': '#1C1C1C',
      },
      fontFamily: {
        // Primary fonts using CSS variables
        primary: ['var(--font-cormorant-garamond)', 'serif'],
        decorative: ['var(--font-ma-shan-zheng)', 'cursive'],
        
        // Legacy support
        serif: ['var(--font-cormorant-garamond)', 'serif'],
        shodo: ['var(--font-ma-shan-zheng)', 'cursive'],
      },
      fontSize: {
        // Responsive typography scale
        'xs': 'var(--font-size-xs)',
        'sm': 'var(--font-size-sm)',
        'base': 'var(--font-size-base)',
        'lg': 'var(--font-size-lg)',
        'xl': 'var(--font-size-xl)',
        '2xl': 'var(--font-size-2xl)',
        '3xl': 'var(--font-size-3xl)',
        '4xl': 'var(--font-size-4xl)',
      },
      spacing: {
        // Tatami spacing system
        'gap-xs': 'var(--gap-xs)',
        'gap-sm': 'var(--gap-sm)',
        'gap-base': 'var(--gap-base)',
        'gap-lg': 'var(--gap-lg)',
        'gap-xl': 'var(--gap-xl)',
      },
      boxShadow: {
        // Shadow system
        'flat': 'var(--shadow-flat)',
        'soft': 'var(--shadow-soft)',
        'deep': 'var(--shadow-deep)',
        
        // Legacy support
        'japandi': '0 10px 15px -3px rgba(0, 0, 0, 0.05), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      },
      gridTemplateColumns: {
        // Tatami grid system
        'tatami': 'repeat(12, 1fr)',
        '12': 'repeat(12, minmax(0, 1fr))',
      },
      gridTemplateRows: {
        'tatami': 'repeat(8, 1fr)',
        '8': 'repeat(8, minmax(0, 1fr))',
      },
      gridColumn: {
        'span-13': 'span 13 / span 13',
      },
      gridColumnStart: {
        '13': '13',
        '14': '14',
      },
      gridColumnEnd: {
        '13': '13',
        '14': '14',
      },
      gridRowStart: {
        '8': '8',
        '9': '9',
      },
      gridRowEnd: {
        '8': '8',
        '9': '9',
      },
      gap: {
        'tatami': 'var(--gap-base)', // 20px primary gap
      },
      borderRadius: {
        'tatami': '16px',
        'tatami-lg': '20px',
      },
      transitionDuration: {
        'tatami': '400ms',
      },
      letterSpacing: {
        'brand': '3px',
      },
      lineHeight: {
        'compact': '1.1',
        'comfortable': '1.4',
        'relaxed': '1.6',
      },
    },
  },
  plugins: [],
}
