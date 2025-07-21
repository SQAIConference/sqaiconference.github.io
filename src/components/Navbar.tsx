import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { mainNavigation } from '../data/navigation';
import { siteConfig } from '../data/siteConfig';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const location = useLocation();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const isActiveRoute = (url: string) => {
    if (url === '/' && location.pathname === '/') return true;
    if (url !== '/' && location.pathname.startsWith(url.replace('/', ''))) return true;
    return false;
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2, fontWeight: 'bold', color: 'primary.main' }}>
        {siteConfig.shortTitle}
      </Typography>
      <List>
        <ListItem key="home" component={Link} to="/">
          <ListItemText primary="Home" />
        </ListItem>
        {mainNavigation.map((item) => (
          <ListItem
            key={item.title}
            component={Link}
            to={item.url}
          >
            <ListItemText primary={item.title} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar position="fixed" elevation={1}>
        <Toolbar>
          {isMobile && (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
          )}
          
          <Typography
            variant="h6"
            component={Link}
            to="/"
            sx={{
              flexGrow: isMobile ? 1 : 0,
              fontWeight: 'bold',
              textDecoration: 'none',
              color: 'inherit',
              mr: 4,
            }}
          >
            {siteConfig.shortTitle}
          </Typography>

          {!isMobile && (
            <Box sx={{ display: 'flex', flexGrow: 1 }}>
              <Button
                color="inherit"
                component={Link}
                to="/"
                sx={{
                  mx: 1,
                  color: isActiveRoute('/') ? 'primary.main' : 'inherit',
                  fontWeight: isActiveRoute('/') ? 'bold' : 'normal',
                }}
              >
                Home
              </Button>
              {mainNavigation.map((item) => (
                <Button
                  key={item.title}
                  color="inherit"
                  component={Link}
                  to={item.url}
                  sx={{
                    mx: 1,
                    color: isActiveRoute(item.url) ? 'primary.main' : 'inherit',
                    fontWeight: isActiveRoute(item.url) ? 'bold' : 'normal',
                  }}
                >
                  {item.title}
                </Button>
              ))}
            </Box>
          )}
        </Toolbar>
      </AppBar>

      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Navbar;