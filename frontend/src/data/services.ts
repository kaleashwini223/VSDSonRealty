import { Building2, Compass, DraftingCompass, House, Ruler } from 'lucide-react'

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
  { slug: 'construction-contracting', number: '01', title: 'Construction and contracting', shortTitle: 'Construction and contracting', description: 'Coordinated construction delivery, from early planning through site execution and handover.', detail: 'From early planning through on-site coordination and handover, our contracting approach is grounded in clear scopes, practical decisions and consistent communication. Share your brief and we can discuss the right next step.', icon: Building2, path: '/residential-construction' },
  { slug: 'interior-design', number: '02', title: 'Interior design', shortTitle: 'Interior design', description: 'A connected path from interior concepts and material choices to considered spaces.', detail: 'We bring interior planning, material selections and execution together so the finished spaces feel considered as a whole. The scope is shaped to your project, from a focused refresh to a turnkey brief.', icon: DraftingCompass, path: '/interiors' },
  { slug: 'real-estate', number: '03', title: 'Real Estate', shortTitle: 'Real Estate', description: 'Property-focused support shaped around your goals and priorities.', detail: 'Tell us what you are looking for in a property or real estate opportunity. We can discuss your priorities and help identify a practical next step.', icon: House, path: '/contact' },
  { slug: 'management-consultancy', number: '04', title: 'Management consultancy', shortTitle: 'Management consultancy', description: 'Practical guidance to help clarify project decisions and priorities.', detail: 'Get an experienced sounding board for scope, sequencing, and delivery decisions. We help clarify the questions to ask and the trade-offs to consider, without adding unnecessary complexity.', icon: Compass, path: '/consultancy' },
  { slug: 'planning-and-design', number: '05', title: 'Planning and design', shortTitle: 'Planning and design', description: 'Planning and design guidance to bring your project brief into focus.', detail: 'Share your early ideas, site considerations, and priorities. We can help shape the questions and next steps for your planning and design brief.', icon: Ruler, path: '/contact' },
]

export const featuredServices = services.slice(0, 4)