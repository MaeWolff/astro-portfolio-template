export type Project = {
  title: string;
  techs: string[];
  link: string;
  isComingSoon?: boolean;
};

const projects: Project[] = [
  {
    title: "Puppetfactory",
    techs: ["Next.js", "TypeScript"],
    link: "https://puppetfactory.app/",
  },
  {
    title: "Script to generate Next.js project",
    techs: ["Shell"],
    link: "https://github.com/MaeWolff/create-nextjs-app-bash-script",
  },
  {
    title: "Dictionary App",
    techs: ["Next.js", "react-query", "zod"],
    link: "https://github.com/MaeWolff/dictionary-app",
  },
  {
    title: "Portfolio / Template",
    techs: ["Astro", "TypeScript"],
    link: "https://github.com/MaeWolff/astro-portfolio-template",
    isComingSoon: true,
  },
];

export default projects;
