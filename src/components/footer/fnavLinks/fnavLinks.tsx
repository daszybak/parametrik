import { RiHomeLine, RiGroupLine, RiMailLine, RiDiscussLine } from 'react-icons/ri';
import FNavLink from '../fnavLink/fnavLink';
import styles from './fnavLinks.module.scss';

const links = [
  {
    src: '/',
    title: 'homepage',
    icon: <RiHomeLine />,
  },
  {
    src: '/about',
    title: 'about',
    icon: <RiGroupLine />,
  },
  {
    src: '/contact',
    title: 'contact',
    icon: <RiMailLine />,
  },
  {
    src: '/blog',
    title: 'blog',
    icon: <RiDiscussLine />,
  },
];

const FNavLinks = () => {
  // eslint-disable-next-line react/no-unused-prop-types
  const renderedLinks = links.map(({ src, title }: { src: string; title: string }) => (
    <li key={src}>
      <FNavLink src={src} title={title} />
    </li>
  ));

  return (
    <>
      <ul className={styles.links}>{renderedLinks}</ul>
    </>
  );
};

export default FNavLinks;
