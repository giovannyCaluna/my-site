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
}));

export default StyledBox;
