import {
  mobile,
  backend,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  sass,
  tailwind,
  git,
  figma,
  meta,
  starbucks,
  tesla,
  shopify,
  ecommerce,
  note,
  todo,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  // {
  //   name: "TypeScript",
  //   icon: typescript,
  // },
  {
    name: "React JS",
    icon: reactjs,
  },
  // {
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "SASS",
    icon: sass,
  },

  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const projects = [
  {
    name: "E-Commerce",
    description:
      "Our web e-commerce app lets you browse products, add to cart, save favorites, and search easily by category or name. Enjoy seamless shopping with us!",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },

      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: ecommerce,
    source_code_link: "https://github.com/elgrgaway/E-commerce",
    live_link: "https://e-commerce-ae.vercel.app",
  },
  {
    name: "Note app",
    description:
      "Our note-taking app lets you add, remove, and pin notes for quick access. Organize effortlessly with simple controls for a streamlined note management experience.",
    tags: [
      {
        name: "Js",
        color: "text-yellow-500",
      },

      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: note,
    source_code_link: "https://elgrgaway.github.io/Note-app/",
    live_link: "https://elgrgaway.github.io/Note-app/",
  },
  {
    name: "To-Do app",
    description:
      "Our to-do app allows you to add, remove, and check tasks off your list with ease. Stay organized and productive with straightforward task management at your fingertips.",
    tags: [
      {
        name: "Js",
        color: "text-yellow-500",
      },

      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: todo,
    source_code_link: "https://elgrgaway.github.io/To-Do-app/",
    live_link: "https://elgrgaway.github.io/To-Do-app/",
  },
];

export { services, technologies, projects };
