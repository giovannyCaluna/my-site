import Section from './Section';
import { List, ListItem, Typography } from '@mui/material';

function Education() {
  const education = [
    {
      degree: 'MSc in Computer Science',
      institution: 'University of Szeged, Hungary (2022-2024)',
      thesis: 'Privacy-Based Blockchain Electronic Voting System',
    },
    {
      degree: 'BSc in Information Technology',
      institution: 'Yachay Tech University, Ecuador (2014-2020)',
      thesis: 'Classification of Plant Leaf Diseases Using Deep Learning Techniques',
    },
  ];

  return (
    <Section title="Education">
      <List>
        {education.map((edu, index) => (
          <ListItem key={index} sx={{ display: 'block', marginBottom: 2 }}>
            <Typography variant="body1" component="div">
              <strong>{edu.degree}</strong>
            </Typography>
            <Typography variant="body2" component="div">
              {edu.institution}
            </Typography>
            <Typography variant="body2" component="div">
              Thesis: {edu.thesis}
            </Typography>
          </ListItem>
        ))}
      </List>
    </Section>
  );
}

export default Education;
