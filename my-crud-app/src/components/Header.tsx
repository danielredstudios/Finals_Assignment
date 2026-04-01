import Navbar from './Navbar'

function Header() {
  return (
    <header className="site-header">
      <div>
        <p className="site-title">My CRUD App</p>
        <p className="site-subtitle">ReactJS Personal Website Infrastructure</p>
      </div>
      <Navbar />
    </header>
  )
}

export default Header
