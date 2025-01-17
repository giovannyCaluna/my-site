import WorkHeader from '../../components/work/WorkHeader';
import Grid from '@mui/material/Grid2';
import { Container } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import WorkCard from '../../components/work/WorkCard';
interface WorkExperienceItem {
  title: string;
  company: string;
  country: string;
  modality: string;
  responsibilities: string[];
}


function WorkExperiencePage() {

  const digevo = require('./../../assets/digevo.png');
  const urbadigital = require('./../../assets/urbadigital.png');
  const kontri = require('./../../assets/kontri.png');
  const szeged = require('./../../assets/uszeged.png');
  const kruger = require('./../../assets/kruger.png');

  const imageArray = [digevo, urbadigital, kontri,szeged, kruger];

  const { t } = useTranslation();

  // Fetch and cast the work experience data
  const workExperienceList = t('workExperienceList', { returnObjects: true }) as WorkExperienceItem[];

  return (

    <Grid container spacing={2} flexDirection={"row"}>
      {/* Image Section */}
      <Grid size={{ xs: 12, sm: 12 }}>
        {/* Page Header */}
        <Container>
          <WorkHeader
            title={t("workExperience")}
            subtitle={t("workExperience_subtitle")}
          />
        </Container>
      </Grid>
      {/* Education Cards */}
      <Grid size={{ xs: 12, sm: 12 }}>

        <Container>
          {workExperienceList.map((exp, index) => (
                        <WorkCard
                            title={exp.title}
                            company={exp.company}
                            country={exp.country}
                            modality={exp.modality}
                            responsibilities={exp.responsibilities}
                            image={imageArray[index]}
                        />
                ))}
        </Container>
      </Grid>
    </Grid>

  );
}

export default WorkExperiencePage;