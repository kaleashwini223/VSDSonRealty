import { ArrowUpRight, MessageCircle, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'
import { navigation, site } from '../data/site'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div>
          <p className="eyebrow">VSD SON'S REALTY</p>
          <h2>Building a legacy<br /><em>of trust.</em></h2>
        </div>
        <Link className="footer-cta" to="/contact">Discuss your project <ArrowUpRight size={18} /></Link>
      </div>
      <div className="footer-bottom">
        <Link to="/" className="footer-brand">{site.name}</Link>
        <nav className="footer-links" aria-label="Footer navigation">{navigation.map((item) => <Link key={item.to} to={item.to}>{item.label}</Link>)}</nav>
        <div className="footer-meta">
          <span>© {new Date().getFullYear()} {site.name}</span>
          {site.phoneHref && <a href={site.phoneHref} aria-label={`Call ${site.name}`}><Phone size={16} /></a>}
          {site.whatsappHref && <a href={site.whatsappHref} target="_blank" rel="noreferrer" aria-label="Message us on WhatsApp"><MessageCircle size={16} /></a>}
        </div>
      </div>
    </footer>
  )
}