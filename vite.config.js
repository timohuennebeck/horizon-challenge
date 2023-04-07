import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import reactPages from "vite-plugin-react-pages";

export default defineConfig({
  plugins: [react(), reactPages()],
  build: {
    outDir: "build",
  },
});
