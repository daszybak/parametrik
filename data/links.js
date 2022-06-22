import {
  RiHomeLine,
  RiGroupLine,
  RiMailLine,
  RiDiscussLine,
} from "react-icons/ri";

const data = [
  {
    src: "/",
    title: "homepage",
    icon: <RiHomeLine />,
  },
  {
    src: "/about",
    title: "about",
    icon: <RiGroupLine />,
  },
  {
    src: "/contact",
    title: "contact",
    icon: <RiMailLine />,
  },
  {
    src: "/blog",
    title: "blog",
    icon: <RiDiscussLine />,
  },
];

export default data;
