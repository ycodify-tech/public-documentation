import * as ThemeContext from '@/contexts/ThemeContext'

export function Logomark(props: React.ImgHTMLAttributes<HTMLImageElement>) {
  const { isDark } = ThemeContext.useTheme()

  return (
    <img
      src={`/images/${isDark ? 'logomarkTextLight' : 'logomarkTextDark'}.png`}
      {...props}
    />
  )
}

export function Logo(props: React.ImgHTMLAttributes<HTMLImageElement>) {
  const { isDark } = ThemeContext.useTheme()

  return (
    <img
      src={`/images/${isDark ? 'logoTextLight' : 'logoTextDark'}.png`}
      {...props}
    />
  )
}
