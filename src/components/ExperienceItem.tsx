import { Collapsible } from '@base-ui/react/collapsible';
import type { WorkExperience } from '../data/experience';
import { Avatar } from './ui/Avatar';
import styles from './ExperienceItem.module.css';

interface Props {
  experience: WorkExperience;
}

export default function ExperienceItem({ experience }: Props) {
  return (
    <Collapsible.Root className={styles.entry}>
      <Collapsible.Trigger className={styles.trigger}>
        <span className={styles.company}>
          <Avatar src={experience.logo} alt="" initials="K" size="company" />
          <span className={styles.companyName}>{experience.company}</span>
        </span>
        <span className={styles.role}>{experience.role}</span>
        <span className={styles.period}>
          <time dateTime={experience.start.date}>{experience.start.label}</time>
          <span aria-hidden="true"> — </span>
          <span className="sr-only"> to </span>
          <time dateTime={experience.end.date}>{experience.end.label}</time>
        </span>
      </Collapsible.Trigger>

      <Collapsible.Panel className={styles.panel} keepMounted>
        <div className={styles.panelSpacing}>
          <div className={styles.card}>
            <div className={styles.overview}>
              <p>{experience.summary}</p>
              <a className={styles.website} href={experience.website} target="_blank" rel="noopener noreferrer">
                Visit agency website
              </a>
            </div>
            <dl className={styles.contributions}>
              {experience.projects.map((project) => (
                <div className={styles.contribution} key={project.name}>
                  <dt className={styles.client}>
                    <span className={styles.clientName}>{project.name}</span>
                    <span className={styles.clientFocus}>{project.focus}</span>
                  </dt>
                  <dd className={styles.description}>
                    <ul className={styles.highlights}>
                      {project.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
                    </ul>
                  </dd>
                </div>
              ))}
              <div className={styles.contribution}>
                <dt className={styles.client}><span className={styles.clientName}>Agency mentoring</span></dt>
                <dd className={styles.description}><p>{experience.mentoring}</p></dd>
              </div>
            </dl>
          </div>
        </div>
      </Collapsible.Panel>
    </Collapsible.Root>
  );
}
