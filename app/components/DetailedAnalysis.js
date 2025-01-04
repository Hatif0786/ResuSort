import styles from './DetailedAnalysis.module.css'

export default function DetailedAnalysis({ result }) {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Detailed Analysis</h2>
      <div className={styles.grid}>
        <div className={styles.section}>
          <h3 className={styles.subtitle}>Technical Skills</h3>
          <ul className={styles.list}>
            {result.technicalSkills.map((skill, index) => (
              <li key={index} className={styles.item}>{skill}</li>
            ))}
          </ul>
        </div>
        <div className={styles.section}>
          <h3 className={styles.subtitle}>Soft Skills</h3>
          <ul className={styles.list}>
            {result.softSkills.map((skill, index) => (
              <li key={index} className={styles.item}>{skill}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className={styles.section}>
        <h3 className={styles.subtitle}>Career Advice</h3>
        <p className={styles.text}>{result.careerAdvice}</p>
      </div>
    </div>
  )
}

