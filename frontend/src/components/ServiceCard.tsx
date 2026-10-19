import type { LucideIcon } from 'lucide-react'
import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'

type ServiceCardProps = {
  number: string
  title: string
  description: string
  icon: LucideIcon
  to: string
}

export default function ServiceCard({ number, title, description, icon: Icon, to }: ServiceCardProps) {
  return (
    <Link className="service-card" to={to}>
      <div className="service-card-top"><span>{number}</span><Icon size={23} strokeWidth={1.5} /></div>
      <h3>{title}</h3>
      <p>{description}</p>
      <span className="service-arrow" aria-hidden="true"><ArrowUpRight size={17} /></span>
    </Link>
  )
}