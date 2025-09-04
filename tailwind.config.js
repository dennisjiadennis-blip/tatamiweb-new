module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'japandi-background': '#2D323A',
        'japandi-orange': '#D97D54',
        'japandi-blue': '#B0C4DE',
        'japandi-green': '#7A8A6B',
        'japandi-white': '#F5F0E8',
        'japandi-charcoal': '#1C1C1C', // Near-black for text
      },
      fontFamily: {
        serif: ['var(--font-cormorant-garamond)', 'serif'],
        shodo: ['var(--font-ma-shan-zheng)', 'cursive'],
      },
      boxShadow: {
        'japandi': '0 10px 15px -3px rgba(0, 0, 0, 0.05), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      }
    },
  },
  plugins: [],
}
