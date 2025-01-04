export const mockAnalysisResults = {
  "Software Development": {
    "Software Engineer": {
      skillMatch: 85,
      experienceMatch: 90,
      keyFindings: [
        "Strong programming fundamentals",
        "Experience with modern frameworks",
        "Good problem-solving skills"
      ],
      recommendations: [
        "Consider adding cloud certifications",
        "Highlight system design experience",
        "Include more quantitative achievements"
      ],
      skillGaps: ["Cloud Architecture", "DevOps", "Microservices"],
      strengthAreas: ["Backend Development", "Algorithm Design", "Code Optimization"],
      detailedAnalysis: {
        strengths: [
          "Strong foundation in JavaScript and React development",
          "Experience with Node.js backend development",
          "Familiarity with RESTful API design",
          "Good understanding of database concepts",
          "Demonstrated ability in Agile environments"
        ],
        weaknesses: [
          "Limited experience with cloud technologies",
          "Lack of exposure to containerization",
          "No mention of GraphQL experience",
          "Insufficient testing coverage"
        ],
        opportunities: [
          "Pursue AWS/Azure certifications",
          "Gain hands-on experience with Docker",
          "Implement GraphQL in side projects",
          "Contribute to open-source projects"
        ]
      },
      technicalInsights: {
        languageProficiency: {
          JavaScript: 90,
          Python: 70,
          Java: 60,
          TypeScript: 85,
          SQL: 75,
          "HTML/CSS": 85
        },
        frameworkExpertise: {
          React: 88,
          "Node.js": 82,
          "Express.js": 75,
          "Vue.js": 60,
          Angular: 50,
          Django: 65
        }
      },
      industryTrends: [
        "Increasing demand for full-stack developers",
        "Growing importance of cloud-native development",
        "Rise of AI and machine learning integration",
        "Shift towards microservices architecture",
        "Emphasis on DevOps practices"
      ],
      careerGrowth: [
        "Transition into full-stack development",
        "Specialize in cloud-native development",
        "Explore leadership opportunities",
        "Focus on emerging technologies",
        "Pursue cloud certifications"
      ],
      jobMatch: {
        responsibilities: [
          "Design and implement scalable applications",
          "Optimize application performance",
          "Collaborate with cross-functional teams",
          "Participate in code reviews",
          "Troubleshoot complex issues",
          "Mentor junior developers"
        ],
        requirements: [
          "2+ years of development experience",
          "Strong JavaScript proficiency",
          "Experience with server-side technologies",
          "Familiarity with cloud platforms",
          "Database systems knowledge",
          "Understanding of design patterns"
        ]
      }
    },
    "Full Stack Developer": {
      skillMatch: 78,
      experienceMatch: 82,
      keyFindings: [
        "Balanced frontend and backend skills",
        "Good database knowledge",
        "Experience with multiple frameworks"
      ],
      recommendations: [
        "Add more frontend projects",
        "Include UI/UX experience",
        "Highlight team collaboration"
      ],
      skillGaps: ["Mobile Development", "UI/UX Design", "Performance Optimization"],
      strengthAreas: ["Web Development", "Database Design", "API Integration"]
    }
  },
  "Data Science & Analytics": {
    "Data Scientist": {
      skillMatch: 92,
      experienceMatch: 88,
      keyFindings: [
        "Strong statistical background",
        "Experience with ML models",
        "Good data visualization skills"
      ],
      recommendations: [
        "Add more deep learning projects",
        "Include business impact metrics",
        "Highlight domain expertise"
      ],
      skillGaps: ["Deep Learning", "Big Data Tools", "Cloud ML Platforms"],
      strengthAreas: ["Statistical Analysis", "Machine Learning", "Data Visualization"]
    }
  },
  "Product Management": {
    "Product Manager": {
      skillMatch: 75,
      experienceMatch: 80,
      keyFindings: [
        "Good stakeholder management",
        "Experience with agile methodologies",
        "Strong analytical skills"
      ],
      recommendations: [
        "Add more metrics-driven results",
        "Include product strategy examples",
        "Highlight cross-functional leadership"
      ],
      skillGaps: ["Technical Architecture", "Data Analytics", "UX Research"],
      strengthAreas: ["Product Strategy", "Stakeholder Management", "Agile Methodologies"]
    }
  }
};

export const getAnalysisResult = (functionalArea, designation) => {
  // Default analysis result
  const defaultResult = {
    skillMatch: 70,
    experienceMatch: 75,
    keyFindings: [
      "Good overall profile",
      "Relevant experience found",
      "Some skill matches identified"
    ],
    recommendations: [
      "Add more specific achievements",
      "Highlight relevant certifications",
      "Include more quantitative results"
    ],
    skillGaps: ["Industry-specific tools", "Leadership experience", "Technical expertise"],
    strengthAreas: ["Communication", "Basic technical skills", "Project execution"]
  };

  // Try to get specific result for the functional area and designation
  try {
    return mockAnalysisResults[functionalArea]?.[designation] || defaultResult;
  } catch (error) {
    console.error('Error getting analysis result:', error);
    return defaultResult;
  }
}; 