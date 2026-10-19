import { Building2, Compass, DraftingCompass, Hammer, House, Ruler } from 'lucide-react'

export type Service = {
  slug: string
  number: string
  title: string
  shortTitle: string
  description: string
  detail: string
  icon: typeof Building2
  path: string
}

export const services: Service[] = [
  { slug: 'general-construction', number: '01', title: 'General Construction Contracting', shortTitle: 'General contracting', description: 'Coordinated construction delivery with clear communication from planning through handover.', detail: 'From early planning through on-site coordination and handover, our contracting approach is grounded in clear scopes, practical decisions and consistent communication. Share your brief and we can discuss the right next step.', icon: Building2, path: '/services' },
  { slug: 'residential-construction', number: '02', title: 'Residential Building & Development', shortTitle: 'Residential construction', description: 'Thoughtful homes shaped around the people who will live in them.', detail: 'Residential building is personal. We work to understand how you want to live, then coordinate the design and construction process around your priorities, budget and site requirements.', icon: House, path: '/residential-construction' },
  { slug: 'interiors', number: '03', title: 'Interior Design & Turnkey Interiors', shortTitle: 'Interiors', description: 'A connected path from interior concept and material choices to finished spaces.', detail: 'We bring interior planning, material selections and execution together so the finished spaces feel considered as a whole. The scope is shaped to your project, from a focused refresh to a turnkey brief.', icon: DraftingCompass, path: '/interiors' },
  { slug: 'renovation', number: '04', title: 'Renovation & Remodeling', shortTitle: 'Renovation', description: 'Make an existing space work better, with care for what is already there.', detail: 'Renovation starts with understanding the existing building and the changes that matter most. We help define a practical scope, coordinate the work and keep decisions moving as the space takes shape.', icon: Hammer, path: '/renovation' },
  { slug: 'engineering-coordination', number: '05', title: 'Engineering & Project Coordination', shortTitle: 'Engineering coordination', description: 'Design, technical inputs and site activity brought into a clearer project rhythm.', detail: 'Well-coordinated projects depend on timely decisions between disciplines. We support the flow of engineering inputs, schedules and site communication to help teams stay aligned.', icon: Ruler, path: '/consultancy' },
  { slug: 'consultancy', number: '06', title: 'Construction Consultancy', shortTitle: 'Construction consultancy', description: 'Practical guidance to help you make informed choices before and during a build.', detail: 'Get an experienced sounding board for scope, sequencing, materials and delivery decisions. We help clarify the questions to ask and the trade-offs to consider, without adding unnecessary complexity.', icon: Compass, path: '/consultancy' },
]

export const featuredServices = services.slice(0, 4)