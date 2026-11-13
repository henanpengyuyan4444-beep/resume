// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  // GitHub Pages 项目站点：https://<user>.github.io/resume/
  // 本地开发时访问 http://localhost:4321/resume/
  site: "https://henanpengyuyan4444-beep.github.io",
  base: "/resume",
  vite: {
    plugins: [tailwindcss()],
  },
});
