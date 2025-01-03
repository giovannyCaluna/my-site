import { Container } from '@mui/material';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useTranslation } from 'react-i18next';
import SocialMediaLinks from './SocialMediaLinks';

export default function Header() {
    const { t } = useTranslation(); // `t` is the translation function
    const image = require('./../../assets/gio.jpg');

    return (
        <header className="bg-light py-5">
            <Container className="text-center">
                {/* Profile Picture */}
                <div className="d-flex justify-content-center mb-4">
                    <img
                        src={image}
                        alt="Profile"
                        className="rounded-circle border border-primary"
                        style={{ width: '180px', height: '180px', objectFit: 'cover' }}
                    />
                </div>
                {/* Welcome Text */}
                <h1 className="display-4 fw-bold text-primary">{t('welcome')}</h1>
                <p className="lead text-secondary">{t('greeting')}</p>
            </Container>
        </header>
    );
}
