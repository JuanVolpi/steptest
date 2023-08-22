import type { Config } from "tailwindcss";

import { nextui } from "@nextui-org/react";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/styles/**/*.{scss,sass,css}",
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
        lred: "#efb922", // * Light yellow
        mred: "#efb922", // * Mid yellow
        ared: "#efb922", // * Accent yellow
      },

    },
  },
  darkMode: "class",
  plugins: [nextui()],
};

export default config;
