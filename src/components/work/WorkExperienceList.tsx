import React from 'react';
import { List } from '@mui/material';
import WorkExperienceItem from './WorkExperienceItem';

interface WorkExperienceItemProps {
  title: string;
  company: string;
  responsibilities: string[];
}

interface WorkExperienceListProps {
  workExperienceList: WorkExperienceItemProps[];
}

function WorkExperienceList({ workExperienceList }: WorkExperienceListProps) {
  return (
    <List>
      {workExperienceList.map((job, index) => (
        <WorkExperienceItem key={index} job={job} />
      ))}
    </List>
  );
}

export default WorkExperienceList;
