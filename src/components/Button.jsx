import Link from 'next/link'
import clsx from 'clsx'

const variantStyles = {
  success: 'bg-success text-white hover:bg-success-dark active:bg-success-dark',
  primary: 'bg-primary text-white hover:bg-primary-dark active:bg-primary-dark',
}

export function Button({ variant = 'primary', className, ...props }) {
  className = clsx(
    'inline-flex items-center font-bold gap-2 justify-center rounded-full py-2 px-6 text-sm outline-offset-2 transition ease-in-out active:scale-95',
    variantStyles[variant],
    className,
  )

  return typeof props.href === 'undefined' ? (
    <button className={className} {...props} />
  ) : (
    <Link className={className} {...props} />
  )
}
