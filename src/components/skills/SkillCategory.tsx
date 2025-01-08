import React from 'react';
import SkillBar from './SkillBar';
import { SkillCategory as SkillCategoryType } from './types';

interface SkillCategoryProps {
  category: SkillCategoryType;
}

const SkillCategory: React.FC<SkillCategoryProps> = ({ category }) => {
  return (
    <div style={{ marginBottom: '20px' }}>
      <h2>{category.category}</h2>
      <div>
        {category.skills.map((skill, index) => (
          <SkillBar key={index} skill={skill} />
        ))}
      </div>
    </div>
  );
};

export default SkillCategory;
