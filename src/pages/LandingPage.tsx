import Grid from '@mui/material/Grid2';
import Header from './../components/landing/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import EducationCard from './../components/landing/EducationCard';
import WorkExperienceCard from '../components/landing/WorkExperienceCard';
import HobbiesCard from './../components/landing/HobbiesCard';
import SkillsCard from './../components/landing/SkillsCard';
import SocialMediaLinks from './../components/landing/SocialMediaLinks';
import { Stack } from 'react-bootstrap';
import { motion } from 'framer-motion';

const LandingPage = () => {
  // Animation variants for staggered grid items
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Animates children sequentially
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <Stack>
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Header />
      </motion.div>

      {/* Animated Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <Grid container spacing={2} sx={{ margin: 5 }} flexDirection={"row"}>
          {/* Education Card */}
          <Grid size={{ xs: 12, sm: 3 }}>
            <motion.div variants={itemVariants}>
              <EducationCard />
            </motion.div>
          </Grid>

          {/* Work Experience Card */}
          <Grid size={{ xs: 12, sm: 3 }}>
            <motion.div variants={itemVariants}>
              <WorkExperienceCard />
            </motion.div>
          </Grid>

          {/* Skills Card */}
          <Grid size={{ xs: 12, sm: 3 }}>
            <motion.div variants={itemVariants}>
              <SkillsCard />
            </motion.div>
          </Grid>

          {/* Hobbies Card */}
          <Grid size={{ xs: 12, sm: 3 }}>
            <motion.div variants={itemVariants}>
              <HobbiesCard />
            </motion.div>
          </Grid>
        </Grid>
      </motion.div>

      {/* Social Media Links */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <SocialMediaLinks />
      </motion.div>
    </Stack>
  );
};

export default LandingPage;
