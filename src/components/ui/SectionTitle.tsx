import { BaseComponentProps } from '@/types'

interface SectionTitleProps extends BaseComponentProps {
  /** 主标题文本 */
  title: string
  /** 副标题/描述文本，可选 */
  subtitle?: string
  /** 标题大小变体 */
  size?: 'sm' | 'md' | 'lg' | 'xl'
  /** 文本对齐方式 */
  align?: 'left' | 'center' | 'right'
}

const sizeClasses = {
  sm: 'text-2xl',
  md: 'text-3xl',
  lg: 'text-4xl', 
  xl: 'text-5xl'
}

const alignClasses = {
  left: 'text-left',
  center: 'text-center',
  right: 'text-right'
}

export default function SectionTitle({
  title,
  subtitle,
  size = 'md',
  align = 'center',
  className = '',
  children
}: SectionTitleProps) {
  const titleClasses = `font-serif ${sizeClasses[size]} ${alignClasses[align]} text-foreground mb-4`
  const subtitleClasses = `${alignClasses[align]} text-foreground/70 text-lg max-w-2xl ${align === 'center' ? 'mx-auto' : ''}`

  return (
    <div className={className}>
      <h2 className={titleClasses}>
        {title}
      </h2>
      {subtitle && (
        <p className={subtitleClasses}>
          {subtitle}
        </p>
      )}
      {children}
    </div>
  )
}