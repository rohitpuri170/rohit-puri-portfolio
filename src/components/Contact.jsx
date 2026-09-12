import { useState } from 'react'
import { Mail, Send } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './icons'
import { site } from '../data/config'

const initialForm = { name: '', email: '', subject: '', message: '' }

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | success | error

  const validate = () => {
    const next = {}
    if (!form.name.trim()) next.name = 'Please enter your name.'
    if (!form.email.trim()) {
      next.email = 'Please enter your email.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      next.email = 'Enter a valid email address.'
    }
    if (!form.subject.trim()) next.subject = 'Please add a subject.'
    if (!form.message.trim()) next.message = 'Please write a message.'
    return next
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
    if (errors[name]) setErrors((er) => ({ ...er, [name]: undefined }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const next = validate()
    setErrors(next)
    if (Object.keys(next).length > 0) {
      setStatus('error')
      return
    }

    // No backend is wired up yet — this opens a pre-filled email as the
    // default handoff. Replace with an API call once a form endpoint exists.
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`)
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(form.subject)}&body=${body}`

    setStatus('success')
    setForm(initialForm)
  }

  return (
    <section id="contact" className="scroll-mt-20 py-24 md:py-32 border-t border-edge">
      <div className="container-content grid lg:grid-cols-[0.9fr_1.1fr] gap-14">
        <div>
          <h2 className="text-3xl md:text-[2.5rem] leading-tight font-semibold text-ink tracking-tight">
            Let's build something together
          </h2>
          <p className="mt-4 text-muted max-w-md leading-relaxed">
            Have a project, internship opportunity, or software idea? I'd love to
            hear about it.
          </p>

          <div className="mt-8 space-y-4">
            <a
              href={`mailto:${site.email}`}
              className="flex items-center gap-3 text-sm text-ink hover:text-amber transition-colors duration-200"
            >
              <Mail size={18} className="text-dim" />
              {site.email}
            </a>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 text-sm text-ink hover:text-amber transition-colors duration-200"
            >
              <LinkedinIcon size={18} className="text-dim" />
              LinkedIn
            </a>
            <a
              href={site.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 text-sm text-ink hover:text-amber transition-colors duration-200"
            >
              <GithubIcon size={18} className="text-dim" />
              GitHub
            </a>
          </div>
        </div>

        <form onSubmit={handleSubmit} noValidate className="space-y-5">
          <div className="grid sm:grid-cols-2 gap-5">
            <Field
              label="Name"
              name="name"
              value={form.name}
              onChange={handleChange}
              error={errors.name}
              autoComplete="name"
            />
            <Field
              label="Email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              error={errors.email}
              autoComplete="email"
            />
          </div>

          <Field
            label="Subject"
            name="subject"
            value={form.subject}
            onChange={handleChange}
            error={errors.subject}
          />

          <div>
            <label htmlFor="message" className="block text-sm text-muted mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={form.message}
              onChange={handleChange}
              aria-invalid={Boolean(errors.message)}
              aria-describedby={errors.message ? 'message-error' : undefined}
              className={`w-full rounded-md bg-surface border px-4 py-3 text-sm text-ink placeholder:text-dim focus:outline-none focus:border-amber transition-colors duration-200 resize-none ${
                errors.message ? 'border-red-500/60' : 'border-edge2'
              }`}
              placeholder="Tell me a bit about what you're building or looking for."
            />
            {errors.message && (
              <p id="message-error" className="mt-1.5 text-xs text-red-400">
                {errors.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="inline-flex items-center gap-2 rounded-sm bg-amber px-5 py-3 text-sm font-medium text-bg hover:bg-amber-soft transition-colors duration-200"
          >
            <Send size={16} />
            Send message
          </button>

          {status === 'success' && (
            <p role="status" className="text-sm text-amber">
              Your email client should have opened with your message ready to send.
            </p>
          )}
          {status === 'error' && Object.keys(errors).length > 0 && (
            <p role="alert" className="text-sm text-red-400">
              Please fix the highlighted fields and try again.
            </p>
          )}
        </form>
      </div>
    </section>
  )
}

function Field({ label, name, value, onChange, error, type = 'text', autoComplete }) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm text-muted mb-2">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        autoComplete={autoComplete}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${name}-error` : undefined}
        className={`w-full rounded-md bg-surface border px-4 py-3 text-sm text-ink placeholder:text-dim focus:outline-none focus:border-amber transition-colors duration-200 ${
          error ? 'border-red-500/60' : 'border-edge2'
        }`}
      />
      {error && (
        <p id={`${name}-error`} className="mt-1.5 text-xs text-red-400">
          {error}
        </p>
      )}
    </div>
  )
}
