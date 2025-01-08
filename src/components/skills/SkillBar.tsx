import React from 'react';
import { Skill } from './types';

interface SkillBarProps {
  skill: Skill;
}

const SkillBar: React.FC<SkillBarProps> = ({ skill }) => {
  const barStyle = {
    width: `${skill.level}%`,
    backgroundColor: '#4caf50',
    height: '20px',
    borderRadius: '5px',
  };

  return (
    <div style={{ marginBottom: '10px' }}>
      <span>{skill.name}</span>
      <div style={{ backgroundColor: '#ddd', borderRadius: '5px', overflow: 'hidden' }}>
        <div style={barStyle}></div>
      </div>
    </div>
  );
};

export default SkillBar;
