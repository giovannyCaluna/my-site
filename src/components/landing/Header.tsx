import { Container, Box, Typography, Avatar } from '@mui/material';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

export default function Header() {
    const { t } = useTranslation(); // `t` is the translation function
    const image = require('./../../assets/gio.jpg');

    return (
        <Box
            component="header"
            sx={{
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                py: 8,
                position: 'relative',
                overflow: 'hidden',
                '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.8) 0%, rgba(118, 75, 162, 0.8) 100%)',
                    zIndex: 1,
                },
                '&::after': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: `
                        radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
                        radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
                        radial-gradient(circle at 40% 40%, rgba(120, 119, 198, 0.2) 0%, transparent 50%)
                    `,
                    zIndex: 2,
                },
            }}
        >
            <Container 
                sx={{ 
                    textAlign: 'center', 
                    position: 'relative', 
                    zIndex: 3,
                    color: 'white'
                }}
            >
                {/* Profile Picture */}
                <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "backOut" }}
                >
                    <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
                        <Avatar
                            src={image}
                            alt="Profile"
                            sx={{
                                width: 200,
                                height: 200,
                                border: '6px solid rgba(255, 255, 255, 0.3)',
                                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
                                transition: 'all 0.3s ease',
                                '&:hover': {
                                    transform: 'scale(1.05)',
                                    boxShadow: '0 25px 50px rgba(0, 0, 0, 0.4)',
                                },
                            }}
                        />
                    </Box>
                </motion.div>

                {/* Welcome Text */}
                <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                >
                    <Typography
                        variant="h1"
                        sx={{
                            mb: 3,
                            background: 'linear-gradient(45deg, #ffffff 30%, #f0f0f0 90%)',
                            backgroundClip: 'text',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
                            fontWeight: 800,
                            fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4rem' },
                        }}
                    >
                        {t('welcome')}
                    </Typography>
                </motion.div>

                <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                >
                    <Typography
                        variant="h5"
                        sx={{
                            maxWidth: '800px',
                            mx: 'auto',
                            lineHeight: 1.6,
                            color: 'rgba(255, 255, 255, 0.9)',
                            textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)',
                            fontSize: { xs: '1.1rem', sm: '1.3rem', md: '1.5rem' },
                            fontWeight: 400,
                        }}
                    >
                        {t('greeting')}
                    </Typography>
                </motion.div>
            </Container>
        </Box>
    );
}
