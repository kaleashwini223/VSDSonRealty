import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { Project } from '../data/projects'

export default function ProjectCard({ slug, name, category, image, imageAlt, summary }: Project) {
  return (
    <Link className="project-card" to={`/projects/${slug}`}>
      <div className="project-image-wrap">
        <img className="project-image" src={image} alt={imageAlt} loading="lazy" />
        <span className="project-type">{category}</span>
        <span className="project-open" aria-hidden="true"><ArrowUpRight size={18} /></span>
      </div>
      <div className="project-info"><h3>{name}</h3><p>{summary}</p><span className="project-placeholder-note">Illustrative portfolio entry</span></div>
    </Link>
  )
}