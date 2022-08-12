import { createContext, useContext, useEffect, useState } from 'react'

export const ThemeContext = createContext({})

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        setIsDark(
          document.documentElement.getAttribute('data-theme') === 'dark'
        )
      })
    }).observe(document.documentElement, {
      attributeFilter: ['data-theme'],
    })
  }, [])

  return (
    <ThemeContext.Provider value={{ isDark }}>{children}</ThemeContext.Provider>
  )
}

export const useTheme = () => {
  return useContext(ThemeContext)
}
