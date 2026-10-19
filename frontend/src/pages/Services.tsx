import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import ServiceCard from '../components/ServiceCard'
import { services } from '../data/services'

export default function Services() {
  return (
    <>
      <section className="page-hero page-shell"><p className="eyebrow eyebrow-gold">OUR SERVICES</p><h1>From first idea<br /><em>to final finish.</em></h1><p className="page-hero-copy">A connected team for the decisions, disciplines and details involved in shaping a place.</p></section>
      <section className="services-page-section"><div className="page-shell"><div className="service-grid service-grid-all">{services.map((service) => <ServiceCard key={service.slug} number={service.number} title={service.title} description={service.description} icon={service.icon} to={service.path} />)}</div></div></section>
      <section className="service-process page-shell"><div><p className="eyebrow eyebrow-gold">A GOOD PLACE TO START</p><h2>Tell us what<br /><em>you have in mind.</em></h2></div><div><p>Every project begins with a conversation. Share what you are planning and we can help clarify the right scope and next step.</p><Link to="/contact" className="button button-navy">Discuss a project <ArrowUpRight size={17} /></Link></div></section>
    </>
  )
}