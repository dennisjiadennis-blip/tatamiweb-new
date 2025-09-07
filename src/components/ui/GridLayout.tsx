import { BaseComponentProps } from '@/types'

interface GridLayoutProps extends BaseComponentProps {
  /** 基础列数（小屏幕） */
  cols?: number
  /** 中等屏幕列数 */
  mdCols?: number
  /** 大屏幕列数 */
  lgCols?: number
  /** 网格间距 */
  gap?: number
  /** 顶部外边距 */
  marginTop?: number
}

export default function GridLayout({
  cols = 1,
  mdCols,
  lgCols,
  gap = 6,
  marginTop,
  className = '',
  children
}: GridLayoutProps) {
  const gridClasses = `
    grid 
    grid-cols-${cols} 
    ${mdCols ? `md:grid-cols-${mdCols}` : ''} 
    ${lgCols ? `lg:grid-cols-${lgCols}` : ''} 
    gap-${gap}
    ${marginTop ? `mt-${marginTop}` : ''}
    ${className}
  `.trim().replace(/\s+/g, ' ')

  return (
    <div className={gridClasses}>
      {children}
    </div>
  )
}