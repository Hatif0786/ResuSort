import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Container, 
  Typography, 
  Button, 
  Box, 
  Grid, 
  Paper,
  Card,
  CardContent,
  Avatar,
  Fade,
  Zoom,
  useTheme,
  useMediaQuery,
  Divider,
  Chip,
  LinearProgress
} from '@mui/material';
import {
  Analytics as AnalyticsIcon,
  Work as WorkIcon,
  TrendingUp as TrendingUpIcon,
  Speed as SpeedIcon,
  Psychology as PsychologyIcon,
  Timeline as TimelineIcon,
  CloudUpload as CloudUploadIcon,
  Assessment as AssessmentIcon,
  Person as PersonIcon
} from '@mui/icons-material';

const InteractiveHeroSection = () => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        maxWidth: 600,
        margin: 'auto',
        cursor: 'pointer',
        perspective: '1000px'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Box
        sx={{
          position: 'relative',
          transition: 'transform 0.6s',
          transformStyle: 'preserve-3d',
          transform: isHovered ? 'rotateY(10deg)' : 'rotateY(0)',
        }}
      >
        {/* Resume Preview */}
        <Paper
          elevation={8}
          sx={{
            p: 3,
            bgcolor: 'white',
            borderRadius: 2,
            position: 'relative',
            zIndex: 2,
            transform: isHovered ? 'translateZ(20px)' : 'translateZ(0)',
            transition: 'all 0.6s',
            '&:hover': {
              boxShadow: '0 20px 40px rgba(0,0,0,0.2)'
            }
          }}
        >
          {/* Resume Header */}
          <Box sx={{ mb: 3 }}>
            <Typography variant="h5" color="primary.main" gutterBottom>
              Professional Resume
            </Typography>
            <Divider />
          </Box>

          {/* Resume Content */}
          <Grid container spacing={2}>
            {/* Profile Section */}
            <Grid item xs={12}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Avatar
                  sx={{
                    width: 60,
                    height: 60,
                    bgcolor: 'primary.light',
                    mr: 2,
                    transform: isHovered ? 'scale(1.1)' : 'scale(1)',
                    transition: 'transform 0.3s'
                  }}
                >
                  <PersonIcon />
                </Avatar>
                <Box>
                  <Typography variant="h6" color="text.primary">
                    John Developer
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Senior Software Engineer
                  </Typography>
                </Box>
              </Box>
            </Grid>

            {/* Skills Section */}
            <Grid item xs={12}>
              <Typography variant="subtitle1" color="primary" gutterBottom>
                Key Skills
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                {['React', 'Node.js', 'Python', 'AWS', 'Docker'].map((skill) => (
                  <Chip
                    key={skill}
                    label={skill}
                    size="small"
                    sx={{
                      transform: isHovered ? 'translateY(-2px)' : 'none',
                      transition: 'transform 0.3s',
                      '&:hover': {
                        bgcolor: 'primary.light'
                      }
                    }}
                  />
                ))}
              </Box>
            </Grid>

            {/* Experience Preview */}
            <Grid item xs={12}>
              <Typography variant="subtitle1" color="primary" gutterBottom>
                Experience
              </Typography>
              <Box sx={{ position: 'relative' }}>
                <Paper 
                  elevation={1}
                  sx={{ 
                    p: 2, 
                    mb: 1,
                    transition: 'transform 0.3s',
                    transform: isHovered ? 'translateY(-2px)' : 'none'
                  }}
                >
                  <Typography variant="body2" color="text.primary">
                    Senior Software Engineer
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    Tech Corp • 2020 - Present
                  </Typography>
                </Paper>
              </Box>
            </Grid>
          </Grid>

          {/* AI Analysis Overlay */}
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              right: 0,
              p: 2,
              opacity: isHovered ? 1 : 0,
              transform: isHovered ? 'translateX(0)' : 'translateX(20px)',
              transition: 'all 0.3s',
            }}
          >
            <Paper
              elevation={4}
              sx={{
                p: 2,
                bgcolor: 'rgba(25, 118, 210, 0.95)',
                color: 'white',
                borderRadius: 2,
              }}
            >
              <Typography variant="subtitle2" gutterBottom>
                AI Analysis in Progress
              </Typography>
              <LinearProgress
                sx={{
                  mb: 1,
                  height: 6,
                  borderRadius: 3,
                  bgcolor: 'rgba(255,255,255,0.2)',
                  '& .MuiLinearProgress-bar': {
                    bgcolor: 'white'
                  }
                }}
              />
              <Box sx={{ display: 'flex', gap: 1 }}>
                <Chip
                  size="small"
                  label="Analyzing Skills"
                  sx={{ bgcolor: 'rgba(255,255,255,0.2)', color: 'white' }}
                />
                <Chip
                  size="small"
                  label="Matching Jobs"
                  sx={{ bgcolor: 'rgba(255,255,255,0.2)', color: 'white' }}
                />
              </Box>
            </Paper>
          </Box>
        </Paper>

        {/* Background Elements */}
        <Box
          sx={{
            position: 'absolute',
            top: '10%',
            right: '-5%',
            width: '200px',
            height: '200px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(33,150,243,0.2) 0%, rgba(33,150,243,0) 70%)',
            transform: isHovered ? 'scale(1.2)' : 'scale(1)',
            transition: 'transform 0.6s',
            zIndex: 1
          }}
        />
      </Box>
    </Box>
  );
};

