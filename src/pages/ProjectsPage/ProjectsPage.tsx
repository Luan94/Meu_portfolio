import React from 'react';
import Skills from '../../components/Stacks/Stacks';




interface ProjectPages {
  language: string;
}

const ProjectsPage: React.FC<ProjectPages> = (props) => {


  return (
    <div>
        <Skills language={props.language} />
    </div>
  );
};

export default ProjectsPage;
