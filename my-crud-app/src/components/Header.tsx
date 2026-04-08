import type { ChangeEvent } from 'react'
import Navbar from './Navbar'
import { useTheme, type ThemeName } from '../context/ThemeContext'

function Header() {
  const { theme, themes, setTheme } = useTheme()

  const handleThemeChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setTheme(event.target.value as ThemeName)
  }

  return (
    <header className="site-header">
      <div className="header-block">
        <div>
          <p className="site-title">My CRUD App</p>
          <p className="site-subtitle">ReactJS Personal Website Infrastructure</p>
        </div>
        <div className="theme-picker">
          <label htmlFor="theme-select">Theme</label>
          <select id="theme-select" value={theme} onChange={handleThemeChange}>
            {themes.map((themeOption) => (
              <option key={themeOption.value} value={themeOption.value}>
                {themeOption.label}
              </option>
            ))}
          </select>
        </div>
      </div>
      <Navbar />
    </header>
  )
}

export default Header
