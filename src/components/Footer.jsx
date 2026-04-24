export default function Footer({ sharedBasicInfo }) {
  const social = sharedBasicInfo?.social || []
  const name = sharedBasicInfo?.name || 'Jeffrey Arias'
  const base = import.meta.env.BASE_URL

  return (
    <footer
      className="py-12 px-4 text-center"
      style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--border-color)' }}
    >
      <div className="max-w-2xl mx-auto">
        {/* Social icons */}
        <div className="flex justify-center gap-6 mb-6">
          {social.map(s => (
            <a
              key={s.name}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl transition-all duration-200 hover:scale-125 hover:-translate-y-1 inline-block"
              style={{ color: 'var(--text-primary)' }}
              title={s.name}
            >
              <i className={s.class} />
            </a>
          ))}
        </div>

        {/* Resume download */}
        <a
          href={`${base}docs/JeffreyEArias_resume.pdf`}
          download
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full font-normal text-white text-sm mb-6 transition-all hover:scale-105 hover:shadow-lg"
          style={{ background: '#339acc' }}
        >
          📄 Download Resume
        </a>

        {/* Copyright */}
        <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
          © {new Date().getFullYear()} {name} — Built with React + Vite + Tailwind
        </p>
      </div>
    </footer>
  )
}
