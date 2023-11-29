import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Button } from '@mui/material';

export const Header = () => {
    return (
        <AppBar sx={{ top: 0, left: 0, right: 0, zIndex: 100 }}>
            <Toolbar sx={{ display: 'flex', justifyContent: 'center' }}>
                <Button color="inherit" component={Link} to="/" sx={{ margin: '0 1rem' }}>
                    Home
                </Button>
                <Button color="inherit" component={Link} to="/gallery" sx={{ margin: '0 1rem' }}>
                    Gallery
                </Button>
            </Toolbar>
        </AppBar>
    );
};

