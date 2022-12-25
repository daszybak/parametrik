import { useTranslation } from 'react-i18next';
import { FcWorkflow } from 'react-icons/fc';
import { FaProjectDiagram } from 'react-icons/fa';
import { RiTeamFill } from 'react-icons/ri';

export const links = [
  {
    href: '/#workflow',
    title: 'workflow',
    icon: <FcWorkflow />,
  },
  {
    href: '/portfolio',
    title: 'portfolio',
    icon: <FaProjectDiagram />,
  },
  {
    href: '/#about-us',
    title: 'about-us',
    icon: <RiTeamFill />,
  },
];

export const useLinks = () => {
  const { t } = useTranslation();

  const memoLinks = links.map((link) => ({
    ...link,
    title: t<string>(`common:navbar.${link.title}`),
  }));

  return memoLinks;
};
