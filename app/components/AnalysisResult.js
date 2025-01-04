import styles from './AnalysisResult.module.css'

export default function AnalysisResult({ result }) {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Analysis Result</h2>
      <div className={styles.grid}>
        <div className={styles.item}>
          <h3 className={styles.subtitle}>Overall Score</h3>
          <div className={styles.score}>{result.score}%</div>
        </div>
        <div className={styles.item}>
          <h3 className={styles.subtitle}>Keyword Match</h3>
          <div className={styles.score}>{result.keywordMatch}%</div>
        </div>
      </div>
      <div className={styles.section}>
        <h3 className={styles.subtitle}>Missing Keywords</h3>
        <div className={styles.keywordList}>
          {result.missingKeywords.map((keyword, index) => (
            <span key={index} className={styles.keyword}>{keyword}</span>
          ))}
        </div>
      </div>
      <div className={styles.section}>
        <h3 className={styles.subtitle}>Recommendations</h3>
        <ul className={styles.recommendationList}>
          {result.recommendations.map((recommendation, index) => (
            <li key={index} className={styles.recommendationItem}>{recommendation}</li>
          ))}
        </ul>
      </div>
      <div className={styles.section}>
        <h3 className={styles.subtitle}>Skills Analysis</h3>
        <div className={styles.skillsGrid}>
          {Object.entries(result.skillsAnalysis).map(([skill, score]) => (
            <div key={skill} className={styles.skillItem}>
              <div className={styles.skillName}>{skill}</div>
              <div className={styles.skillScore}>{score}%</div>
              <div className={styles.skillBar}>
                <div className={styles.skillProgress} style={{ width: `${score}%` }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

