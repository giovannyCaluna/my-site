import Grid from '@mui/material/Grid2';
import Header from './../components/landing/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import EducationCard from './../components/landing/EducationCard';
import WorkExperienceCard from './../components/landing/WorsExperienceCard';
import Skills from './../components/landing/SkillsCard';

const LandingPage = () => {

  return (

    <Grid container spacing={2} sx={{ marginTop: 3 }} flexDirection={"row"}>
      <Grid size={{ xs: 12, sm: 12 }}>
        <Header />
      </Grid>
      <Grid size={{ xs: 12, sm: 4 }}>
        <EducationCard />
      </Grid>
      <Grid size={{ xs: 12, sm: 4 }}>
        <WorkExperienceCard />
      </Grid>
      <Grid size={{ xs: 12, sm: 4 }}>
        <Skills />
      </Grid>
    </Grid>
  );
};

export default LandingPage;
