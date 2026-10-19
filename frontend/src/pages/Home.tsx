import { ArrowDown, ArrowRight, ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import ProjectCard from '../components/ProjectCard'
import ServiceCard from '../components/ServiceCard'
import { featuredServices } from '../data/services'
import { projects } from '../data/projects'
import { site } from '../data/site'

export default function Home() {
  return (
    <>
      <section className="hero-home">
        <div className="hero-home-photo" role="img" aria-label="Modern architectural home framed by mature trees" />
        <div className="hero-home-shade" />
        <div className="hero-home-content page-shell">
          <p className="eyebrow eyebrow-light"><span /> CONSTRUCTION · INTERIORS · CONSULTANCY · Real Estate</p>
          <h1>Built with care.<br /><em>Made to last.</em></h1>
          <p className="hero-tagline">{site.tagline}</p>
          <div className="hero-actions"><Link className="button button-gold" to="/services">Explore our services <ArrowUpRight size={17} /></Link><Link className="button button-quiet" to="/projects">View projects <ArrowRight size={16} /></Link></div>
        </div>
        <a className="scroll-cue" href="#intro"><ArrowDown size={15} /> DISCOVER VSD SON'S REALTY</a>
        <span className="hero-caption">A more considered way to build.</span>
      </section>

      <section className="intro-section page-shell" id="intro">
        <div className="intro-kicker"><span className="eyebrow">OUR APPROACH</span><span className="gold-rule" /></div>
        <div className="intro-copy"><p className="eyebrow eyebrow-gold">{site.tagline.toUpperCase()}</p><h2>Good work starts<br />with <em>trust.</em></h2><p>Every project carries a vision, a set of decisions and the people who bring it to life. We bring these pieces together with care, clear coordination and attention to the details that matter.</p><Link className="text-link" to="/about">Get to know us <ArrowRight size={16} /></Link></div>
        <div className="intro-note"><span>01</span><p>Thoughtful planning.<br />Considered execution.</p></div>
      </section>

      <section className="services-section">
        <div className="page-shell">
          <div className="section-heading"><div><p className="eyebrow eyebrow-gold">WHAT WE DO</p><h2>One partner.<br /><em>Every detail.</em></h2></div><Link className="text-link" to="/services">All services <ArrowRight size={16} /></Link></div>
          <div className="service-grid">{featuredServices.map((service) => <ServiceCard key={service.slug} number={service.number} title={service.title} description={service.description} icon={service.icon} to={service.path} />)}</div>
          <Link to="/services" className="service-more">Explore all five services <ArrowRight size={15} /></Link>
        </div>
      </section>

      <section className="projects-section page-shell">
        <div className="section-heading"><div><p className="eyebrow eyebrow-gold">PROJECT GALLERY</p><h2>Spaces made<br /><em>with intention.</em></h2></div><Link className="text-link" to="/projects">Explore the gallery <ArrowRight size={16} /></Link></div>
        <p className="portfolio-note">Illustrative imagery shown. Verified project examples can be added to the gallery when approved content is available.</p>
        <div className="project-grid">{projects.slice(0, 3).map((project) => <ProjectCard key={project.slug} {...project} />)}</div>
      </section>

      <section className="home-contact">
        <div className="home-contact-photo" role="img" aria-label="Architectural interior with natural light" />
        <div className="home-contact-copy"><p className="eyebrow eyebrow-gold">START WITH A CONVERSATION</p><h2>Let’s talk about<br /><em>what you’re building.</em></h2><p>Tell us where you are in the process. We’ll help you find a practical next step.</p><Link to="/contact" className="button button-navy">Discuss your project <ArrowUpRight size={17} /></Link></div>
      </section>
    </>
  )
}