import React, { useState } from 'react';
import FunctionalAreaSelection from './FunctionalAreaSelection';
import DesignationSelection from './DesignationSelection';
import ResumeUpload from './ResumeUpload';
import AnalysisResult from './AnalysisResult';
import './AnalysisWorkflow.css';

export default function AnalysisWorkflow() {
  const [functionalArea, setFunctionalArea] = useState('');
  const [designation, setDesignation] = useState('');
  const [analysisResult, setAnalysisResult] = useState(null);
  const [error, setError] = useState(null);

  const handleAnalysisComplete = (result) => {
    setAnalysisResult(result);
    setError(null);
  };

  const handleError = (errorMessage) => {
    setError(errorMessage);
    setAnalysisResult(null);
  };

  const resetAnalysis = () => {
    setAnalysisResult(null);
    setError(null);
  };

  return (
    <div className="analysis-workflow">
      <div className="selection-container">
        <FunctionalAreaSelection 
          onSelect={(area) => {
            setFunctionalArea(area);
            setDesignation('');
            resetAnalysis();
          }}
        />
        <DesignationSelection
          functionalArea={functionalArea}
          onSelect={(des) => {
            setDesignation(des);
            resetAnalysis();
          }}
        />
      </div>

      {functionalArea && designation && (
        <ResumeUpload
          functionalArea={functionalArea}
          designation={designation}
          onAnalysisComplete={handleAnalysisComplete}
          onError={handleError}
        />
      )}

      {error && (
        <div className="error-container">
          <p className="error-message">{error}</p>
          <button onClick={resetAnalysis} className="retry-button">
            Try Again
          </button>
        </div>
      )}

      {analysisResult && (
        <AnalysisResult
          result={analysisResult}
          functionalArea={functionalArea}
          designation={designation}
        />
      )}
    </div>
  );
} 