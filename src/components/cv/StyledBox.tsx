import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

const StyledBox = styled(Box)(({ theme }) => ({
  margin: theme.spacing(2), // Adds consistent margin
  color: theme.palette.text.primary,
  backgroundColor: theme.palette.background.default,
  padding: theme.spacing(2),
  justifyContent: 'center',
  paddingTop: 40,
  paddingBottom: 40,
  paddingRight: 120,
  paddingLeft: 120,

  // Apply padding = 0 on mobile devices
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(2),
    paddingTop: 40,
    paddingBottom: 40,
    paddingRight: 10,
    paddingLeft: 10,
  },
}));

export default StyledBox;
