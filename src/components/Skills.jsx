import { useRef, useEffect, useState } from 'react'

export default function Skills({ sharedSkills, resumeBasicInfo }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const sectionName = resumeBasicInfo?.section_name?.skills || 'Skills'
  const icons = sharedSkills?.icons || []

  return (
    <section
      id="skills"
      className="py-20 px-4"
      style={{ background: 'var(--section-alt-bg)' }}
    >
      <div className="max-w-5xl mx-auto" ref={ref}>
        <h2 className="section-title" style={{ color: 'var(--section-alt-text)' }}>
          {sectionName}
        </h2>

        <div className="flex flex-wrap justify-center gap-5 mt-10">
          {icons.map((skill, i) => (
            <div
              key={`${skill.name}-${i}`}
              title={skill.alt || skill.name}
              className="flex flex-col items-center justify-center gap-1 cursor-default group"
              style={{
                background: 'rgba(255,255,255,0.12)',
                borderRadius: 12,
                padding: '12px 14px',
                minWidth: 72,
                backdropFilter: 'blur(4px)',
                border: '1px solid rgba(255,255,255,0.2)',
                transition: `opacity 0.4s ease ${i * 0.02}s, transform 0.4s ease ${i * 0.02}s, background 0.2s`,
                opacity: visible ? 1 : 0,
                transform: visible ? 'none' : 'translateY(20px)',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.25)' }}
              onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.12)' }}
            >
              <i
                className={skill.class}
                style={{ fontSize: '2.2rem', color: '#fff', display: 'block' }}
              />
              <span
                className="text-center font-medium text-white"
                style={{ fontSize: '0.6rem', maxWidth: 64, lineHeight: 1.3 }}
              >
                {skill.alt || skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
