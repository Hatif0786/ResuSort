import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  IconButton,
  InputAdornment,
  Divider,
  useTheme,
  CircularProgress,
  Alert,
} from '@mui/material';
import {
  Visibility,
  VisibilityOff,
  Email,
  Lock,
  Person,
  Google,
  GitHub,
  LinkedIn,
} from '@mui/icons-material';
import { motion, AnimatePresence } from 'framer-motion';

const LoginRegister = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      if (isLogin) {
        if (formData.email === 'test@example.com' && formData.password === 'password') {
          setSuccess('Login successful!');
          localStorage.setItem('isLoggedIn', 'true');
          setTimeout(() => navigate('/analyze'), 1000);
        } else {
          setError('Invalid credentials');
        }
      } else {
        if (formData.password !== formData.confirmPassword) {
          throw new Error('Passwords do not match');
        }
        setSuccess('Registration successful! Please login.');
        setIsLogin(true);
        setFormData({ name: '', email: '', password: '', confirmPassword: '' });
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const socialLogin = (provider) => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setSuccess(`${provider} login successful!`);
      localStorage.setItem('isLoggedIn', 'true');
      setTimeout(() => navigate('/analyze'), 1000);
    }, 1500);
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #1976d2 0%, #64b5f6 100%)',
        pt: { xs: 12, md: 16 },
        pb: 8,
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'url(/pattern.svg) repeat',
          opacity: 0.1,
          pointerEvents: 'none'
        }
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center" justifyContent="center">
          {/* Left Side - Welcome Message */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Box sx={{ color: 'white', pr: { md: 8 } }}>
                <Typography variant="h2" sx={{ mb: 4, fontWeight: 'bold' }}>
                  {isLogin ? 'Welcome Back!' : 'Join ResuSort'}
                </Typography>
                <Typography variant="h5" sx={{ mb: 4, opacity: 0.9 }}>
                  {isLogin
                    ? 'Transform your career journey with AI-powered resume analysis'
                    : 'Create an account and start optimizing your resume today'}
                </Typography>
                <Box sx={{ display: 'flex', gap: 2, mb: 4 }}>
                  {['Smart Analysis', 'Career Insights', 'Expert Recommendations'].map((feature, index) => (
                    <motion.div
                      key={feature}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.2 }}
                    >
                      <Card sx={{ bgcolor: 'rgba(255, 255, 255, 0.1)', p: 2 }}>
                        <Typography variant="body1" sx={{ color: 'white' }}>
                          {feature}
                        </Typography>
                      </Card>
                    </motion.div>
                  ))}
                </Box>
              </Box>
            </motion.div>
          </Grid>

          {/* Right Side - Login/Register Form */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card
                elevation={24}
                sx={{
                  borderRadius: 4,
                  backdropFilter: 'blur(20px)',
                  bgcolor: 'rgba(255, 255, 255, 0.95)',
                }}
              >
                <CardContent sx={{ p: 4 }}>
                  <AnimatePresence mode="wait">
                    {(error || success) && (
                      <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                      >
                        <Alert 
                          severity={error ? 'error' : 'success'} 
                          sx={{ mb: 3 }}
                          variant="filled"
                        >
                          {error || success}
                        </Alert>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <form onSubmit={handleSubmit}>
                    <Box sx={{ mb: 4, textAlign: 'center' }}>
                      <img 
                        src="/logo-full.svg" 
                        alt="ResuSort"
                        style={{ 
                          height: 48,
                          width: 'auto',
                          marginBottom: 24
                        }} 
                      />
                      <Typography variant="h4" gutterBottom>
                        {isLogin ? 'Sign In' : 'Create Account'}
                      </Typography>
                      <Typography color="text.secondary">
                        {isLogin
                          ? 'Access your ResuSort account'
                          : 'Start your journey with ResuSort'}
                      </Typography>
                    </Box>

                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                      {!isLogin && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                        >
                          <TextField
                            fullWidth
                            label="Full Name"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            InputProps={{
                              startAdornment: (
                                <InputAdornment position="start">
                                  <Person color="primary" />
                                </InputAdornment>
                              ),
                            }}
                          />
                        </motion.div>
                      )}

                      <TextField
                        fullWidth
                        label="Email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <Email color="primary" />
                            </InputAdornment>
                          ),
                        }}
                      />

                      <TextField
                        fullWidth
                        label="Password"
                        type={showPassword ? 'text' : 'password'}
                        required
                        value={formData.password}
                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <Lock color="primary" />
                            </InputAdornment>
                          ),
                          endAdornment: (
                            <InputAdornment position="end">
                              <IconButton
                                onClick={() => setShowPassword(!showPassword)}
                                edge="end"
                              >
                                {showPassword ? <VisibilityOff /> : <Visibility />}
                              </IconButton>
                            </InputAdornment>
                          ),
                        }}
                      />

                      {!isLogin && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                        >
                          <TextField
                            fullWidth
                            label="Confirm Password"
                            type={showPassword ? 'text' : 'password'}
                            required
                            value={formData.confirmPassword}
                            onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                            InputProps={{
                              startAdornment: (
                                <InputAdornment position="start">
                                  <Lock color="primary" />
                                </InputAdornment>
                              ),
                            }}
                          />
                        </motion.div>
                      )}

                      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                        <Button
                          type="submit"
                          fullWidth
                          variant="contained"
                          size="large"
                          disabled={isLoading}
                          sx={{
                            height: 56,
                            background: theme.palette.primary.main,
                            '&:hover': {
                              background: theme.palette.primary.dark,
                            },
                          }}
                        >
                          {isLoading ? (
                            <CircularProgress size={24} color="inherit" />
                          ) : (
                            isLogin ? 'Sign In' : 'Create Account'
                          )}
                        </Button>
                      </motion.div>
                    </Box>

                    <Box sx={{ mt: 4, mb: 3 }}>
                      <Divider>
                        <Typography color="text.secondary">
                          Or continue with
                        </Typography>
                      </Divider>
                    </Box>

                    <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mb: 4 }}>
                      {[
                        { icon: <Google />, name: 'Google', color: '#DB4437' },
                        { icon: <GitHub />, name: 'GitHub', color: '#333' },
                        { icon: <LinkedIn />, name: 'LinkedIn', color: '#0077B5' },
                      ].map((social) => (
                        <motion.div
                          key={social.name}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <IconButton
                            onClick={() => socialLogin(social.name)}
                            sx={{
                              bgcolor: social.color,
                              color: 'white',
                              width: 50,
                              height: 50,
                              '&:hover': {
                                bgcolor: social.color,
                                opacity: 0.9,
                              },
                            }}
                          >
                            {social.icon}
                          </IconButton>
                        </motion.div>
                      ))}
                    </Box>

                    <Box sx={{ textAlign: 'center' }}>
                      <Button
                        onClick={() => {
                          setIsLogin(!isLogin);
                          setError('');
                          setSuccess('');
                        }}
                        sx={{
                          textTransform: 'none',
                          color: theme.palette.primary.main,
                        }}
                      >
                        {isLogin
                          ? "Don't have an account? Sign Up"
                          : 'Already have an account? Sign In'}
                      </Button>
                    </Box>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default LoginRegister;

