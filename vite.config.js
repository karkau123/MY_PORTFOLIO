import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
// https://vite.dev/config/
// Set the base to the repository name for GitHub Pages
export default defineConfig({
  base: '/MY_PORTFOLIO/',
  plugins: [react(), tailwindcss()],
});
