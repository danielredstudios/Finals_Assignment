import { NavLink } from 'react-router-dom'

const getNavLinkClass = ({ isActive }: { isActive: boolean }) =>
  isActive ? 'nav-link active' : 'nav-link'

function Navbar() {
  return (
    <nav className="navbar" aria-label="Primary">
      <NavLink to="/" end className={getNavLinkClass}>
        Home
      </NavLink>
      <NavLink to="/about" className={getNavLinkClass}>
        About
      </NavLink>
      <NavLink to="/contact" className={getNavLinkClass}>
        Contact
      </NavLink>
    </nav>
  )
}

export default Navbar
