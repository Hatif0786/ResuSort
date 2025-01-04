import React from 'react';
import './JobDescriptionMatch.css';

export default function JobDescriptionMatch({ jobDescription }) {
  return (
    <div className="job-description-match">
      <h2 className="section-title">Job Description Match</h2>
      
      <div className="job-description-grid">
        <div className="job-description-section">
          <h3 className="job-description-subtitle">Responsibilities</h3>
          <ul className="job-description-list">
            {jobDescription.responsibilities.map((responsibility, index) => (
              <li key={index} className="job-description-item">{responsibility}</li>
            ))}
          </ul>
        </div>
        <div className="job-description-section">
          <h3 className="job-description-subtitle">Requirements</h3>
          <ul className="job-description-list">
            {jobDescription.requirements.map((requirement, index) => (
              <li key={index} className="job-description-item">{requirement}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

