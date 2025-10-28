import Grid from '@mui/material/Grid2';
import Header from './../components/landing/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import EducationCard from './../components/landing/EducationCard';
import WorkExperienceCard from '../components/landing/WorkExperienceCard';
import HobbiesCard from './../components/landing/HobbiesCard';
import SkillsCard from './../components/landing/SkillsCard';
import SocialMediaLinks from './../components/landing/SocialMediaLinks';
import { Box, Container } from '@mui/material';
import { motion } from 'framer-motion';

const LandingPage = () => {
  // Animation variants for staggered grid items
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, // Animates children sequentially
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { 
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      } 
    },
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        bgcolor: 'background.default',
        transition: 'background-color 0.3s ease',
      }}
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Header />
      </motion.div>

      {/* Main Content */}
      <Container maxWidth="xl" sx={{ py: 8 }}>
        {/* Animated Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <Grid 
            container 
            spacing={4} 
            sx={{ 
              justifyContent: 'center',
              alignItems: 'stretch',
            }}
          >
            {/* Education Card */}
            <Grid size={{ xs: 12, sm: 6, md: 3 }}>
              <motion.div variants={itemVariants} style={{ height: '100%' }}>
                <EducationCard />
              </motion.div>
            </Grid>

            {/* Work Experience Card */}
            <Grid size={{ xs: 12, sm: 6, md: 3 }}>
              <motion.div variants={itemVariants} style={{ height: '100%' }}>
                <WorkExperienceCard />
              </motion.div>
            </Grid>

            {/* Skills Card */}
            <Grid size={{ xs: 12, sm: 6, md: 3 }}>
              <motion.div variants={itemVariants} style={{ height: '100%' }}>
                <SkillsCard />
              </motion.div>
            </Grid>

            {/* Hobbies Card */}
            <Grid size={{ xs: 12, sm: 6, md: 3 }}>
              <motion.div variants={itemVariants} style={{ height: '100%' }}>
                <HobbiesCard />
              </motion.div>
            </Grid>
          </Grid>
        </motion.div>

        {/* Social Media Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <SocialMediaLinks />
        </motion.div>
      </Container>
    </Box>
  );
};

export default LandingPage;
