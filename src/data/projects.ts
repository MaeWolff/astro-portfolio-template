export type Project = {
  title: string;
  techs: string[];
  link: string;
  isComingSoon?: boolean;
};

const projects: Project[] = [
  {
    title: "Dictionary App",
    techs: ["ReactJS (NextJS)", "react-query", "zod"],
    link: "https://github.com/MaeWolff/dictionary-app",
  },
  {
    title: "Portfolio / Lina BLIDI",
    techs: ["ReactJS (NextJS)", "TypeScript"],
    link: "https://www.linablidi.fr/",
  },
  {
    title: "Portfolio / Template",
    techs: ["Astro"],
    link: "/",
    isComingSoon: true,
  },
];

export default projects;
