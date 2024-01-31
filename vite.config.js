import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: [
        "react",
        "react-router",
        "react-router-dom",
        "react-redux",
        "@reduxjs/toolkit",
        "html-react-parser",
        "react-hook-form",
      ],
      output: {
        globals: {
          react: "React",
        },
      },
    },
  },
});
