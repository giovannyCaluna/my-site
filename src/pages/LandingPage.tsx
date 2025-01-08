import Grid from '@mui/material/Grid2';
import Header from './../components/landing/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import EducationCard from './../components/landing/EducationCard';
import WorkExperienceCard from '../components/landing/WorkExperienceCard';
import HobbiesCard from './../components/landing/HobbiesCard';
import SkillsCard from './../components/landing/SkillsCard';
import SocialMediaLinks from './../components/landing/SocialMediaLinks';
import { Stack } from 'react-bootstrap';

const LandingPage = () => {
  return (
    <Stack>
<Grid container spacing={2} sx={{ margin:5 }} flexDirection={"row"}>
      <Grid size={{ xs: 12, sm: 12 }}>
        <Header />
      </Grid>
      <Grid size={{ xs: 12, sm: 3 }}>
        <EducationCard />
      </Grid>
      <Grid size={{ xs: 12, sm: 3 }}>
        <WorkExperienceCard />
      </Grid>
      <Grid size={{ xs: 12, sm: 3 }}>
        <SkillsCard />
      </Grid>
      <Grid size={{ xs: 12, sm: 3 }}>
        <HobbiesCard />
      </Grid>
    </Grid>
    
    <SocialMediaLinks />

    </Stack>
    


  );
};

export default LandingPage;
