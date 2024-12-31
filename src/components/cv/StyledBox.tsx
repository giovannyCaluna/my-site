import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

const StyledBox = styled(Box)(({ theme }) => ({
  margin: theme.spacing(2), // Adds consistent margin
  color: theme.palette.text.primary,
}));

export default StyledBox;
