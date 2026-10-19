import { useState } from 'react'
import ProjectCard from '../components/ProjectCard'
import { projectCategories, projects } from '../data/projects'

export default function Projects() {
  const [category, setCategory] = useState<(typeof projectCategories)[number]>('All')
  const visibleProjects = category === 'All' ? projects : projects.filter((project) => project.category === category)

  return (
    <>
      <section className="page-hero page-shell"><p className="eyebrow eyebrow-gold">PROJECT GALLERY</p><h1>Considered work.<br /><em>Thoughtful places.</em></h1><p className="page-hero-copy">Explore illustrative architecture and interior imagery. Verified project details can be added as approved portfolio content becomes available.</p></section>
      <section className="projects-page-section page-shell"><div className="project-filters" role="group" aria-label="Filter projects by category">{projectCategories.map((item) => <button key={item} type="button" aria-pressed={category === item} className={category === item ? 'filter-button active' : 'filter-button'} onClick={() => setCategory(item)}>{item}</button>)}</div><div className="project-grid project-grid-page">{visibleProjects.map((project) => <ProjectCard key={project.slug} {...project} />)}</div><p className="portfolio-note portfolio-note-bottom">Portfolio titles and images on this page are illustrative placeholders, not confirmed VSD project claims.</p></section>
    </>
  )
}