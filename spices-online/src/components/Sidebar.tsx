import { Box, Button } from '@mui/material';

const Sidebar = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, p: 3}}>
      <Button variant="contained">Home</Button>
      <Button variant="contained">Products</Button>
      <Button variant="contained">About</Button>
      <Button variant="contained">Contact</Button>
    </Box>
  );
};

export default Sidebar;
