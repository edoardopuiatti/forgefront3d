import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://www.forgefront3d.example",
  vite: {
    plugins: [tailwindcss()],
  },
});
