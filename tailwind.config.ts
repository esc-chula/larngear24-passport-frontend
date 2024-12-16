import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Anonymous Pro", ...fontFamily.sans],
        vimamsa: 'vimamsa',
        ibm: ["IBM Plex Sans Thai", ...fontFamily.sans]
      },
    },
  },
  plugins: [],
} satisfies Config;
