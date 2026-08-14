import type { ButtonHTMLAttributes } from 'react'
import type { ReactNode } from 'react'

type Variant = 'outline' | 'solid'

const variantClass: Record<Variant, string> = {
  outline:
    'flex size-[44px] items-center justify-center rounded-22 border border-white-16 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cloud',
  solid:
    'flex size-[48px] items-center justify-center rounded-24 bg-cloud text-ebony shadow-fab focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cloud',
}

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant
  children: ReactNode
  'aria-label': string
}

export function IconButton({ variant = 'outline', className, children, ...rest }: IconButtonProps) {
  return (
    <button
      type="button"
      className={className ? `${variantClass[variant]} ${className}` : variantClass[variant]}
      {...rest}
    >
      {children}
    </button>
  )
}
