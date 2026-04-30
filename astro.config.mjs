import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://forgefront3d.com",
  vite: {
    plugins: [tailwindcss()],
  },
});
