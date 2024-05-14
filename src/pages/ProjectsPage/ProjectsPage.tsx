import React, { useState } from 'react';
import Skills from '../../components/Stacks/Stacks';


const getLanguageFromStorage = (): string => localStorage.getItem('language') ?? 'portugues';

interface ProjectPages {
  language: string;
}

const ProjectsPage: React.FC<ProjectPages> = (props) => {
  const language = useState<string>(getLanguageFromStorage());

  return (
    <div>
        <Skills language={props.language} />
    </div>
  );
};

export default ProjectsPage;
