import ProjectGrid from './ProjectGrid'

export default function MiniProjects({ resumeProjects, resumeBasicInfo }) {
  const sectionName = resumeBasicInfo?.section_name?.mini_projects || 'Personal Projects'
  return (
    <section style={{ background: 'var(--bg-primary)' }}>
      <ProjectGrid sectionName={sectionName} projects={resumeProjects || []} />
    </section>
  )
}
