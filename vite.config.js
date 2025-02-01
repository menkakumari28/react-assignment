import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  server: {
    port: 3000,
  },
  plugins: [tailwindcss()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/tests/setupTests.js",
    include: ["src/**/*.test.jsx"],
  },
});
