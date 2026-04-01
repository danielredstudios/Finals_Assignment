import {
  createContext,
  type Dispatch,
  type ReactNode,
  type SetStateAction,
  useContext,
  useMemo,
  useState,
} from 'react'

export type ThemeName = 'midnight' | 'emerald' | 'solarized'

type ThemeMeta = {
  label: string
  value: ThemeName
}

type ThemeContextValue = {
  theme: ThemeName
  themes: ThemeMeta[]
  setTheme: Dispatch<SetStateAction<ThemeName>>
}

const themes: ThemeMeta[] = [
  { label: 'Midnight', value: 'midnight' },
  { label: 'Emerald', value: 'emerald' },
  { label: 'Solarized', value: 'solarized' },
]

const ThemeContext = createContext<ThemeContextValue | null>(null)

type ThemeProviderProps = {
  children: ReactNode
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState<ThemeName>('midnight')

  const value = useMemo(
    () => ({
      theme,
      themes,
      setTheme,
    }),
    [theme],
  )

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  const context = useContext(ThemeContext)

  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }

  return context
}
