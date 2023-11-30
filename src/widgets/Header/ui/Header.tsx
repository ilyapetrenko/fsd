import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Button } from '@mui/material';

export const Header = () => {
  return (
    <AppBar
      sx={{ top: 0, left: 0, right: 0, zIndex: 100, backgroundColor: '#333' }}
    >
      <Toolbar sx={{ display: 'flex', justifyContent: 'center' }}>
        <Button
          color="inherit"
          component={Link}
          to="/"
          sx={{ margin: '0 1rem', fontFamily: 'Open Sans, sans-serif' }}
        >
          Home
        </Button>
        <Button
          color="inherit"
          component={Link}
          to="/gallery"
          sx={{ margin: '0 1rem', fontFamily: 'Open Sans, sans-serif' }}
        >
          Gallery
        </Button>
        <Button
          color="inherit"
          component={Link}
          to="/contacts"
          sx={{ margin: '0 1rem', fontFamily: 'Open Sans, sans-serif' }}
        >
          Contacts
        </Button>
      </Toolbar>
    </AppBar>
  );
};
