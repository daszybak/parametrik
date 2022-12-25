import { createContext } from 'react';
import { Project } from 'src/sanity-types';

interface ProjectsDataCtx {
  projects: Project[];
}

export const ProjectsContext = createContext<ProjectsDataCtx>({
  projects: [],
});

interface ProjectsContextProviderProps {
  children: React.ReactNode;
  projects: Project[];
}

export const ProjectsContextProvider: React.FC<ProjectsContextProviderProps> = ({
  children,
  projects,
}) => <ProjectsContext.Provider value={{ projects }}>{children}</ProjectsContext.Provider>;
