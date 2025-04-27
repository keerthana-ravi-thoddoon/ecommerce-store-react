import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box sx={{ p: 2, textAlign: 'center', mt: 4, bgcolor: 'grey.200' }}>
      <Typography variant="body2">
        © 2025 Spice Online. Contact us: email to be added
      </Typography>
    </Box>
  );
};

export default Footer;
