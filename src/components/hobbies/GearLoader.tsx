import React from 'react';
import { Box, Typography } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';

const GearLoader: React.FC = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundColor: '#f5f5f5',
      }}
    >
      {/* Animated Gear Icon */}
      <Box
        sx={{
          animation: 'spin 2s linear infinite', // CSS keyframe animation
          fontSize: 100, // Adjust size of the gear
          color: '#1976d2', // Primary color for the gear
        }}
      >
        <SettingsIcon fontSize="inherit" />
      </Box>

      {/* Text Below the Gear */}
      <Typography
        variant="h6"
        color="text.secondary"
        sx={{ marginTop: 2, textAlign: 'center' }}
      >
        I'm working on this page...
      </Typography>

      {/* CSS Keyframes */}
      <style>
        {`
          @keyframes spin {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }
        `}
      </style>
    </Box>
  );
};

export default GearLoader;
