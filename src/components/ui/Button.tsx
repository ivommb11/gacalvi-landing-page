import type { ReactNode } from 'react'

const buttonClass =
  'inline-flex items-center justify-center gap-[22px] rounded-2 bg-cloud px-[42px] py-[23px] font-bold text-[17px] uppercase tracking-[3.4px] text-ebony shadow-button focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cloud'

const buttonSmallClass =
  'inline-flex items-center justify-center rounded-2 bg-cloud px-[8px] py-[8px] font-bold text-[9px] uppercase tracking-[0.9px] text-ebony shadow-button focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cloud'

type BaseProps = {
  children: ReactNode
  className?: string
  size?: 'default' | 'small'
}

type ButtonAsAnchor = BaseProps & {
  href: string
  onClick?: React.MouseEventHandler<HTMLAnchorElement>
  'aria-label'?: string
  target?: string
  rel?: string
}

type ButtonAsButton = BaseProps & {
  href?: undefined
  type?: 'button' | 'submit' | 'reset'
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  'aria-label'?: string
  disabled?: boolean
}

export type ButtonProps = ButtonAsAnchor | ButtonAsButton

export function Button(props: ButtonProps) {
  const baseClass = props.size === 'small' ? buttonSmallClass : buttonClass
  if (props.href !== undefined) {
    const { href, className, children, ...rest } = props
    return (
      <a href={href} className={className ? `${baseClass} ${className}` : baseClass} {...rest}>
        {children}
      </a>
    )
  }
  const { className, children, ...rest } = props
  return (
    <button
      type={rest.type ?? 'button'}
      className={className ? `${baseClass} ${className}` : baseClass}
      {...rest}
    >
      {children}
    </button>
  )
}
