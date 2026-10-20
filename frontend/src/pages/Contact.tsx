import { useState } from 'react'
import type { FormEvent } from 'react'
import { ArrowUpRight, Check, Mail, MessageCircle, Phone } from 'lucide-react'
import { site } from '../data/site'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      <section className="page-hero page-shell contact-page-hero"><p className="eyebrow eyebrow-gold">CONTACT</p><h1>Let’s start with<br /><em>a conversation.</em></h1><p className="page-hero-copy">Tell us what you are planning and we will help you find the right next step.</p></section>
      <section className="contact-layout page-shell"><div className="contact-details"><p className="eyebrow eyebrow-gold">GET IN TOUCH</p><h2>We’re ready<br />to listen.</h2><p>Call either of our contacts or email us using the details below.</p>{site.contacts.map((contact) => <a key={contact.phoneHref} href={contact.phoneHref}><Phone size={18} /><span><strong>{contact.name}</strong><br />{contact.phoneDisplay}</span></a>)}<a href={`mailto:${site.email}`}><Mail size={18} /> {site.email}</a>{site.whatsappHref && <a href={site.whatsappHref} target="_blank" rel="noreferrer"><MessageCircle size={18} /> WhatsApp enquiry</a>}{/* <span><MapPin size={18} /> Office location map placeholder</span><div className="map-frame"><iframe src={site.mapEmbedUrl} title="Google Maps location search for VSD Son's Realty" loading="lazy" referrerPolicy="no-referrer-when-downgrade" /></div> */}</div>
        <form className="contact-form" onSubmit={handleSubmit}>
          {submitted ? <div className="form-success" role="status"><span><Check size={22} /></span><h2>Email sent successfully.. </h2><button type="button" className="text-link" onClick={() => setSubmitted(false)}>Prepare another enquiry <ArrowUpRight size={16} /></button></div> : <>
            <p className="eyebrow eyebrow-gold">PROJECT ENQUIRY</p><div className="form-row"><label>Your name<input name="name" autoComplete="name" required placeholder="Name" /></label><label>Email address<input name="email" autoComplete="email" type="email" required placeholder="you@example.com" /></label></div>
            <label>Service of interest<select name="interest" defaultValue=""><option value="" disabled>Select a service</option><option>Design and Construction</option><option>Interior design</option><option>Real Estate</option><option>Management consultancy</option></select></label>
            <label>Tell us about your project<textarea name="message" rows={5} required placeholder="A few details about your plans, timing or questions" /></label>
            <p className="form-demo-note">Email sending will be connected later. For now, please use the contact details listed here.</p>
            <button className="button button-navy" type="submit">Submit enquiry <ArrowUpRight size={17} /></button>
          </>}
        </form>
      </section>
    </>
  )
}