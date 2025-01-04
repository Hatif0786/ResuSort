import { useState, useRef } from 'react'
import styles from './ResumeUpload.module.css'

export default function ResumeUpload({ onUpload }) {
  const [fileName, setFileName] = useState(null)
  const fileInputRef = useRef(null)

  const handleFileChange = (event) => {
    const file = event.target.files?.[0]
    if (file) {
      setFileName(file.name)
      onUpload(file)
    }
  }

  const handleDragOver = (event) => {
    event.preventDefault()
  }

  const handleDrop = (event) => {
    event.preventDefault()
    const file = event.dataTransfer.files?.[0]
    if (file) {
      setFileName(file.name)
      onUpload(file)
    }
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Upload Your Resume</h2>
      <div
        className={styles.uploadArea}
        onClick={() => fileInputRef.current?.click()}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          accept=".pdf,.doc,.docx"
          className={styles.fileInput}
        />
        {fileName ? (
          <div className={styles.fileSelected}>
            <span className={styles.fileName}>{fileName}</span>
          </div>
        ) : (
          <>
            <svg className={styles.uploadIcon} viewBox="0 0 2424" fill="none" stroke="currentColor">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M17 8l-5-5-5 5M12 3v12"/>
            </svg>
            <p className={styles.uploadText}>Click to upload or drag and drop</p>
            <p className={styles.uploadSubtext}>PDF, DOC, DOCX up to 10MB</p>
          </>
        )}
      </div>
    </div>
  )
}

