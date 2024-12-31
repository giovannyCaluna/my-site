import { Typography, Box } from '@mui/material';

function Header() {
  return (
    <Box component="header" sx={{ textAlign: 'center', marginBottom: 4 }}>
      <Typography variant="h4" component="h1">
        Giovanny E. Caluña
      </Typography>
      <Typography variant="body1">
        Email: giovannycaluna@gmail.com | Phone: +36707859869 | Location: Szeged, Hungary
      </Typography>
    </Box>
  );
}

export default Header;
