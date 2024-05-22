import React from 'react';
import projects from '../data/projects.json';
import { ProjectCard } from './ProjectCard';

export const Projects = () => {
  return (
    <div className='list-projects lg:mx-32 lg:mr-[180px] items-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
      {projects.map(pr => (
        <ProjectCard
          key={pr.id}
          name={pr.name}
          preview={pr.preview}
          link={pr.link}
          description={pr.description}
          github={pr.github}
        />
      ))}
    </div>
  );
};
