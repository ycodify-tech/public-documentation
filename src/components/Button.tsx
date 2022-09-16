import Link from 'next/link'
import clsx from 'clsx'

const styles = {
  primary:
    'rounded-full bg-sky-300 py-2 px-4 text-sm font-semibold text-slate-900 hover:bg-sky-200 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300/50 active:bg-sky-500',
  secondary:
    'rounded-full bg-slate-800 py-2 px-4 text-sm font-medium text-white hover:bg-slate-700 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/50 active:text-slate-400',
}

type Button = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: string
  className?: string
  href: string
  children: React.ReactNode
}

export function Button({
  variant = 'primary',
  className,
  href,
  children,
  ...props
}: Button) {
  className = clsx(styles[variant], className)

  return href ? (
    <Link
      href={href}
      className={className}
      target="_blank"
      rel="noreferrer noopener"
    >{children}</Link>
  ) : (
    <button className={className} {...props}>{children}</button>
  )
}
