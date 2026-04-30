import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'

export default function Experience({ resumeExperience, resumeBasicInfo }) {
  const sectionName = resumeBasicInfo?.section_name?.experience || 'Experience'
  const jobs = resumeExperience || []

  return (
    <section id="resume" className="py-20 px-4" style={{ background: 'var(--bg-primary)' }}>
      <div className="max-w-4xl mx-auto">
        <h2 className="section-title">{sectionName}</h2>

        <div className="mt-10">
          <VerticalTimeline lineColor="var(--border-color)">
            {jobs.map((job, i) => (
              <VerticalTimelineElement
                key={i}
                className="vertical-timeline-element--work"
                date={job.years}
                iconStyle={{
                  background: '#339acc',
                  color: '#fff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.2rem',
                }}
                icon={<span>💼</span>}
              >
                {/* Main tech badges */}
                <div className="flex flex-wrap gap-1 mb-2">
                  {job.mainTech?.map(t => (
                    <span key={t} className="badge badge-main">{t}</span>
                  ))}
                </div>

                <h3
                  className="vertical-timeline-element-title font-bold text-lg"
                  style={{ color: 'var(--text-primary)' }}
                >
                  {job.title}
                </h3>
                <h4
                  className="vertical-timeline-element-subtitle text-sm mt-0.5"
                  style={{ color: '#339acc' }}
                >
                  {job.company}
                </h4>

                {/* All tech */}
                <div className="flex flex-wrap gap-1 mt-3">
                  {job.technologies?.map(t => (
                    <span key={t} className="badge">{t}</span>
                  ))}
                </div>
              </VerticalTimelineElement>
            ))}

            {/* Start marker — transparent content hides the empty box */}
            <VerticalTimelineElement
              className="timeline-end-marker"
              iconStyle={{
                background: '#339acc',
                color: '#fff',
                fontSize: '1.2rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              contentStyle={{
                background: 'transparent',
                boxShadow: 'none',
                border: 'none',
                padding: 0,
              }}
              contentArrowStyle={{ display: 'none' }}
              icon={<span>🚀</span>}
            />
          </VerticalTimeline>
        </div>
      </div>
    </section>
  )
}