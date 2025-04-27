import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box sx={{ p: 2, textAlign: 'center', mt: 4, bgcolor: 'grey.200' }}>
      <Typography variant="body2">
        © 2025 MyCompany. Contact us: contact@mycompany.com
      </Typography>
    </Box>
  );
};

export default Footer;
