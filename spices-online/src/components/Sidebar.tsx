import { Box, Button } from '@mui/material';
import '../styles/sidebar.css';

const SideBar = () => {
  return (
    <Box sx={{ height: '100vh', backgroundColor: '#e0f7fa'}}>
      <Button variant="text" fullWidth className='sidebar-button'>Home</Button>
      <Button variant="text" fullWidth className='sidebar-button'>Products</Button>
      <Button variant="text" fullWidth className='sidebar-button'>About</Button>
      <Button variant="text" fullWidth className='sidebar-button'>Contact</Button>
    </Box>
  );
};

export default SideBar;
