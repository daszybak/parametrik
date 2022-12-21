import Link from "../link/link";

import styles from "./links.module.scss";

interface Link {
  src: string;
  title: string;
  icon: React.ReactElement;
}

const Links = ({
  data,
  className,
  menuLink,
}: {
  data: Array<Link>;
  className: string;
  menuLink: boolean;
}) => {
  const renderedLinks = data.map(({ src, title, icon }) => {
    return (
      <Link
        src={src}
        title={title}
        icon={icon}
        key={title}
        className={className}
        menuLink
      />
    );
  });

  return <ul className="fadeOutLinks">{renderedLinks}</ul>;
};

export default Links;
