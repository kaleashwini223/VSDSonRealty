const phone = import.meta.env.VITE_CONTACT_PHONE?.replace(/[^\d+]/g, '')
const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER?.replace(/\D/g, '')

export const site = {
  name: "VSD Son's Realty",
  tagline: 'Building a legacy of trust',
  phoneDisplay: import.meta.env.VITE_CONTACT_PHONE_DISPLAY || '',
  phoneHref: phone ? `tel:${phone}` : undefined,
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