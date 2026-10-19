import { ArrowRight, ArrowUpRight, Check } from 'lucide-react'
import { Link } from 'react-router-dom'
import ServiceCard from '../components/ServiceCard'
import { services } from '../data/services'

type ServiceLandingProps = { slug: string; eyebrow: string; headline: string; image: string; imageAlt: string }

export default function ServiceLanding({ slug, eyebrow, headline, image, imageAlt }: ServiceLandingProps) {
  const service = services.find((item) => item.slug === slug)!
  const related = services.filter((item) => item.slug !== slug).slice(0, 3)
  const Icon = service.icon

  return (
    <>
      <section className="service-hero" style={{ backgroundImage: `linear-gradient(90deg, rgba(20,43,70,.87), rgba(20,43,70,.28)), url('${image}')` }} role="img" aria-label={imageAlt}>
        <div className="page-shell service-hero-content"><p className="eyebrow eyebrow-light">{eyebrow}</p><h1>{headline}</h1><p>{service.description}</p><Link className="button button-gold" to="/contact">Discuss this service <ArrowUpRight size={17} /></Link></div>
      </section>
      <section className="service-detail page-shell"><div className="service-detail-icon"><Icon size={27} strokeWidth={1.4} /></div><div><p className="eyebrow eyebrow-gold">A CLEARER WAY FORWARD</p><h2>{service.shortTitle}<br /><em>with care.</em></h2><p className="service-detail-copy">{service.detail}</p><ul className="check-list"><li><Check size={16} /> A conversation around your brief and priorities</li><li><Check size={16} /> A clear view of scope and practical next steps</li><li><Check size={16} /> Coordination shaped around the needs of your project</li></ul><Link className="button button-navy" to="/contact">Start a conversation <ArrowUpRight size={17} /></Link></div></section>
      <section className="related-services"><div className="page-shell"><div className="section-heading"><div><p className="eyebrow eyebrow-gold">CONNECTED EXPERTISE</p><h2>More ways<br /><em>we can help.</em></h2></div><Link className="text-link" to="/services">All services <ArrowRight size={16} /></Link></div><div className="service-grid related-grid">{related.map((item) => <ServiceCard key={item.slug} number={item.number} title={item.title} description={item.description} icon={item.icon} to={item.path} />)}</div></div></section>
    </>
  )
}