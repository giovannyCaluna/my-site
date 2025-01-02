import { Box, Container, Typography } from '@mui/material';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useTranslation } from 'react-i18next';


export default function Header() {
    const { t } = useTranslation(); // `t` is the translation function

    const image = require('./../../assets/gio.jpg');
    return (<Container className="text-center my-5">
        {/* Profile Picture */}
        <Box className="d-flex justify-content-center mb-4">
            <img
                src={image}
                alt="Profile"
                className="rounded-circle"
                style={{ width: '180px', height: '180px', objectFit: 'cover', border: '3px solid #007bff' }}
            />
        </Box>
        <Typography variant="h4" gutterBottom>
        {t('welcome')}
        </Typography>
        <Typography variant="body1" color="textSecondary">
        {t('greeting')}
        </Typography>
    </Container>);

}