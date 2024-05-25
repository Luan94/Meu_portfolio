import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import translationUtils from '../../utils/translationUtils';
import projectsData from '../../data/projects.json';


const ProjectsContainer = styled.div`
  ${tw`container mx-auto columns-4 mt-28`}
`;


const ProjectCard = styled.div`
  ${tw`border-2 border-white`}
    height:400px;
  

`;
const ProjectContent = styled.div`
  ${tw`text-white bg-zinc-950 shadow-md m-2`}  
`;



const ProjectImg = styled.img`
  ${tw``}
  max-width:100%;
`;


const ProjectName = styled.p`
  ${tw``}
`;

const TechList = styled.div`
  ${tw`flex`}
`;

const TechItem = styled.div`
  ${tw`text-white rounded p-1`}
  border:1px solid white;
  margin: 2px;

  
`;

const ProjectSummary = styled.p`
  ${tw``}
`;

const ProjectLink = styled.a`
  ${tw``}
`;

const ProjectRepoLink = styled.a`
  ${tw``}
`;

interface ProjectData {
  category: string;
  skill_icon: string;
  skill_name: string;
}

interface ProjectsSectionProps {
  language: string;
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ language }) => {


  return (
    
      <ProjectsContainer>
              
        {projectsData.map((project, index) => (
            <ProjectCard>
                <ProjectImg
                    loading="lazy"
                    src={project.project_image || 'https://i.imgur.com/d9HzPM4.png'}
                    alt={project.project_image ? project.project_image : 'Imagem placeholder'}
                />
                <ProjectContent key={index}>
                    <ProjectName>{translationUtils('project_name', language, project)}</ProjectName>
                    <ProjectSummary>{translationUtils('summary', language, project)}</ProjectSummary>
                    <TechList>
                    {project.techs.map((tech, index) => (
                    <TechItem key={index}>
                        <span>{tech}</span>
                    </TechItem>
                    ))}
                </TechList>                  
                </ProjectContent>
                
            </ProjectCard> 
            ))}
        </ProjectsContainer>

    
   
  );
};

export default ProjectsSection;
