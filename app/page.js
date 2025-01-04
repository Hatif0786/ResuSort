'use client'

import { useState } from 'react'
import FunctionalAreaSelection from './components/FunctionalAreaSelection'
import DesignationSelection from './components/DesignationSelection'
import ResumeUpload from './components/ResumeUpload'
import AnalysisResult from './components/AnalysisResult'
import DetailedAnalysis from './components/DetailedAnalysis'
import ReportGeneration from './components/ReportGeneration'
import styles from './page.module.css'

export default function Home() {
  const [functionalArea, setFunctionalArea] = useState('')
  const [designation, setDesignation] = useState('')
  const [resumeFile, setResumeFile] = useState(null)
  const [analysisResult, setAnalysisResult] = useState(null)
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [error, setError] = useState(null)

  const handleAnalysis = async () => {
    if (!resumeFile || !functionalArea || !designation) {
      setError('Please complete all steps before analyzing.')
      return
    }

    setIsAnalyzing(true)
    setError(null)

    try {
      // Simulating API call
      await new Promise(resolve => setTimeout(resolve, 2000))
      const result = {
        score: 85,
        keywordMatch: 75,
        missingKeywords: ['Docker', 'Kubernetes', 'GraphQL'],
        recommendations: [
          'Enhance your cloud computing skills',
          'Gain practical experience with containerization technologies',
          'Develop proficiency in GraphQL for modern API development'
        ],
        skillsAnalysis: {
          technical: 80,
          softSkills: 70,
          relevance: 85,
          leadership: 65,
          problemSolving: 75
        },
        technicalSkills: [
          'JavaScript',
          'React',
          'Node.js',
          'SQL',
          'Git'
        ],
        softSkills: [
          'Communication',
          'Teamwork',
          'Problem-solving',
          'Adaptability',
          'Time management'
        ],
        careerAdvice: 'Consider focusing on cloud technologies and containerization to enhance your skillset. Pursue certifications in these areas to stand out in the job market.'
      }
      setAnalysisResult(result)
    } catch (error) {
      console.error('Error analyzing resume:', error)
      setError('An error occurred while analyzing the resume. Please try again.')
    } finally {
      setIsAnalyzing(false)
    }
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>ResuSort - AI Resume Analyzer</h1>
      <div className={styles.analysisForm}>
        <FunctionalAreaSelection onSelect={setFunctionalArea} />
        {functionalArea && (
          <DesignationSelection
            functionalArea={functionalArea}
            onSelect={setDesignation}
          />
        )}
        {designation && <ResumeUpload onUpload={setResumeFile} />}
        {error && <p className={styles.error}>{error}</p>}
        <button
          onClick={handleAnalysis}
          disabled={isAnalyzing || !resumeFile || !functionalArea || !designation}
          className={`btn ${styles.analyzeButton}`}
        >
          {isAnalyzing ? 'Analyzing Resume...' : 'Analyze Resume'}
        </button>
      </div>
      {isAnalyzing && (
        <div className={styles.loading}>
          <div className={styles.spinner}></div>
          <p>Analyzing your resume...</p>
        </div>
      )}
      {analysisResult && (
        <div className={styles.analysisResults}>
          <AnalysisResult result={analysisResult} />
          <DetailedAnalysis result={analysisResult} />
          <ReportGeneration result={analysisResult} functionalArea={functionalArea} designation={designation} />
        </div>
      )}
    </div>
  )
}

