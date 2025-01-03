import { Container } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { JSX } from 'react';
import { useTranslation } from 'react-i18next';
import EducationCard from '../../components/education/EducationCard';
import EducationHeader from '../../components/education/EducationHeader';

function EducationPage(): JSX.Element {
    const szegedImage = require('./../../assets/szeged.jpg');
    const yachayImage = require('./../../assets/yachay.jpg');
    const { t } = useTranslation();


    // Education data
    const education = [
        {
            degree: 'degree1',
            institution: 'institution1',
            thesis: 'thesis1',
            image: szegedImage,
        },
        {
            degree: 'degree2',
            institution: 'institution2',
            thesis: 'thesis2',
            image: yachayImage,
        },
    ];

    return (
        <Grid container spacing={2} flexDirection={"row"}>
            {/* Image Section */}
            <Grid size={{ xs: 12, sm: 12 }}>
                {/* Page Header */}
                <Container>
                    <EducationHeader
                        title={t("education")}
                        subtitle={t("education_subtitle")}
                    />
                </Container>
            </Grid>
            {/* Education Cards */}
            <Grid size={{ xs: 12, sm: 12 }}>

            <Container>
                {education.map((edu, index) => (
                        <EducationCard
                            degree={edu.degree}
                            institution={edu.institution}
                            thesis={edu.thesis}
                            image={edu.image}
                        />
                ))}
            </Container>
            </Grid>
        </Grid>
    );
};

export default EducationPage;
