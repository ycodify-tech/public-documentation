import * as ThemeContext from '@/contexts/ThemeContext'

export function Logomark(props) {
  return <img src="/images/logomark.png" {...props} />
}

export function Logo(props) {
  const { isDark } = ThemeContext.useTheme()

  return (
    <img
      src={`/images/${isDark ? 'logoTextLight' : 'logoTextDark'}.png`}
      {...props}
    />
  )
}
