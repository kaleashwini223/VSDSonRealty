import { ArrowRight, Compass, Handshake, Lightbulb } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function About() {
  return (
    <>
      <section className="page-hero page-shell"><p className="eyebrow eyebrow-gold">ABOUT US</p><h1>Building a legacy<br /><em>of trust.</em></h1><p className="page-hero-copy">We bring construction, design and project coordination together with a simple commitment: listen carefully, communicate clearly and take pride in the work.</p></section>
      <section className="about-feature"><div className="about-photo" role="img" aria-label="Contemporary architecture with natural stone and timber" /><div className="about-story"><p className="eyebrow eyebrow-gold">OUR POINT OF VIEW</p><h2>Make the process<br /><em>feel as considered as the result.</em></h2><p>VSD Son’s Realty works across construction, residential development, interiors, renovation and consultancy. We believe a good outcome starts with understanding the brief and being thoughtful about every decision along the way.</p><p>We keep the conversation practical and the work connected, so clients can make informed choices at each stage of their project.</p><Link to="/services" className="text-link">See how we can help <ArrowRight size={16} /></Link></div></section>
      <section className="values-section page-shell"><div className="section-heading"><div><p className="eyebrow eyebrow-gold">WHAT GUIDES US</p><h2>Trust in the<br /><em>details.</em></h2></div></div><div className="values-grid"><article><Handshake size={25} /><span>01 / RELATIONSHIPS</span><h3>Start by listening.</h3><p>Clear conversations help turn an initial idea into a shared understanding of the work.</p></article><article><Compass size={25} /><span>02 / CRAFT</span><h3>Consider every choice.</h3><p>Good coordination and attention to detail make the many parts of a project work together.</p></article><article><Lightbulb size={25} /><span>03 / CLARITY</span><h3>Keep decisions grounded.</h3><p>Practical information gives clients confidence to choose what fits their goals.</p></article></div></section>
      <section className="about-quote"><p>Building a legacy<br /><em>of trust.</em></p><span>VSD SON'S REALTY</span></section>
    </>
  )
}