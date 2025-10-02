import GithubIcon from '@mui/icons-material/GitHub'; // Represents GitHub
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter'; // Represents X
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Box, IconButton, Tooltip, Container, Typography } from '@mui/material';
import React from 'react';
import { motion } from 'framer-motion';

// Define a type for social media links
interface SocialMediaLink {
    name: string;
    href: string;
    color?: string;
    icon: React.ReactNode;
}

const SocialMediaLinks: React.FC = () => {
    // Array of social media links
    const links: SocialMediaLink[] = [
        {
            name: 'Instagram',
            href: 'https://www.instagram.com/giovanny_eduardo',
            color: '#E4405F',
            icon: <InstagramIcon fontSize="large" />,
        },
        {
            name: 'GitHub',
            href: 'https://github.com/giovannyCaluna',
            color: '#333',
            icon: <GithubIcon fontSize="large" />,
        },
        {
            name: 'X (Twitter)',
            href: 'https://x.com/giiovhanny',
            color: '#1DA1F2',
            icon: <TwitterIcon fontSize="large" />,
        },
        {
            name: 'LinkedIn',
            href: 'https://www.linkedin.com/in/giovanny-caluña-829b57102/',
            color: '#0077B5',
            icon: <LinkedInIcon fontSize="large" />,
        },
        {
            name: 'WhatsApp',
            href: 'https://wa.me/+593982448042',
            color: '#25D366',
            icon: <WhatsAppIcon fontSize="large" />,
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20, scale: 0.8 },
        visible: { 
            opacity: 1, 
            y: 0, 
            scale: 1,
            transition: { 
                duration: 0.5,
                ease: "backOut"
            } 
        },
    };

    return (
        <Container maxWidth="md" sx={{ py: 6 }}>
            <Box 
                sx={{
                    textAlign: 'center',
                    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(248, 250, 252, 0.9) 100%)',
                    backdropFilter: 'blur(10px)',
                    borderRadius: 4,
                    py: 6,
                    px: 4,
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                }}
            >
                <Typography
                    variant="h4"
                    sx={{
                        mb: 4,
                        fontWeight: 700,
                        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                        backgroundClip: 'text',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                    }}
                >
                    Let's Connect!
                </Typography>
                
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <Box
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        gap={2}
                        sx={{ flexWrap: 'wrap' }}
                    >
                        {links.map((link, index) => (
                            <motion.div key={link.name} variants={itemVariants}>
                                <Tooltip 
                                    title={link.name}
                                    arrow
                                    componentsProps={{
                                        tooltip: {
                                            sx: {
                                                bgcolor: link.color,
                                                '& .MuiTooltip-arrow': {
                                                    color: link.color,
                                                },
                                            },
                                        },
                                    }}
                                >
                                    <IconButton
                                        href={link.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        sx={{
                                            width: 64,
                                            height: 64,
                                            backgroundColor: 'rgba(255, 255, 255, 0.8)',
                                            backdropFilter: 'blur(10px)',
                                            border: '2px solid rgba(255, 255, 255, 0.3)',
                                            color: link.color || '#4a5568',
                                            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                            '&:hover': {
                                                backgroundColor: link.color,
                                                color: 'white',
                                                transform: 'translateY(-4px) scale(1.1)',
                                                boxShadow: `0 10px 25px ${link.color}40`,
                                                borderColor: link.color,
                                            },
                                        }}
                                    >
                                        {link.icon}
                                    </IconButton>
                                </Tooltip>
                            </motion.div>
                        ))}
                    </Box>
                </motion.div>
            </Box>
        </Container>
    );
};

export default SocialMediaLinks;
