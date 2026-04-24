import { useState } from 'react'

export default function ImageSlider({ images = [] }) {
  const [idx, setIdx] = useState(0)

  if (!images.length) return null

  const base = import.meta.env.BASE_URL
  const prev = () => setIdx(i => (i - 1 + images.length) % images.length)
  const next = () => setIdx(i => (i + 1) % images.length)

  return (
    <div className="slider-container" style={{ userSelect: 'none' }}>
      <img
        key={idx}
        src={`${base}${images[idx]}`}
        alt={`slide-${idx}`}
        className="slider-img fade-in-up"
      />
      {images.length > 1 && (
        <>
          <button className="slider-nav-btn slider-prev" onClick={prev} aria-label="Previous">‹</button>
          <button className="slider-nav-btn slider-next" onClick={next} aria-label="Next">›</button>
          <div
            className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5"
          >
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setIdx(i)}
                style={{
                  width: 8, height: 8, borderRadius: '50%', border: 'none',
                  background: i === idx ? '#339acc' : 'rgba(255,255,255,0.5)',
                  cursor: 'pointer', padding: 0,
                }}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}