const HomePage = () => {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleGetStarted = () => {
    if (isLoggedIn) {
      navigate('/analyze');
    } else {
      navigate('/login');
    }
  };

  const features = [
    {
      icon: <AnalyticsIcon fontSize="large" />,
      title: 'AI-Powered Analysis',
      description: 'Get detailed insights about your resume with our advanced AI analysis.',
      color: '#2196F3'
    },
    {
      icon: <PsychologyIcon fontSize="large" />,
      title: 'Smart Recommendations',
      description: 'Receive personalized suggestions to improve your resume and career prospects.',
      color: '#00C853'
    },
    {
      icon: <TimelineIcon fontSize="large" />,
      title: 'Career Guidance',
      description: 'Get expert guidance on your career path and skill development.',
      color: '#FF4081'
    },
    {
      icon: <SpeedIcon fontSize="large" />,
      title: 'Real-time Analysis',
      description: 'Instant feedback and analysis of your professional profile.',
      color: '#FF9100'
    },
    {
      icon: <WorkIcon fontSize="large" />,
      title: 'Industry Insights',
      description: 'Access current market trends and industry requirements.',
      color: '#7C4DFF'
    },
    {
      icon: <TrendingUpIcon fontSize="large" />,
      title: 'Growth Tracking',
      description: 'Monitor your professional growth and skill development.',
      color: '#00BCD4'
    }
  ];

  const steps = [
    {
      icon: <CloudUploadIcon />,
      title: 'Upload Resume',
      description: 'Simply upload your resume in PDF format'
    },
    {
      icon: <AssessmentIcon />,
      title: 'AI Analysis',
      description: 'Our AI analyzes your resume in detail'
    },
    {
      icon: <TrendingUpIcon />,
      title: 'Get Insights',
      description: 'Receive comprehensive feedback and recommendations'
    }
  ];

  return (
    <Box sx={{ overflow: 'hidden' }}>
      {/* Hero Section */}
      <Box 
        sx={{ 
          background: 'linear-gradient(135deg, #1976d2 0%, #64b5f6 100%)',
          color: 'white',
          pt: 12,
          pb: 8
        }}
      >
        <Container>
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <Fade in timeout={1000}>
                <Box>
                  <Typography
                    variant={isMobile ? 'h4' : 'h3'}
                    component="h1"
                    gutterBottom
                    sx={{
                      fontWeight: 'bold',
                      textShadow: '2px 2px 4px rgba(0,0,0,0.2)'
                    }}
                  >
                    Optimize Your Career Path with AI
                  </Typography>
                  <Typography variant="h6" paragraph sx={{ mb: 4, opacity: 0.9 }}>
                    Transform your resume with AI-powered analysis and get personalized 
                    recommendations to advance your career.
                  </Typography>
                  <Button
                    variant="contained"
                    size="large"
                    onClick={handleGetStarted}
                    sx={{
                      bgcolor: 'white',
                      color: 'primary.main',
                      px: 4,
                      py: 2,
                      fontSize: '1.1rem',
                      '&:hover': {
                        bgcolor: 'rgba(255,255,255,0.9)'
                      }
                    }}
                  >
                    Get Started Now
                  </Button>
                </Box>
              </Fade>
            </Grid>
            <Grid item xs={12} md={6}>
              <Zoom in timeout={1500}>
                <Box sx={{ position: 'relative' }}>
                  <InteractiveHeroSection />
                </Box>
              </Zoom>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* How It Works Section */}
      <Container sx={{ py: 8 }}>
        <Typography variant="h4" align="center" gutterBottom sx={{ mb: 6 }}>
          How It Works
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {steps.map((step, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Zoom in timeout={1000 + (index * 500)}>
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    p: 3,
                    transition: 'transform 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-8px)'
                    }
                  }}
                >
                  <Avatar
                    sx={{
                      width: 60,
                      height: 60,
                      bgcolor: 'primary.main',
                      mb: 2
                    }}
                  >
                    {step.icon}
                  </Avatar>
                  <Typography variant="h6" gutterBottom align="center">
                    {step.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary" align="center">
                    {step.description}
                  </Typography>
                </Card>
              </Zoom>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Features Section */}
      <Box sx={{ bgcolor: 'grey.50', py: 8 }}>
        <Container>
          <Typography variant="h4" align="center" gutterBottom sx={{ mb: 6 }}>
            Key Features
          </Typography>
          <Grid container spacing={4}>
            {features.map((feature, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Zoom in timeout={1000 + (index * 200)}>
                  <Paper
                    elevation={2}
                    sx={{
                      p: 4,
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      textAlign: 'center',
                      transition: 'all 0.3s ease-in-out',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: 6,
                        '& .feature-icon': {
                          transform: 'scale(1.1)',
                          color: feature.color
                        }
                      }
                    }}
                  >
                    <Box
                      className="feature-icon"
                      sx={{
                        transition: 'all 0.3s ease-in-out',
                        color: 'grey.700',
                        mb: 2
                      }}
                    >
                      {feature.icon}
                    </Box>
                    <Typography variant="h6" gutterBottom>
                      {feature.title}
                    </Typography>
                    <Typography color="text.secondary">
                      {feature.description}
                    </Typography>
                  </Paper>
                </Zoom>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box 
        sx={{ 
          bgcolor: 'primary.dark',
          color: 'white',
          py: 8,
          textAlign: 'center'
        }}
      >
        <Container>
          <Typography variant="h4" gutterBottom>
            Ready to Advance Your Career?
          </Typography>
          <Typography variant="h6" sx={{ mb: 4, opacity: 0.9 }}>
            Join thousands of professionals who have already optimized their resumes
          </Typography>
          <Button
            variant="contained"
            size="large"
            onClick={handleGetStarted}
            sx={{
              bgcolor: 'white',
              color: 'primary.dark',
              px: 4,
              py: 2,
              fontSize: '1.1rem',
              '&:hover': {
                bgcolor: 'rgba(255,255,255,0.9)'
              }
            }}
          >
            Get Started Free
          </Button>
        </Container>
      </Box>
    </Box>
  );
};

export default HomePage;

