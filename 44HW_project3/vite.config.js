import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// eslint-disable-next-line no-undef
const env = process.env.NODE_ENV;

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base:
    env === "production"
      ? "https://ayavorska.github.io/44HW_project3/dist"
      : "",
});
