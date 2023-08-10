import { useEffect, useState } from 'react';
import { Banner } from '../../components/banner';
import { Footer } from '../../components/footer';
import { ProjectsList } from '../../components/project/list';
import { SupabaseClient } from '@supabase/supabase-js';
import { Database } from '../../database.types';
import { useNavigate } from 'react-router-dom';
import { DbProject } from '../../types/aliases';

interface ProjectOverviewContainerProps {
  supabase: SupabaseClient<Database>;
}

export const ProjectOverview: React.FC<ProjectOverviewContainerProps> = ({
  supabase,
}) => {
  const navigate = useNavigate();

  const [projects, setProjects] = useState<DbProject[]>([]);
  const [errors, setErrors] = useState<String[]>([]);

  async function handleSignOut() {
    let { error } = await supabase.auth.getSession();
    if (error)
      console.warn(
        'Encountered an error whilst fetching user session.',
        error.cause
      );
    else {
      let { error } = await supabase.auth.signOut();
      if (error)
        console.warn('Encountered an error whilst signing out.', error.cause);

      return navigate('/login');
    }
  }

  useEffect(() => {
    async function loadProjects() {
      const { data, error } = await supabase.from('project').select('*');

      if (data) setProjects(data);
      else setErrors([error.message]);
    }

    loadProjects();
  }, []);

  return (
    <>
      <Banner />
      {errors ? (
        errors.map((error) => <p>{error}</p>)
      ) : (
        <ProjectsList projects={projects} />
      )}
      <Footer onSignOut={handleSignOut} />
    </>
  );
};
