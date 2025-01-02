import { Stack } from '@mui/material';
import { JSX } from 'react';
import InitialCard from '../components/start/InitialCard';

function Index(): JSX.Element {
  return (
    <Stack
      direction="row"
      spacing={2}
      sx={{
        textAlign: 'center',
        justifyContent: 'center',  // Horizontally center the items
        alignItems: 'center',      // Vertically center the items
        height: '100vh',           // Ensure the Stack takes up the full viewport height
      }}
    >
      <InitialCard  />
    </Stack>
    
  );
}

export default Index;
