import { useState, useEffect } from 'react'
import styles from './DesignationSelection.module.css'

const designations = {
  'Information Technology': [
    'Software Engineer',
    'Data Scientist',
    'Network Administrator',
    'IT Project Manager',
    'Cybersecurity Analyst'
  ],
  'Sales and Marketing': [
    'Sales Representative',
    'Marketing Manager',
    'Digital Marketing Specialist',
    'Brand Manager',
    'Sales Director'
  ],
  // Add more functional areas and their respective designations
}

export default function DesignationSelection({ functionalArea, onSelect }) {
  const [availableDesignations, setAvailableDesignations] = useState([])

  useEffect(() => {
    setAvailableDesignations(designations[functionalArea] || [])
  }, [functionalArea])

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Select Designation</h2>
      <div className={styles.grid}>
        {availableDesignations.map((designation) => (
          <button
            key={designation}
            onClick={() => onSelect(designation)}
            className={styles.button}
          >
            {designation}
          </button>
        ))}
      </div>
    </div>
  )
}

