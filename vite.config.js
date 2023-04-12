import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import reactPages from "vite-plugin-react-pages";
import EnvironmentPlugin from "vite-plugin-environment";

export default defineConfig({
  plugins: [react(), reactPages(), EnvironmentPlugin("all")],
  build: {
    outDir: "build",
  },
});
