import { Container } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { JSX } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
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
            description: 'description1',
        },
        {
            degree: 'degree2',
            institution: 'institution2',
            thesis: 'thesis2',
            image: yachayImage,
            description: 'description2',
        },
    ];

    // Animation variants for staggered cards
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3, // Animates children sequentially
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
    };

    return (
        <Grid container spacing={2} flexDirection={"row"}>
            {/* Image Section */}
            <Grid size={{ xs: 12, sm: 12 }}>
                {/* Page Header */}
                <Container>
                    <motion.div
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <EducationHeader
                            title={t("education")}
                            subtitle={t("education_subtitle")}
                        />
                    </motion.div>
                </Container>
            </Grid>
            
            {/* Education Cards */}
            <Grid size={{ xs: 12, sm: 12 }}>
                <Container>
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        {education.map((edu, index) => (
                            <motion.div key={index} variants={itemVariants}>
                                <EducationCard
                                    degree={edu.degree}
                                    institution={edu.institution}
                                    thesis={edu.thesis}
                                    image={edu.image}
                                    description={edu.description}
                                />
                            </motion.div>
                        ))}
                    </motion.div>
                </Container>
            </Grid>
        </Grid>
    );
}

export default EducationPage;
