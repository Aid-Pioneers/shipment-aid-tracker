import { useEffect, useState } from 'react';
import { Banner } from '../../components/banner';
import { Footer } from '../../components/footer';
import { ProjectsList } from '../../components/project/list';
import { SupabaseClient } from '@supabase/supabase-js';
import { Database } from '../../database.types';
import { useNavigate } from 'react-router-dom';
import { DbProject } from '../../types/aliases';
import { AuthService } from '../../services/auth';
import { ProjectService } from '../../services/project';

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
      return projectService.fetchProjects(
        (data) => setProjects(data),
        (error) => setErrors([error.message])
      ),
        [projectService];
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
