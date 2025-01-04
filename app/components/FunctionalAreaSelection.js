import styles from './FunctionalAreaSelection.module.css'

const functionalAreas = [
  'Information Technology',
  'Sales and Marketing',
  'Finance and Accounting',
  'Human Resources',
  'Engineering',
  'Operations',
  'Research and Development',
  'Customer Service',
  'Legal',
  'Healthcare'
]

export default function FunctionalAreaSelection({ onSelect }) {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Select Functional Area</h2>
      <div className={styles.grid}>
        {functionalAreas.map((area) => (
          <button
            key={area}
            onClick={() => onSelect(area)}
            className={styles.button}
          >
            {area}
          </button>
        ))}
      </div>
    </div>
  )
}

