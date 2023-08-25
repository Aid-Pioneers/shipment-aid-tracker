import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Banner } from '../../components/banner';
import { Footer } from '../../components/footer';
import { ProjectsList } from '../../components/project/list';
import { AuthService } from '../../services/auth-service';
import { ProjectService } from '../../services/project-service';
import { DbProject } from '../../types/aliases';

interface ProjectOverviewContainerProps {
  authService: AuthService;
  projectService: ProjectService;
}

export const ProjectOverview: React.FC<ProjectOverviewContainerProps> = ({ authService, projectService }) => {
  const navigate = useNavigate();

  const [projects, setProjects] = useState<DbProject[]>([]);
  const [errors, setErrors] = useState<String[]>([]);

  const handleSignOut = () => authService.signOut(() => navigate('/login'));

  useEffect(() => {
    const loadProjects = async () => {
      return (
        projectService.fetchProjects(
          (data) => setProjects(data),
          (error) => setErrors([error.message])
        ),
        [projectService]
      );
    };

    loadProjects();
  }, [projectService]);

  return (
    <>
      <Banner />
      {errors.length > 0 ? (
        // TODO #15 make an error component and pass error in as props
        errors.map((error) => <p>{error}</p>)
      ) : (
        <ProjectsList projects={projects} />
      )}
      <Footer onSignOut={handleSignOut} />
    </>
  );
};
