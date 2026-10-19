export type ProjectCategory = 'Residential' | 'Interiors' | 'Renovation' | 'Construction'

export type Project = {
  slug: string
  name: string
  category: ProjectCategory
  image: string
  summary: string
  description: string
  imageAlt: string
}

// Illustrative portfolio placeholders, not claims about completed VSD projects.
export const projects: Project[] = [
  { slug: 'residential-home', name: 'Residential home', category: 'Residential', image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85', summary: 'A contemporary home shaped around light, proportion and everyday living.', description: 'Illustrative residential project imagery. Replace this entry with an approved project name, location, scope and photography before publishing it as completed company work.', imageAlt: 'Contemporary residence with a garden and generous glazing' },
  { slug: 'considered-interiors', name: 'Considered interiors', category: 'Interiors', image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85', summary: 'Warm materials and calm details bring a cohesive interior together.', description: 'Illustrative interior project imagery. Replace this entry with approved project details and photography before presenting it as a VSD commission.', imageAlt: 'Warm modern living room with natural materials' },
  { slug: 'thoughtful-renewal', name: 'Thoughtful renewal', category: 'Renovation', image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=85', summary: 'A refreshed living space balancing contemporary function with character.', description: 'Illustrative renovation project imagery. Replace this entry with approved project details and photography before presenting it as a VSD commission.', imageAlt: 'Renovated open-plan home with timber and stone finishes' },
  { slug: 'crafted-structure', name: 'Crafted structure', category: 'Construction', image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85', summary: 'Architectural lines and considered finishes in a modern built form.', description: 'Illustrative construction project imagery. Replace this entry with an approved project name, location, scope and photography before publishing it as completed company work.', imageAlt: 'Modern architecture with strong geometric lines' },
]

export const projectCategories = ['All', 'Residential', 'Interiors', 'Renovation', 'Construction'] as const