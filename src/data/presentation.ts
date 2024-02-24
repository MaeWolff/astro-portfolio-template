type Social = {
  label: string;
  link: string;
};

type Presentation = {
  mail: string;
  title: string;
  description: string;
  socials: Social[];
  profile?: string;
};

const presentation: Presentation = {
  mail: "mike@desocios.com",
  title: "Hi, I’m Mike!",
  profile: "/profile.jpg",
  description:
    `
      Hey, I'm Mike DeSocio, a cybersecurity enthusiast who loves diving into puzzles 
      and paying attention to the little things. Whether I'm building secure systems or 
      hitting the trails, I'm all about tackling challenges head-on and exploring new horizons. 
      When I'm not knee-deep in code, you'll find me strumming my guitar, enjoying the great outdoors,
      or getting lost in a captivating video game. Welcome to my world!
    `,
  socials: [
    {
      label: "X",
      link: "https://twitter.com/mdesocio28",
    },
    {
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/michael-desocio/",
    },
    {
      label: "GitHub",
      link: "https://github.com/mdesocio",
    },
  ],
};

export default presentation;
