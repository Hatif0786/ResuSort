import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Box, 
  TextField, 
  Button, 
  Typography, 
  Container, 
  Paper, 
  Stepper, 
  Step, 
  StepLabel,
  CircularProgress,
  Fade,
  Grow
} from '@mui/material';
import AnalyticsTwoToneIcon from '@mui/icons-material/AnalyticsTwoTone';
import RefreshIcon from '@mui/icons-material/Refresh';
import FunctionalAreaSelection from './FunctionalAreaSelection';
import DesignationSelection from './DesignationSelection';
import ResumeUpload from './ResumeUpload';
import AnalysisResult from './AnalysisResult';

const steps = ['Select Functional Area', 'Choose Designation', 'Enter Experience & Upload Resume'];

const ResumeAnalyzer = () => {
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('isLoggedIn') === 'true');
  const [functionalArea, setFunctionalArea] = useState('');
  const [designation, setDesignation] = useState('');
  const [resumeFile, setResumeFile] = useState(null);
  const [analysisResult, setAnalysisResult] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [yearsOfExperience, setYearsOfExperience] = useState('');

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/login');
    }
  }, [isLoggedIn, navigate]);

  const handleReAnalyze = () => {
    setAnalysisResult(null);
    setResumeFile(null);
    setYearsOfExperience('');
    setActiveStep(0);
    setFunctionalArea('');
    setDesignation('');
  };

  const handleAnalysis = async () => {
    if (!resumeFile || !functionalArea || !designation || !yearsOfExperience) {
      alert('Please complete all required fields before analyzing.');
      return;
    }

    setIsAnalyzing(true);
    setAnalysisResult(null);

    try {
      // Simulate API call with mock data
      await new Promise(resolve => setTimeout(resolve, 3000));
      const mockResult = {
        matchScore: 85,
        keySkills: ['JavaScript', 'React', 'Node.js', 'Python', 'SQL'],
        skillGaps: ['AWS', 'Docker'],
        experience: {
          total: parseFloat(yearsOfExperience),
          relevant: parseFloat(yearsOfExperience) * 0.8
        },
        recommendations: [
          'Consider getting AWS certification',
          'Add more cloud computing projects',
          'Highlight team leadership experience'
        ],
        strengths: [
          'Strong frontend development skills',
          'Good problem-solving abilities',
          'Excellent communication skills'
        ],
        improvements: [
          'Cloud technology exposure needed',
          'DevOps knowledge could be enhanced'
        ]
      };
      setAnalysisResult(mockResult);
    } catch (error) {
      console.error('Error analyzing resume:', error);
      alert('An error occurred while analyzing the resume.');
    } finally {
      setIsAnalyzing(false);
    }
  };

  const isStepComplete = (step) => {
    switch (step) {
      case 0:
        return !!functionalArea;
      case 1:
        return !!designation;
      case 2:
        return !!yearsOfExperience && !!resumeFile;
      default:
        return false;
    }
  };

  if (!isLoggedIn) return null;

  return (
    <Container maxWidth="md">
      <Box sx={{ py: 4 }}>
        <Grow in timeout={1000}>
          <Typography 
            variant="h4" 
            gutterBottom 
            align="center" 
            sx={{ 
              mb: 4,
              background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
              backgroundClip: 'text',
              textFillColor: 'transparent',
              fontWeight: 'bold'
            }}
          >
            ResuSort - AI Resume Analyzer
          </Typography>
        </Grow>

        {!analysisResult ? (
          <>
            <Stepper 
              activeStep={activeStep} 
              sx={{ 
                mb: 4,
                '& .MuiStepLabel-root .Mui-completed': {
                  color: 'success.main'
                }
              }}
            >
              {steps.map((label, index) => (
                <Step key={label} completed={isStepComplete(index)}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>

            <Fade in timeout={500}>
              <Paper elevation={3} sx={{ p: 3, mb: 3 }}>
                <FunctionalAreaSelection
                  onSelect={(area) => {
                    setFunctionalArea(area);
                    setActiveStep(1);
                  }}
                  selectedArea={functionalArea}
                />

                {functionalArea && (
                  <Box sx={{ mt: 3 }}>
                    <DesignationSelection
                      functionalArea={functionalArea}
                      onSelect={(des) => {
                        setDesignation(des);
                        setActiveStep(2);
                      }}
                    />
                  </Box>
                )}

                {designation && (
                  <Box sx={{ mt: 3 }}>
                    <Typography variant="h6" gutterBottom>
                      Experience & Resume
                    </Typography>
                    
                    <TextField
                      type="number"
                      fullWidth
                      label="Years of Experience"
                      value={yearsOfExperience}
                      onChange={(e) => setYearsOfExperience(e.target.value)}
                      inputProps={{ min: 0, step: 0.5 }}
                      sx={{ mb: 3 }}
                    />

                    <ResumeUpload
                      onUpload={setResumeFile}
                      currentFile={resumeFile}
                    />
                  </Box>
                )}
              </Paper>
            </Fade>

            <Button
              variant="contained"
              color="primary"
              size="large"
              fullWidth
              onClick={handleAnalysis}
              disabled={!isStepComplete(2) || isAnalyzing}
              startIcon={!isAnalyzing && <AnalyticsTwoToneIcon />}
              sx={{
                height: 56,
                background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
                boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)'
              }}
            >
              {isAnalyzing ? (
                <CircularProgress size={24} color="inherit" />
              ) : (
                'Analyze Resume'
              )}
            </Button>
          </>
        ) : (
          <Box sx={{ mb: 4 }}>
            <Button
              variant="outlined"
              color="primary"
              startIcon={<RefreshIcon />}
              onClick={handleReAnalyze}
              sx={{ mb: 2 }}
            >
              Analyze New Resume
            </Button>
          </Box>
        )}

        {analysisResult && (
          <Grow in timeout={1000}>
            <Box sx={{ mt: 4 }}>
              <AnalysisResult result={analysisResult} />
            </Box>
          </Grow>
        )}
      </Box>
    </Container>
  );
};

export default ResumeAnalyzer; 