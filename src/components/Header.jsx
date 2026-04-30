import { Icon } from '@iconify/react'
import { useTheme } from '../context/ThemeContext'

export default function Header({ basicInfo }) {
  const { isDark, toggleTheme } = useTheme()

  const name = basicInfo?.name || 'Jeffrey Arias'
  const social = basicInfo?.social || []

  return (
    <header
      className="relative flex flex-col items-center justify-center text-center overflow-hidden"
      style={{
        minHeight: '100vh',
        background: isDark
          ? 'linear-gradient(135deg, #0f3460 0%, #1a1a2e 100%)'
          : 'linear-gradient(135deg, #9BB7D4 0%, #c8dff0 100%)',
      }}
    >
      {/* Animated background circles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full opacity-10"
            style={{
              background: '#339acc',
              width: `${80 + i * 60}px`,
              height: `${80 + i * 60}px`,
              top: `${10 + i * 13}%`,
              left: `${5 + i * 15}%`,
              animation: `pulse ${3 + i}s ease-in-out infinite alternate`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 px-6">
        {/* Laptop icon */}
        <Icon
          icon="la:laptop-code"
          style={{
            fontSize: '4.5rem',
            color: isDark ? '#e2e8f0' : '#1a202c',
            display: 'block',
            margin: '0 auto 1rem',
          }}
        />

        <h1
          className="text-5xl md:text-7xl font-black mb-2 tracking-tight"
          style={{ color: isDark ? '#e2e8f0' : '#1a202c' }}
        >
          {name}
        </h1>

        {/* Static primary title */}
        <p
          className="text-2xl md:text-3xl font-bold mb-3"
          style={{ color: isDark ? '#339acc' : '#2b6cb0' }}
        >
          Full Stack Developer
        </p>

        {/* Sub-title: AI positioning */}
        <p
          className="text-sm md:text-base font-medium mb-8 tracking-wide"
          style={{
            color: isDark ? '#a0aec0' : '#4a5568',
            maxWidth: 480,
            margin: '0 auto 2rem',
            lineHeight: 1.6,
          }}
        >
          AI Engineer · Builds AI Systems · Ships with AI Acceleration
          <br />
          <span style={{ color: isDark ? '#718096' : '#718096', fontSize: '0.8rem' }}>
            20+ years of experience across web, mobile &amp; cloud
          </span>
        </p>

        {/* Social links */}
        <div className="flex gap-4 justify-center flex-wrap">
          {social.map(s => (
            <a
              key={s.name}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl transition-transform hover:scale-125 hover:-translate-y-1"
              title={s.name}
            >
              <i className={s.class} />
            </a>
          ))}
        </div>
      </div>

      {/* Theme toggle — fixed bottom right */}
      <button
        onClick={toggleTheme}
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-4 py-2 rounded-full font-medium text-sm transition-all duration-300 border shadow-lg"
        style={{
          background: isDark ? '#1e2a3a' : 'rgba(255,255,255,0.9)',
          color: isDark ? '#e2e8f0' : '#1a202c',
          borderColor: isDark ? '#339acc' : '#cbd5e0',
          backdropFilter: 'blur(8px)',
        }}
        aria-label="Toggle theme"
      >
        {isDark ? '☀️ Light' : '🌙 Dark'}
      </button>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 flex flex-col items-center gap-1 scale-250 opacity-60 pointer-events-none"
        style={{ animation: 'bounce 2s infinite', left: '50%', transform: 'translateX(-50%)' }}
      >
        <span style={{ color: isDark ? '#a0aec0' : '#4a5568' }}>↓</span>
      </div>

      <style>{`
        @keyframes pulse {
          from { transform: scale(1); opacity: 0.08; }
          to { transform: scale(1.15); opacity: 0.15; }
        }
        @keyframes bounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(-8px); }
        }
      `}</style>
    </header>
  )
}