import React from 'react';
import {
  Box,
  Paper,
  Typography,
  Chip,
  LinearProgress,
  Grid,
  Card,
  CardContent,
  Rating,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Avatar,
  Divider,
  Stack
} from '@mui/material';
import {
  CheckCircle as CheckCircleIcon,
  Error as ErrorIcon,
  TrendingUp as TrendingUpIcon,
  Build as BuildIcon,
  ExpandMore as ExpandMoreIcon,
  Star as StarIcon,
  Timeline as TimelineIcon,
  School as SchoolIcon,
  Work as WorkIcon,
  Assessment as AssessmentIcon,
  TrendingDown as TrendingDownIcon,
  Speed as SpeedIcon,
  Lightbulb as LightbulbIcon,
  LocalLibrary as LocalLibraryIcon
} from '@mui/icons-material';

const AnalysisResult = ({ result, functionalArea, designation, yearsOfExperience }) => {
  const detailedResult = {
    ...result,
    detailedAnalysis: {
      summary: {
        overallScore: result.matchScore,
        roleAlignment: 90,
        experienceMatch: 85,
        skillsMatch: 88,
        potentialScore: 92
      },
      keyMetrics: {
        relevantExperience: `${(parseFloat(yearsOfExperience) * 0.8).toFixed(1)} years`,
        skillCoverage: '85%',
        industryAlignment: 'High',
        careerGrowth: 'Strong',
        learningAgility: 'Excellent'
      },
      skillBreakdown: {
        technical: {
          advanced: result.keySkills,
          intermediate: ['Git', 'Agile', 'REST APIs', 'Testing'],
          basic: ['Cloud Computing', 'DevOps'],
          missing: result.skillGaps
        },
        soft: {
          strong: ['Communication', 'Problem Solving', 'Team Collaboration'],
          moderate: ['Leadership', 'Project Management'],
          needsImprovement: ['Stakeholder Management']
        }
      },
      careerTrajectory: {
        currentLevel: 'Mid-Senior Level',
        potentialRoles: [
          'Technical Lead',
          'Senior Software Engineer',
          'Solution Architect'
        ],
        timeToNextLevel: '1-2 years',
        developmentAreas: [
          'Technical Leadership',
          'System Design',
          'Team Management'
        ]
      },
      marketAnalysis: {
        demandLevel: 'High',
        salaryRange: {
          min: '80K',
          max: '120K',
          median: '95K',
          trend: 'Upward'
        },
        industryTrends: [
          'Increasing demand for full-stack developers',
          'Growing emphasis on cloud technologies',
          'Rising importance of AI/ML integration'
        ],
        locationOpportunities: [
          'Major tech hubs',
          'Remote work opportunities',
          'Growing startup ecosystem'
        ]
      },
      learningRecommendations: {
        certifications: [
          'AWS Solutions Architect',
          'Google Cloud Professional',
          'Azure DevOps Engineer'
        ],
        skillsToAcquire: [
          'Microservices Architecture',
          'Container Orchestration',
          'Cloud Native Development'
        ],
        resources: [
          'Online courses on cloud platforms',
          'System design workshops',
          'Technical leadership programs'
        ]
      }
    }
  };

  return (
    <Box>
      {/* Executive Summary Card */}
      <Card elevation={3} sx={{ mb: 4, ...cardStyles }}>
        <CardContent>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
            <Avatar sx={{ bgcolor: 'primary.main', mr: 2 }}>
              <AssessmentIcon />
            </Avatar>
            <Typography variant="h5" color="primary">
              Executive Summary
            </Typography>
          </Box>

          <Grid container spacing={3}>
            {/* Profile Overview */}
            <Grid item xs={12} md={6}>
              <Card variant="outlined">
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Profile Overview
                  </Typography>
                  <Typography variant="body1" paragraph>
                    {`${designation} with ${yearsOfExperience} years of experience in ${functionalArea}`}
                  </Typography>
                  <Box sx={{ mt: 2 }}>
                    <Typography variant="subtitle2" gutterBottom>
                      Overall Match Score
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <Box sx={{ flexGrow: 1, mr: 1 }}>
                        <LinearProgress 
                          variant="determinate" 
                          value={detailedResult.detailedAnalysis.summary.overallScore}
                          sx={progressStyles}
                        />
                      </Box>
                      <Typography variant="h6">
                        {detailedResult.detailedAnalysis.summary.overallScore}%
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Grid>

            {/* Key Metrics */}
            <Grid item xs={12} md={6}>
              <Card variant="outlined">
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Key Metrics
                  </Typography>
                  <Stack spacing={2}>
                    {Object.entries(detailedResult.detailedAnalysis.keyMetrics).map(([key, value]) => (
                      <Box key={key} sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Typography variant="body2" color="text.secondary">
                          {key.replace(/([A-Z])/g, ' $1').trim()}
                        </Typography>
                        <Typography variant="body2" fontWeight="bold">
                          {value}
                        </Typography>
                      </Box>
                    ))}
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      {/* Skills Analysis */}
      <Accordion defaultExpanded sx={accordionStyles}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <LocalLibraryIcon sx={{ mr: 2 }} />
            <Typography variant="h6">Skills Analysis</Typography>
          </Box>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container spacing={3}>
            {/* Technical Skills */}
            <Grid item xs={12} md={6}>
              <Card variant="outlined">
                <CardContent>
                  <Typography variant="h6" gutterBottom color="primary">
                    Technical Skills
                  </Typography>
                  {Object.entries(detailedResult.detailedAnalysis.skillBreakdown.technical).map(([level, skills]) => (
                    <Box key={level} sx={{ mb: 2 }}>
                      <Typography variant="subtitle2" gutterBottom>
                        {level.charAt(0).toUpperCase() + level.slice(1)}
                      </Typography>
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                        {skills.map((skill) => (
                          <Chip
                            key={skill}
                            label={skill}
                            variant="outlined"
                            color={level === 'missing' ? 'error' : 'primary'}
                            size="small"
                          />
                        ))}
                      </Box>
                    </Box>
                  ))}
                </CardContent>
              </Card>
            </Grid>

            {/* Soft Skills */}
            <Grid item xs={12} md={6}>
              <Card variant="outlined">
                <CardContent>
                  <Typography variant="h6" gutterBottom color="primary">
                    Soft Skills
                  </Typography>
                  {Object.entries(detailedResult.detailedAnalysis.skillBreakdown.soft).map(([level, skills]) => (
                    <Box key={level} sx={{ mb: 2 }}>
                      <Typography variant="subtitle2" gutterBottom>
                        {level.replace(/([A-Z])/g, ' $1').trim()}
                      </Typography>
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                        {skills.map((skill) => (
                          <Chip
                            key={skill}
                            label={skill}
                            variant="outlined"
                            color={level === 'needsImprovement' ? 'warning' : 'success'}
                            size="small"
                          />
                        ))}
                      </Box>
                    </Box>
                  ))}
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>

      {/* Career Trajectory */}
      <Accordion sx={accordionStyles}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <TimelineIcon sx={{ mr: 2 }} />
            <Typography variant="h6">Career Trajectory</Typography>
          </Box>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Card variant="outlined">
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Current Position
                  </Typography>
                  <List>
                    <ListItem>
                      <ListItemIcon>
                        <WorkIcon color="primary" />
                      </ListItemIcon>
                      <ListItemText 
                        primary="Current Level"
                        secondary={detailedResult.detailedAnalysis.careerTrajectory.currentLevel}
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <TimelineIcon color="primary" />
                      </ListItemIcon>
                      <ListItemText 
                        primary="Time to Next Level"
                        secondary={detailedResult.detailedAnalysis.careerTrajectory.timeToNextLevel}
                      />
                    </ListItem>
                  </List>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} md={6}>
              <Card variant="outlined">
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Growth Opportunities
                  </Typography>
                  <List>
                    {detailedResult.detailedAnalysis.careerTrajectory.potentialRoles.map((role, index) => (
                      <ListItem key={index}>
                        <ListItemIcon>
                          <TrendingUpIcon color="success" />
                        </ListItemIcon>
                        <ListItemText primary={role} />
                      </ListItem>
                    ))}
                  </List>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>

      {/* Market Analysis */}
      <Accordion sx={accordionStyles}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <SpeedIcon sx={{ mr: 2 }} />
            <Typography variant="h6">Market Analysis</Typography>
          </Box>
        </AccordionSummary>
        <AccordionDetails>
          {/* Market analysis content */}
        </AccordionDetails>
      </Accordion>

      {/* Learning & Development */}
      <Accordion sx={accordionStyles}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <LightbulbIcon sx={{ mr: 2 }} />
            <Typography variant="h6">Learning & Development</Typography>
          </Box>
        </AccordionSummary>
        <AccordionDetails>
          {/* Learning recommendations content */}
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

const cardStyles = {
  background: 'rgba(255, 255, 255, 0.9)',
  backdropFilter: 'blur(10px)',
  transition: 'all 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-2px)',
    boxShadow: 6
  }
};

const accordionStyles = {
  mb: 2,
  '&:before': {
    display: 'none',
  },
  background: 'rgba(255, 255, 255, 0.9)',
  backdropFilter: 'blur(10px)',
};

const progressStyles = {
  height: 10,
  borderRadius: 5,
  backgroundColor: 'rgba(33, 203, 243, .3)',
  '& .MuiLinearProgress-bar': {
    background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
  }
};

export default AnalysisResult;

