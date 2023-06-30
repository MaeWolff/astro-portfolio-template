type Social = {
  label: string;
  link: string;
};

type Presentation = {
  mail: string;
  title: string;
  description: string;
  socials: Social[];
};

const presentation: Presentation = {
  mail: "saberpunk@foxmail.com",
  title: "简单讲讲",
  description:
    "一个记录读书笔记、认知偏差的博客，始于 2019。",
  socials: [
    {
      label: "Twiiter",
      link: "https://twitter.com/saberpunko",
    },
    {
      label: "Telegram",
      link: "https://t.me/saberpunko",
    },
  ],
};

export default presentation;
