import { useState, useEffect } from 'react'

export function usePortfolioData() {
  const [resumeData, setResumeData] = useState(null)
  const [sharedData, setSharedData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const base = import.meta.env.BASE_URL

    Promise.all([
      fetch(`${base}portfolio_shared_data.json`).then(r => r.json()),
      fetch(`${base}res_primaryLanguage.json`).then(r => r.json()),
    ]).then(([shared, resume]) => {
      setSharedData(shared)
      setResumeData(resume)
      document.title = shared.basic_info.name
    }).catch(console.error)
      .finally(() => setLoading(false))
  }, [])

  return { resumeData, sharedData, loading }
}
