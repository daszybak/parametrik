import { GetServerSideProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { DEFAULT_LOCALE } from 'src/components/constants';
import Projects from 'src/components/projects/projects.component';
import { client } from 'src/sanity';

const Portfolio = () => <Projects />;

export const getServerSideProps: GetServerSideProps = async ({ locale = DEFAULT_LOCALE }) => ({
  props: {
    projects: (await client.fetch('*[_type == "project"]')) || [],
    ...(await serverSideTranslations(locale, ['common', 'home'])),
  },
  revalidate: 60,
});

export default Portfolio;
