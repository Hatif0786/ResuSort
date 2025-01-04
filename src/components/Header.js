import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Avatar,
  Divider,
  useScrollTrigger,
  Slide,
  Stack,
  useTheme,
  useMediaQuery
} from '@mui/material';
import {
  KeyboardArrowDown,
  AccountCircle,
  Assessment,
  History,
  Settings,
  Logout,
  Menu as MenuIcon
} from '@mui/icons-material';
import { useNavigate, useLocation } from 'react-router-dom';

const HideOnScroll = (props) => {
  const { children } = props;
  const trigger = useScrollTrigger();
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
};

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMenuAnchor, setMobileMenuAnchor] = useState(null);

  const handleProfileMenuOpen = (event) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);
  const handleMobileMenuOpen = (event) => setMobileMenuAnchor(event.currentTarget);
  const handleMobileMenuClose = () => setMobileMenuAnchor(null);

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    handleMenuClose();
    navigate('/login');
  };

  const isLoginPage = location.pathname === '/login';

  const menuItems = [
    { label: 'Analyze Resume', icon: <Assessment />, action: () => navigate('/analyze') },
    { label: 'History', icon: <History />, action: () => navigate('/history') },
    { label: 'Settings', icon: <Settings />, action: () => navigate('/settings') },
  ];

  return (
    <HideOnScroll>
      <AppBar 
        position="fixed"
        sx={{
          background: isLoginPage 
            ? 'transparent'
            : 'linear-gradient(135deg, #2B5BA9 0%, #4377D1 100%)',
          borderBottom: isLoginPage ? '1px solid rgba(255,255,255,0.1)' : 'none',
          backdropFilter: 'blur(10px)',
        }}
      >
        <Container maxWidth="xl">
          <Toolbar 
            sx={{ 
              py: 1.5,
              px: { xs: 1, sm: 2 },
              gap: 2,
            }}
          >
            {/* Logo */}
            <Box
              onClick={() => navigate('/')}
              sx={{
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: { xs: 1, md: 2 },
                mr: 4,
              }}
            >
              {isMobile ? (
                <img 
                  src="/logo-icon.svg" 
                  alt="ResuSort"
                  style={{ 
                    height: 32,
                    width: 'auto',
                    filter: isLoginPage ? 'none' : 'brightness(0) invert(1)'
                  }} 
                />
              ) : (
                <img 
                  src="/logo-full.svg" 
                  alt="ResuSort"
                  style={{ 
                    height: 40,
                    width: 'auto',
                    filter: isLoginPage ? 'none' : 'brightness(0) invert(1)'
                  }} 
                />
              )}
            </Box>

            {/* Desktop Navigation */}
            {!isMobile && (
              <Stack 
                direction="row" 
                spacing={1}
                alignItems="center"
                sx={{ flexGrow: 1 }}
              >
                {isLoggedIn && menuItems.map((item) => (
                  <Button
                    key={item.label}
                    startIcon={item.icon}
                    onClick={item.action}
                    sx={{
                      color: isLoginPage ? 'primary.main' : 'white',
                      '&:hover': {
                        backgroundColor: isLoginPage 
                          ? 'rgba(43, 91, 169, 0.08)'
                          : 'rgba(255, 255, 255, 0.08)',
                      }
                    }}
                  >
                    {item.label}
                  </Button>
                ))}
              </Stack>
            )}

            {/* User Menu */}
            <Box sx={{ ml: 'auto' }}>
              {isLoggedIn ? (
                <>
                  {isMobile ? (
                    <IconButton
                      color="inherit"
                      onClick={handleMobileMenuOpen}
                      sx={{ color: isLoginPage ? 'primary.main' : 'white' }}
                    >
                      <MenuIcon />
                    </IconButton>
                  ) : (
                    <Button
                      onClick={handleProfileMenuOpen}
                      startIcon={<Avatar sx={{ width: 32, height: 32 }}>J</Avatar>}
                      endIcon={<KeyboardArrowDown />}
                      sx={{
                        color: isLoginPage ? 'primary.main' : 'white',
                        '&:hover': {
                          backgroundColor: isLoginPage 
                            ? 'rgba(43, 91, 169, 0.08)'
                            : 'rgba(255, 255, 255, 0.08)',
                        }
                      }}
                    >
                      John Doe
                    </Button>
                  )}
                </>
              ) : (
                <Button
                  variant="contained"
                  onClick={() => navigate('/login')}
                  sx={{
                    bgcolor: isLoginPage ? 'primary.main' : 'white',
                    color: isLoginPage ? 'white' : 'primary.main',
                    '&:hover': {
                      bgcolor: isLoginPage ? 'primary.dark' : '#f3f3f3',
                    }
                  }}
                >
                  Sign In
                </Button>
              )}
            </Box>

            {/* Desktop Profile Menu */}
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
              PaperProps={{
                elevation: 3,
                sx: {
                  mt: 1.5,
                  minWidth: 200,
                  borderRadius: 2,
                }
              }}
            >
              <MenuItem onClick={handleMenuClose}>
                <AccountCircle sx={{ mr: 2 }} /> Profile
              </MenuItem>
              <Divider />
              <MenuItem onClick={handleLogout} sx={{ color: 'error.main' }}>
                <Logout sx={{ mr: 2 }} /> Logout
              </MenuItem>
            </Menu>

            {/* Mobile Menu */}
            <Menu
              anchorEl={mobileMenuAnchor}
              open={Boolean(mobileMenuAnchor)}
              onClose={handleMobileMenuClose}
              PaperProps={{
                elevation: 3,
                sx: {
                  mt: 1.5,
                  minWidth: 200,
                  borderRadius: 2,
                }
              }}
            >
              {menuItems.map((item) => (
                <MenuItem 
                  key={item.label}
                  onClick={() => {
                    item.action();
                    handleMobileMenuClose();
                  }}
                >
                  {item.icon}
                  <Typography sx={{ ml: 2 }}>{item.label}</Typography>
                </MenuItem>
              ))}
              <Divider />
              <MenuItem onClick={handleLogout} sx={{ color: 'error.main' }}>
                <Logout sx={{ mr: 2 }} /> Logout
              </MenuItem>
            </Menu>
          </Toolbar>
        </Container>
      </AppBar>
    </HideOnScroll>
  );
};

export default Header;

