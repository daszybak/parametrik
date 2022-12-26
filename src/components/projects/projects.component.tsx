import { useContext } from 'react';
import { ProjectsContext } from 'src/context/projects/projects-context-provider.component';
import SectionTitle from '../section-title/section-title.component';
import Section from '../section/section.component';
import Project from './project/project.component';

interface ProjectsProps {}

const Projects: React.FC<ProjectsProps> = () => {
  const { projects } = useContext(ProjectsContext);

  const renderedProjects = projects.map((project) => (
    <Project project={project} key={project._id} />
  ));

  return (
    <Section first id="Projects">
      <SectionTitle>Projects</SectionTitle>
      {renderedProjects}
    </Section>
  );
};

export default Projects;
