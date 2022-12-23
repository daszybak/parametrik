import { Title } from '@mantine/core';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { DEFAULT_LOCALE } from 'src/components/constants';

interface PortfolioProps {}

const Portfolio: React.FC<PortfolioProps> = () => <Title>Portfolio</Title>;

export const getStaticProps: GetStaticProps = async ({ locale = DEFAULT_LOCALE }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common', 'home'])),
  },
});

export default Portfolio;
