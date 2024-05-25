import React from 'react';
import ProjectsSection from '../../components/ProjectsCards/projects-card';




interface ProjectPages {
  language: string;
}

const ProjectsPage: React.FC<ProjectPages> = (props) => {


  return (
    
         <ProjectsSection language={props.language} />
    
  );
};

export default ProjectsPage;
