import { defineConfig } from "tailwindcss";

export default defineConfig({
  theme: {
    extend: {
      colors: {
        secondary: "#EC4899",
        darkBlue: "#0A1A2F",
        softGray: "#F3F4F6",
      },
      backgroundImage: {
        primary: "linear-gradient(to right, #4ade80, #d9f99d)",
      },
    },
  },
});
