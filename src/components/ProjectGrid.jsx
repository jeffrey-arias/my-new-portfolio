import { useState, useRef, useEffect } from 'react'
import ProjectDetailsModal from './ProjectDetailsModal'

export default function ProjectGrid({ sectionName, projects = [] }) {
  const [selected, setSelected] = useState(null)
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

  return (
    <section className="py-20 px-4" style={{ background: 'var(--bg-secondary)' }} ref={ref}>
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title">{sectionName}</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {projects.map((project, i) => (
            <div
              key={project.title}
              className="project-card"
              onClick={() => setSelected(project)}
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'none' : 'translateY(20px)',
                transition: `opacity 0.5s ease ${i * 0.08}s, transform 0.5s ease ${i * 0.08}s`,
              }}
            >
              <div className="relative overflow-hidden" style={{ height: 180, background: '#000' }}>
                <img
                  src={`${import.meta.env.BASE_URL}${project.images?.[0]}`}
                  alt={project.title}
                  style={{ width: '100%', height: '100%', objectFit: 'contain', transition: 'transform 0.3s' }}
                  onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.05)' }}
                  onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)' }}
                />
                <div
                  className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity"
                  style={{ background: 'rgba(51,154,204,0.85)' }}
                >
                  <span className="text-white font-semibold text-lg">View Details →</span>
                </div>
              </div>

              <div className="p-4">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="font-bold text-base truncate" style={{ color: 'var(--text-primary)' }}>
                    {project.title}
                  </h3>
                  <span
                    className="text-xs font-medium ml-2 shrink-0"
                    style={{ color: '#339acc' }}
                  >
                    {project.startDate}
                  </span>
                </div>
                <p className="text-sm line-clamp-2" style={{ color: 'var(--text-secondary)' }}>
                  {project.description}
                </p>
                {/* Tech pills */}
                <div className="flex flex-wrap gap-1 mt-2">
                  {project.technologies?.slice(0, 4).map(t => (
                    <span key={t.name} className="badge" style={{ fontSize: '0.65rem' }}>{t.name}</span>
                  ))}
                  {project.technologies?.length > 4 && (
                    <span className="badge" style={{ fontSize: '0.65rem' }}>+{project.technologies.length - 4}</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <ProjectDetailsModal
        show={!!selected}
        onHide={() => setSelected(null)}
        data={selected}
      />
    </section>
  )
}
