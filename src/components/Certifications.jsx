import { useRef, useEffect, useState } from 'react'

export default function Certifications({ resumeBasicInfo, resumeCertifications }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.2 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const sectionName = resumeBasicInfo?.section_name?.certifications || 'Certifications'
  const certs = resumeCertifications || []

  return (
    <section
      className="py-20 px-4"
      style={{ background: 'var(--section-alt-bg)' }}
    >
      <div className="max-w-4xl mx-auto" ref={ref}>
        <h2 className="section-title" style={{ color: 'var(--section-alt-text)' }}>
          {sectionName}
        </h2>

        <div className="flex flex-wrap justify-center gap-6 mt-10">
          {certs.map((cert, i) => (
            <div
              key={i}
              className="mac-window p-6 text-center"
              style={{
                minWidth: 260,
                maxWidth: 340,
                width: 300,
                opacity: visible ? 1 : 0,
                transform: visible ? 'none' : 'scale(0.9)',
                transition: `opacity 0.5s ease ${i * 0.1}s, transform 0.5s ease ${i * 0.1}s`,
              }}
            >
              <div className="text-4xl mb-3">🏅</div>
              <h3 className="font-bold text-base mb-1" style={{ color: 'var(--text-primary)' }}>
                {cert.title}
              </h3>
              <p className="text-sm" style={{ color: '#339acc' }}>{cert.body}</p>
              <p className="text-xs mt-1" style={{ color: 'var(--text-muted)' }}>
                Issued: {cert.date}
              </p>
              {cert.id && (
                <p className="text-xs mt-1" style={{ color: 'var(--text-muted)' }}>
                  ID: {cert.id}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
