import { ThemeProvider } from './context/ThemeContext'
import { usePortfolioData } from './hooks/usePortfolioData'
import Header from './components/Header'
import About from './components/About'
import Projects from './components/Projects'
import MiniProjects from './components/MiniProjects'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Certifications from './components/Certifications'
import Footer from './components/Footer'

function Portfolio() {
  const { resumeData, sharedData, loading } = usePortfolioData()

  if (loading) {
    return (
      <div
        className="flex items-center justify-center min-h-screen"
        style={{ background: 'var(--bg-primary)' }}
      >
        <div className="flex flex-col items-center gap-4">
          <div
            className="w-12 h-12 rounded-full border-4 border-transparent animate-spin"
            style={{ borderTopColor: '#339acc', borderRightColor: '#339acc' }}
          />
          <p style={{ color: 'var(--text-muted)' }} className="text-sm font-medium">
            Loading portfolio…
          </p>
        </div>
      </div>
    )
  }

  return (
    <>
      <Header basicInfo={sharedData?.basic_info} />
      <About
        resumeBasicInfo={resumeData?.basic_info}
        sharedBasicInfo={sharedData?.basic_info}
      />
      <Projects
        resumeProjects={resumeData?.projects}
        resumeBasicInfo={resumeData?.basic_info}
      />
      <MiniProjects
        resumeProjects={resumeData?.mini_projects}
        resumeBasicInfo={resumeData?.basic_info}
      />
      <Skills
        sharedSkills={sharedData?.skills}
        resumeBasicInfo={resumeData?.basic_info}
      />
      <Experience
        resumeExperience={resumeData?.experience}
        resumeBasicInfo={resumeData?.basic_info}
      />
      <Certifications
        resumeBasicInfo={resumeData?.basic_info}
        resumeCertifications={resumeData?.certifications}
      />
      <Footer sharedBasicInfo={sharedData?.basic_info} />
    </>
  )
}

export default function App() {
  return (
    <ThemeProvider>
      <Portfolio />
    </ThemeProvider>
  )
}
