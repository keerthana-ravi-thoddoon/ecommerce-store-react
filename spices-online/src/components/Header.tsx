import { AppBar, Toolbar, Typography } from '@mui/material';

const Header = () => {
  return (
    <AppBar position="fixed" elevation={4}>
      <Toolbar>
        <Typography variant="h6" component="div">
          Spices Online
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
