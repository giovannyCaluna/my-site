import { Box, Typography } from '@mui/material';

interface SectionProps {
  title: string;
  children: React.ReactNode;
}

function Section({ title, children }: SectionProps) {
  return (
    <Box component="section" sx={{ marginBottom: 4 }}>
      <Typography
        variant="h5"
        component="h2"
        sx={{
          color: 'primary.main',
          borderBottom: '2px solid',
          borderColor: 'divider',
          paddingBottom: 1,
        }}
      >
        {title}
      </Typography>
      <Box sx={{ marginTop: 2 }}>{children}</Box>
    </Box>
  );
}

export default Section;
