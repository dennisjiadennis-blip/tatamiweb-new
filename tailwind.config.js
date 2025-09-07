module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'background': '#F5F0E8',       // 米白/亚麻色背景 (Off-White/Linen)
        'foreground': '#2D323A',       // 深灰蓝文字/前景
        'primary': '#D97D54',          // 主色调 - 焦糖橙 (Burnt Orange)
        'primary-foreground': '#FFFFFF', // 主色调上的文字
        'card': '#FFFFFF',             // 卡片背景
        'muted-moss': '#7A8A6B',        // 柔和苔藓绿
        'powder-blue': '#B0C4DE',       // 粉末蓝
        'border-subtle': '#D1D5DB',    // 精致的边框颜色
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'sans-serif'],
        serif: ['var(--font-serif)', 'serif'],
      },
      boxShadow: {
        'japandi': '0 10px 15px -3px rgba(0, 0, 0, 0.05), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'soft': '0 10px 25px -5px rgba(0, 0, 0, 0.07), 0 5px 10px -5px rgba(0, 0, 0, 0.04)',
      }
    },
  },
  plugins: [],
}
