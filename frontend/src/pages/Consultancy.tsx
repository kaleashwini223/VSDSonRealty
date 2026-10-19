import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { services } from '../data/services'

export default function Consultancy() {
  const coordination = services.find((service) => service.slug === 'engineering-coordination')!
  const consultancy = services.find((service) => service.slug === 'consultancy')!

  return (
    <>
      <section className="service-hero consultancy-hero"><div className="page-shell service-hero-content"><p className="eyebrow eyebrow-light">ENGINEERING & CONSTRUCTION CONSULTANCY</p><h1>Clear thinking<br />for complex work.</h1><p>Practical guidance and project coordination to help decisions move forward.</p><Link className="button button-gold" to="/contact">Discuss your project <ArrowUpRight size={17} /></Link></div></section>
      <section className="consultancy-grid page-shell">{[coordination, consultancy].map((service) => { const Icon = service.icon; return <article key={service.slug} className="consultancy-card"><Icon size={28} /><p className="eyebrow eyebrow-gold">{service.number} / VSD SON'S REALTY</p><h2>{service.title}</h2><p>{service.detail}</p><Link className="text-link" to="/contact">Talk with our team <ArrowUpRight size={16} /></Link></article> })}</section>
      <section className="consultancy-note"><div className="page-shell"><p className="eyebrow eyebrow-gold">PROJECT BY PROJECT</p><h2>Advice that respects<br /><em>your brief.</em></h2><p>Every project is different. We start with the requirements in front of us and shape our support around the decisions that need to be made.</p><Link className="button button-navy" to="/contact">Get in touch <ArrowUpRight size={17} /></Link></div></section>
    </>
  )
}