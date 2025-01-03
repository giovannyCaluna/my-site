import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MusicNoteIcon from '@mui/icons-material/MusicNote'; // Represents TikTok
import GithubIcon from '@mui/icons-material/GitHub'; // Represents GitHub
import TwitterIcon from '@mui/icons-material/Twitter'; // Represents X
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Box, IconButton, Tooltip, Typography } from '@mui/material';
import React from 'react';

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
            icon: <InstagramIcon fontSize="large" />,
        },
        {
            name: 'GitHub',
            href: 'https://github.com/giovannyCaluna',
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
            name: 'Facebook',
            href: 'https://www.facebook.com/giovanny_eduardo',
            color: '#1877F2',
            icon: <FacebookIcon fontSize="large" />,
        },
        {
            name: 'WhatsApp',
            href: 'https://wa.me/+593982448042', // Replace "yourphonenumber" with your WhatsApp number
            color: '#25D366',
            icon: <WhatsAppIcon fontSize="large" />,
        },
    ];

    return (
           
            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                gap={1}
                sx={{ marginTop: 4 }}
            >
                {links.map((link) => (
                    <Tooltip key={link.name} title={link.name}>
                        <IconButton
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{ color: link.color || 'inherit' }}
                        >
                            {link.icon}
                        </IconButton>
                    </Tooltip>
                ))}
            </Box>

    );
};

export default SocialMediaLinks;
