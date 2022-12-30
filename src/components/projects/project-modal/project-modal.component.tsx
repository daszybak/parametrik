import { Alert, Modal, ModalProps, Title } from '@mantine/core';
import { useRouter } from 'next/router';
import { Project } from 'src/sanity-types';

interface ProjectModalProps extends ModalProps {
  project?: Project;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, ...other }) => {
  const locale = useRouter().locale as 'en' | 'de';

  if (!project) return <Alert color="red">Project not found</Alert>;

  const { title } = project;
  return (
    <Modal
      styles={{
        modal: {
          minWidth: '80vw',
          minHeight: '80vh',
        },
      }}
      {...other}
    >
      <Title align="center">{title?.[locale!] ?? 'Title'}</Title>
    </Modal>
  );
};

export default ProjectModal;
