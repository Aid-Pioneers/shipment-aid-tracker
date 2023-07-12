import { ProjectsList } from '../../components/project/list';

export const ProjectListContainer = () => {
  return (
    <ProjectsList
      projects={[
        { name: 'sierra leone' },
        { name: 'lebanon' },
        { name: 'ukraine' },
        { name: 'turkey' },
      ]}
    />
  );
};
