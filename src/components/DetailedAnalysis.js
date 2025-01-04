import React from 'react';
import './DetailedAnalysis.css';

export default function DetailedAnalysis({ result }) {
  return (
    <div className="detailed-analysis">
      <h2 className="section-title">Detailed Analysis</h2>
      
      <div className="analysis-grid">
        <div className="analysis-section">
          <h3 className="analysis-subtitle">Strengths</h3>
          <ul className="analysis-list">
            {result.detailedAnalysis.strengths.map((strength, index) => (
              <li key={index} className="analysis-item">{strength}</li>
            ))}
          </ul>
        </div>
        <div className="analysis-section">
          <h3 className="analysis-subtitle">Weaknesses</h3>
          <ul className="analysis-list">
            {result.detailedAnalysis.weaknesses.map((weakness, index) => (
              <li key={index} className="analysis-item">{weakness}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="analysis-section">
        <h3 className="analysis-subtitle">Opportunities</h3>
        <ul className="analysis-list">
          {result.detailedAnalysis.opportunities.map((opportunity, index) => (
            <li key={index} className="analysis-item">{opportunity}</li>
          ))}
        </ul>
      </div>

      <div className="analysis-section">
        <h3 className="analysis-subtitle">Technical Insights</h3>
        <div className="analysis-grid">
          <div>
            <h4 className="analysis-subtitle-small">Language Proficiency</h4>
            {Object.entries(result.technicalInsights.languageProficiency).map(([language, proficiency]) => (
              <div key={language} className="proficiency-item">
                <span className="proficiency-name">{language}</span>
                <span className="proficiency-score">{proficiency}%</span>
              </div>
            ))}
          </div>
          <div>
            <h4 className="analysis-subtitle-small">Framework Expertise</h4>
            {Object.entries(result.technicalInsights.frameworkExpertise).map(([framework, expertise]) => (
              <div key={framework} className="proficiency-item">
                <span className="proficiency-name">{framework}</span>
                <span className="proficiency-score">{expertise}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="analysis-section">
        <h3 className="analysis-subtitle">Industry Trends</h3>
        <ul className="analysis-list">
          {result.industryTrends.map((trend, index) => (
            <li key={index} className="analysis-item">{trend}</li>
          ))}
        </ul>
      </div>

      <div className="analysis-section">
        <h3 className="analysis-subtitle">Career Growth Suggestions</h3>
        <ul className="analysis-list">
          {result.careerGrowthSuggestions.map((suggestion, index) => (
            <li key={index} className="analysis-item">{suggestion}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

