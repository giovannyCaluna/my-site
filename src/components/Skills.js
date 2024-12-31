import Section from './Section';
import { List, ListItem, ListItemText } from '@mui/material';

function Skills() {
  const skills = [
    'Programming Languages: Java, TypeScript, SQL, Python, R, C++, C#, Solidity',
    'Software Development: Spring Boot, React, Angular, Nest, Strapi',
    'Databases: DB2, MongoDB, MySQL, PostgreSQL',
    'Other Tools: Docker, GCP, Kubernetes, Jenkins',
    'Languages: Spanish (Native), English (Advanced)',
  ];

  return (
    <Section title="Skills">
      <List>
        {skills.map((skill, index) => (
          <ListItem key={index} disablePadding>
            <ListItemText primary={skill} />
          </ListItem>
        ))}
      </List>
    </Section>
  );
}

export default Skills;
