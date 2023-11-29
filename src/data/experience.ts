export type Experience = {
    title: string;
    position: string[];
    link: string;
    isComingSoon?: boolean;
  };
  
  const experience: Experience[] = [
    {
      title: "Experience 1",
      position: ["ReactJS (NextJS)", "react-query", "zod"],
      link: "https://github.com/MaeWolff/dictionary-app",
    },
    {
      title: "Experience 2",
      position: ["ReactJS (NextJS)", "TypeScript"],
      link: "https://www.linablidi.fr/",
    },
    {
      title: "Experience 3",
      position: ["Astro"],
      link: "/",
      isComingSoon: true,
    },
  ];
  
  export default experience;