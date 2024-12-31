import { Typography, Box } from '@mui/material';

function Contact() {
  return (
    <Box sx={{ textAlign: 'center', marginTop: 4 }}>
      <Typography variant="h4" gutterBottom>
        Contact
      </Typography>
      <Typography variant="body1">Email: giovannycaluna@gmail.com</Typography>
      <Typography variant="body1">Phone: +36707859869</Typography>
      <Typography variant="body1">Location: Szeged, Hungary</Typography>
    </Box>
  );
}

export default Contact;
