import ProjectGrid from './ProjectGrid'

export default function Projects({ resumeProjects, resumeBasicInfo }) {
  const sectionName = resumeBasicInfo?.section_name?.projects || 'Projects'
  return <ProjectGrid sectionName={sectionName} projects={resumeProjects || []} />
}
