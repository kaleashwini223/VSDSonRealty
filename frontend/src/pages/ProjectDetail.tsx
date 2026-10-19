import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import { projects } from '../data/projects'

export default function ProjectDetail() {
  const { slug } = useParams()
  const project = projects.find((item) => item.slug === slug)

  if (!project) return <section className="page-hero page-shell"><p className="eyebrow eyebrow-gold">PROJECT NOT FOUND</p><h1>This page<br /><em>is unavailable.</em></h1><Link to="/projects" className="text-link"><ArrowLeft size={16} /> Back to projects</Link></section>

  return <><section className="project-detail-hero"><img src={project.image} alt={project.imageAlt} /><div className="project-detail-overlay"><p className="eyebrow eyebrow-light">{project.category} / ILLUSTRATIVE PORTFOLIO ENTRY</p><h1>{project.name}</h1></div></section><section className="project-detail-copy page-shell"><div><p className="eyebrow eyebrow-gold">PROJECT OVERVIEW</p><h2>{project.summary}</h2></div><div><p>{project.description}</p><Link to="/contact" className="button button-navy">Discuss a similar project <ArrowUpRight size={17} /></Link></div><Link className="text-link project-back" to="/projects"><ArrowLeft size={16} /> Back to all projects</Link></section></>
}