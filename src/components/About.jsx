import { useRef, useEffect, useState } from 'react'
import { Icon } from '@iconify/react'

export default function About({ resumeBasicInfo, sharedBasicInfo }) {
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

  const profilePic = sharedBasicInfo
    ? `${import.meta.env.BASE_URL}images/${sharedBasicInfo.image}`
    : null

  const hello = resumeBasicInfo?.description_header || 'Hi'
  const about = resumeBasicInfo?.description || ''
  const sectionName = resumeBasicInfo?.section_name?.about || 'About Me'

  return (
    <section id="about" className="py-20 px-4" style={{ background: 'var(--bg-primary)' }}>
      <div className="max-w-5xl mx-auto" ref={ref}>
        <h2 className="section-title">{sectionName}</h2>

        <div
          className="mt-10 flex flex-col md:flex-row gap-10 items-center"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'none' : 'translateY(30px)',
            transition: 'opacity 0.7s ease, transform 0.7s ease',
          }}
        >
          {/* Profile photo card */}
          <div className="flex-shrink-0 flex flex-col items-center gap-4">
            <div
              className="relative rounded-2xl overflow-hidden shadow-2xl"
              style={{
                background: 'var(--card-bg)',
                border: '4px solid #339acc',
                width: 220,
              }}
            >
              {profilePic && (
                <img
                  src={profilePic}
                  alt="Jeffrey Arias"
                  style={{ width: '100%', height: 220, objectFit: 'cover', display: 'block' }}
                />
              )}
              <div
                className="flex justify-around items-center py-3 px-4"
                style={{ background: 'var(--bg-secondary)' }}
              >
                <Icon icon="logos:react" style={{ fontSize: '2.5rem' }} />
                <img
                  src={`${import.meta.env.BASE_URL}images/reactNativeLogo.png`}
                  alt="React Native"
                  style={{ height: 40, width: 40, objectFit: 'contain' }}
                />
              </div>
            </div>
          </div>

          {/* Bio card (mac window style) */}
          <div className="mac-window flex-1 w-full">
            <div className="mac-titlebar">
              <div className="mac-btn mac-btn-red" />
              <div className="mac-btn mac-btn-yellow" />
              <div className="mac-btn mac-btn-green" />
            </div>
            <div
              className="p-6 text-base leading-relaxed"
              style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: '1.85' }}
            >
              <span className="text-xl font-semibold" style={{ color: 'var(--text-primary)' }}>
                <span className="animate-wave inline-block mr-1">👋</span> {hello}!
              </span>
              <br /><br />
              {about}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
