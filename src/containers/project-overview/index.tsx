import { Banner } from '../../components/banner';
import { Footer } from '../../components/footer';
import { ProjectsList } from '../../components/project/list';

export const ProjectOverview = () => {
  return (
    <>
      <Banner />
      <ProjectsList
        projects={[
          { name: 'sierra leone' },
          { name: 'lebanon' },
          { name: 'ukraine' },
          { name: 'turkey' },
        ]}
      />
      <Footer />
    </>
  );
};
