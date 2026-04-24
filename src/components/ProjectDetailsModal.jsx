import { useEffect } from 'react'
import ImageSlider from './ImageSlider'

export default function ProjectDetailsModal({ show, onHide, data }) {
  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onHide() }
    if (show) document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [show, onHide])

  if (!show || !data) return null

  const { title, description, role, url, images = [], technologies = [] } = data

  return (
    <div className="modal-overlay" onClick={e => { if (e.target === e.currentTarget) onHide() }}>
      <div className="modal-content">
        {/* Mac titlebar */}
        <div
          className="flex items-center justify-between px-5 py-3 sticky top-0 z-10"
          style={{
            background: 'var(--bg-secondary)',
            borderBottom: '1px solid var(--border-color)',
            borderRadius: '16px 16px 0 0',
          }}
        >
          <div className="flex gap-2">
            <button
              onClick={onHide}
              className="mac-btn mac-btn-red flex items-center justify-center text-xs font-bold"
              style={{ fontSize: 10, lineHeight: 1 }}
              aria-label="Close"
            >
              ✕
            </button>
            <div className="mac-btn mac-btn-yellow" />
            <div className="mac-btn mac-btn-green" />
          </div>
          <h3 className="font-semibold text-base truncate flex-1 text-center pr-8" style={{ color: 'var(--text-primary)' }}>
            {title}
          </h3>
        </div>

        <div className="p-6">
          {/* Image slider */}
          {images.length > 0 && (
            <div className="mb-6">
              <ImageSlider images={images} />
            </div>
          )}

          {/* Title + URL */}
          <h2 className="text-2xl font-bold mb-2" style={{ color: 'var(--text-primary)' }}>
            {title}
            {url && (
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-normal ml-3 underline"
                style={{ color: '#339acc' }}
              >
                🔗 {url}
              </a>
            )}
          </h2>

          {/* Description & Role */}
          <p className="mb-1 text-sm" style={{ color: 'var(--text-secondary)', whiteSpace: 'pre-wrap' }}>
            {description}
          </p>
          {role && (
            <p className="mb-4 text-sm font-medium" style={{ color: '#339acc' }}>
              Role: {role}
            </p>
          )}

          {/* Tech icons */}
          {technologies.length > 0 && (
            <div className="mt-4">
              <p className="text-xs uppercase tracking-widest mb-3 font-semibold" style={{ color: 'var(--text-muted)' }}>
                Technologies
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                {technologies.map((t, i) => (
                  <div key={i} className="flex flex-col items-center gap-1 min-w-[50px]">
                    <i className={t.class} style={{ fontSize: '2.2rem', color: 'var(--text-primary)' }} />
                    <span className="text-xs text-center" style={{ color: 'var(--text-muted)' }}>{t.name}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
