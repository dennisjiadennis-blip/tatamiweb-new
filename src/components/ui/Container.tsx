import { BaseComponentProps } from '@/types'

interface ContainerProps extends BaseComponentProps {
  /** 最大宽度变体 */
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '4xl' | '7xl'
  /** 是否添加内边距 */
  padding?: boolean
}

const maxWidthClasses = {
  sm: 'max-w-sm',
  md: 'max-w-md', 
  lg: 'max-w-lg',
  xl: 'max-w-xl',
  '2xl': 'max-w-2xl',
  '4xl': 'max-w-4xl',
  '7xl': 'max-w-7xl'
}

export default function Container({ 
  maxWidth = '7xl',
  padding = true,
  className = '',
  children 
}: ContainerProps) {
  const containerClasses = `
    ${maxWidthClasses[maxWidth]} 
    mx-auto 
    ${padding ? 'px-4' : ''}
    ${className}
  `.trim().replace(/\s+/g, ' ')

  return (
    <div className={containerClasses}>
      {children}
    </div>
  )
}