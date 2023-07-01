import type { TailwindColor } from "@/utils/types/tailwind";

type Theme = {
  colors: {
    primary: TailwindColor;
    blur: {
      top: TailwindColor;
      bottom: TailwindColor;  
    };
  };
};

const theme: Theme = {
  colors: {
    primary: "blue-500", // 更改主色调      
    blur: {
      top: "blue-400",   // 更改上部作废颜色
      bottom: "blue-600" // 更改下部作废颜色  
    }   
  }  
};

export default theme;
