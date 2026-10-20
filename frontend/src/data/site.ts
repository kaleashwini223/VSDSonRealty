const phone = import.meta.env.VITE_CONTACT_PHONE?.replace(/[^\d+]/g, '')
const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER?.replace(/\D/g, '')
const contacts = [
  { name: 'Vaibhav Sarjerao Dudhane', phoneDisplay: '9619774787', phoneHref: 'tel:9619774787' },
  { name: 'Vikas Sarjerao Dudhane', phoneDisplay: '9702832089', phoneHref: 'tel:9702832089' },
]

export const site = {
  name: "VSD Son's Group",
  tagline: 'Building a legacy of trust',
  contacts,
  email: 'Vsdsonsgroup@gmail.com',
  phoneDisplay: import.meta.env.VITE_CONTACT_PHONE_DISPLAY || contacts[0].phoneDisplay,
  phoneHref: phone ? `tel:${phone}` : contacts[0].phoneHref,
  whatsappHref: whatsappNumber
    ? `https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Hello, I would like to enquire about your services.')}`
    : undefined,
  mapEmbedUrl: import.meta.env.VITE_MAPS_EMBED_URL || 'https://www.google.com/maps?q=VSD+Sons+Realty&output=embed',
}

export const navigation = [
  { label: 'About us', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Projects', to: '/projects' },
  { label: 'Contact', to: '/contact' },
]