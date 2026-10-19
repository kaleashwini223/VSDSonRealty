import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import ResidentialConstruction from './pages/ResidentialConstruction'
import Interiors from './pages/Interiors'
import Renovation from './pages/Renovation'
import Consultancy from './pages/Consultancy'
import ProjectDetail from './pages/ProjectDetail'
import { projects } from './data/projects'

const pageMeta: Record<string, { title: string; description: string }> = {
  '/': { title: "VSD Son's Realty | Building a legacy of trust", description: "VSD Son's Realty brings construction, interiors, renovation and consultancy together to help shape thoughtful places." },
  '/about': { title: "About Us | VSD Son's Realty", description: "Learn about the approach and values behind VSD Son's Realty." },
  '/services': { title: "Construction & Realty Services | VSD Son's Realty", description: 'Explore construction contracting, residential development, interiors, renovation, engineering coordination and construction consultancy.' },
  '/residential-construction': { title: "Residential Construction | VSD Son's Realty", description: 'Thoughtful residential building and development, shaped around your brief.' },
  '/interiors': { title: "Interior Design & Turnkey Interiors | VSD Son's Realty", description: 'Interior design planning and turnkey interior execution, shaped around your space.' },
  '/renovation': { title: "Renovation & Remodeling | VSD Son's Realty", description: 'Renovation and remodeling guidance for spaces ready for a thoughtful next chapter.' },
  '/consultancy': { title: "Construction Consultancy | VSD Son's Realty", description: 'Construction consultancy, engineering inputs and project coordination.' },
  '/projects': { title: "Projects | VSD Son's Realty", description: 'Explore illustrative residential, interiors, renovation and construction portfolio examples.' },
  '/contact': { title: "Contact | VSD Son's Realty", description: 'Contact VSD Son\'s Realty to discuss a construction, residential, interior or renovation project.' },
}

function RouteEffects() {
  const { pathname } = useLocation()

  useEffect(() => {
    const projectSlug = pathname.startsWith('/projects/') ? pathname.split('/').pop() : undefined
    const project = projects.find((item) => item.slug === projectSlug)
    const meta = pageMeta[pathname] ?? (project
      ? { title: `${project.name} | VSD Son's Realty`, description: project.summary }
      : pathname.startsWith('/projects/')
        ? { title: `Project | VSD Son's Realty`, description: 'Illustrative project portfolio entry from VSD Son\'s Realty.' }
      : pageMeta['/'])
    document.title = meta.title
    document.querySelector('meta[name="description"]')?.setAttribute('content', meta.description)
    window.scrollTo({ top: 0, behavior: 'auto' })
  }, [pathname])

  return null
}

export default function App() {
  return (
    <>
      <RouteEffects />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/residential-construction" element={<ResidentialConstruction />} />
          <Route path="/interiors" element={<Interiors />} />
          <Route path="/renovation" element={<Renovation />} />
          <Route path="/consultancy" element={<Consultancy />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:slug" element={<ProjectDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}