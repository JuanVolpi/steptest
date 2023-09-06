import { nextui } from "@nextui-org/react";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        bglgreen: "#fcfdfa", //* Background light green
        lgreen: "#dce9d4", // * light green
        mgreen: "#bef2ce", // * Mid green
        agreen: "#305c3d", // * Accent green
        lyellow: "#fae7b2", // * light yelllow
        ayellow: "#efb922", // * Accent yellow
        lblue: "#e7f1fe", // * Lhight yellow
        mblue: "#95c3ff", // * Mid yellow
        ablue: "#003a92", // * Accent yellow
        lred: "#ffdede", // * Light red
        mred: "#ff7339", // * Mid red
        ared: "#dd4d32", // * Accent red
      },
      keyframes: {
        "slide-left": {
          "0%": {
            left: "-100%",
            opacity: "0",
          },
          "100%": {
            left: "100%",
            opacity: "1",
          },
        },
      },
      animation: {
        slideLeft: "slide-left 2s ease-in-out once forward normal",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui(
   {
    addCommonColors:true, themes: {
    }
})],
};

export default config;
