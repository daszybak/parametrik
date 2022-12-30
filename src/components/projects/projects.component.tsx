import { useContext, useMemo, useState } from 'react';
import { ProjectsContext } from 'src/context/projects/projects-context-provider.component';
import { Project as ProjectType } from 'src/sanity-types';
import SectionTitle from '../section-title/section-title.component';
import Section from '../section/section.component';
import ProjectModal from './project-modal/project-modal.component';
import Project from './project/project.component';
import { useStyles } from './projects.styles';

interface ProjectsProps {}

const Projects: React.FC<ProjectsProps> = () => {
  const { classes } = useStyles();
  const { projects } = useContext(ProjectsContext);
  const [selected, setSelected] = useState<ProjectType['_id']>();
  const [modal, setModal] = useState<boolean>(false);

  const constructionProjects = useMemo(
    () => projects.filter((project) => project.type?.toLowerCase() === 'construction'),
    [projects]
  );
  const feasibilityProjects = useMemo(
    () => projects.filter((project) => project.type?.toLowerCase() === 'feasibility'),
    [projects]
  );
  const methodProjects = useMemo(
    () => projects.filter((project) => project.type?.toLowerCase() === 'method'),
    [projects]
  );

  const handleProjectOnClick = (id: ProjectType['_id']) => {
    setSelected(() => id);
    setModal(() => true);
  };

  const handleModalClose = () => {
    setModal(() => false);
  };

  return (
    <>
      <Section first id="Projects">
        <SectionTitle>Projects</SectionTitle>
        <SectionTitle align="center">Construction</SectionTitle>
        <div className={classes.projects}>
          {constructionProjects.map((project) => (
            <Project
              key={project._id}
              project={project}
              onClick={() => handleProjectOnClick(project._id)}
            />
          ))}
        </div>
      </Section>
      <Section id="Feasibility">
        <SectionTitle align="center">Feasibility</SectionTitle>
        <div className={classes.projects}>
          {feasibilityProjects.map((project) => (
            <Project
              key={project._id}
              project={project}
              onClick={() => handleProjectOnClick(project._id)}
            />
          ))}
        </div>
      </Section>
      <Section id="Method">
        <SectionTitle align="center">Method</SectionTitle>
        <div className={classes.projects}>
          {methodProjects.map((project) => (
            <Project
              key={project._id}
              project={project}
              onClick={() => handleProjectOnClick(project._id)}
            />
          ))}
        </div>
      </Section>
      <ProjectModal
        opened={modal}
        onClose={handleModalClose}
        project={projects.find((project) => project._id === selected)}
      />
    </>
  );
};

export default Projects;
