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
import FunctionalAreaSelection from '../components/FunctionalAreaSelection';
import DesignationSelection from '../components/DesignationSelection';
import ResumeUpload from '../components/ResumeUpload';
import AnalysisResult from '../components/AnalysisResult';
import RefreshIcon from '@mui/icons-material/Refresh';

const steps = ['Select Functional Area', 'Choose Designation', 'Enter Experience & Upload Resume'];

export default function HomePage() {
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('isLoggedIn') === 'true');
  const [functionalArea, setFunctionalArea] = useState('');
  const [designation, setDesignation] = useState('');
  const [resumeFile, setResumeFile] = useState(null);
  const [yearsOfExperience, setYearsOfExperience] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState(null);

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/login');
    }
  }, [isLoggedIn, navigate]);

  const handleFunctionalAreaSelect = (area) => {
    setFunctionalArea(area);
    setDesignation(''); // Reset designation when area changes
    setActiveStep(1);
  };

  const handleDesignationSelect = (selectedDesignation) => {
    setDesignation(selectedDesignation);
    setActiveStep(2);
  };

  const handleResumeUpload = (file) => {
    setResumeFile(file);
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

  const handleReAnalyze = () => {
    setAnalysisResult(null);
    setResumeFile(null);
    setYearsOfExperience('');
    setActiveStep(0);
    setFunctionalArea('');
    setDesignation('');
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
                },
                '& .MuiStepLabel-label.Mui-completed.MuiStepLabel-alternativeLabel': {
                  color: 'grey.500'
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
              <Paper 
                elevation={3} 
                sx={{ 
                  p: 3, 
                  mb: 3,
                  background: 'rgba(255, 255, 255, 0.9)',
                  backdropFilter: 'blur(10px)',
                  transition: 'all 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-2px)',
                    boxShadow: 6
                  }
                }}
              >
                {activeStep === 0 && (
                  <FunctionalAreaSelection
                    onSelect={handleFunctionalAreaSelect}
                    selectedArea={functionalArea}
                  />
                )}

                {activeStep >= 1 && (
                  <Box sx={{ mt: functionalArea ? 0 : 3 }}>
                    <DesignationSelection
                      functionalArea={functionalArea}
                      onSelect={handleDesignationSelect}
                    />
                  </Box>
                )}

                {activeStep === 2 && (
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
                      onUpload={handleResumeUpload}
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
              sx={{
                height: 56,
                background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
                boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)',
                transition: 'all 0.3s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-2px)',
                  boxShadow: '0 6px 10px 4px rgba(33, 203, 243, .3)'
                }
              }}
              startIcon={!isAnalyzing && <AnalyticsTwoToneIcon />}
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
              sx={{
                mb: 2,
                transition: 'all 0.3s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-2px)',
                  boxShadow: 2
                }
              }}
            >
              Analyze New Resume
            </Button>
          </Box>
        )}

        {analysisResult && (
          <Grow in timeout={1000}>
            <Box sx={{ mt: 4 }}>
              <AnalysisResult 
                result={analysisResult}
                functionalArea={functionalArea}
                designation={designation}
                yearsOfExperience={yearsOfExperience}
              />
            </Box>
          </Grow>
        )}
      </Box>
    </Container>
  );
}

