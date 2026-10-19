import { useState } from 'react'
import { ArrowUpRight, Menu, Phone, X } from 'lucide-react'
import { Link, NavLink } from 'react-router-dom'
import { navigation, site } from '../data/site'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="site-header">
      <div className="nav-wrap">
        <Link to="/" className="brand" aria-label={`${site.name} home`} onClick={() => setMenuOpen(false)}>
          <img className="brand-logo" src="/vsd-logo.jpeg" alt="VSD Son's Realty — Building a legacy of trust" />
        </Link>
        <button className="menu-toggle" aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen} aria-controls="main-navigation" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
        <nav id="main-navigation" className={`main-nav${menuOpen ? ' is-open' : ''}`} aria-label="Main navigation">
          {navigation.map((link) => (
            <NavLink key={link.to} to={link.to} onClick={() => setMenuOpen(false)} className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>{link.label}</NavLink>
          ))}
          {site.phoneHref && <a className="nav-phone" href={site.phoneHref} aria-label={`Call ${site.phoneDisplay || site.name}`}><Phone size={16} /><span>{site.phoneDisplay || 'Call'}</span></a>}
          <Link to="/contact" className="nav-contact" onClick={() => setMenuOpen(false)}>Discuss a project <ArrowUpRight size={15} /></Link>
        </nav>
      </div>
    </header>
  )
}