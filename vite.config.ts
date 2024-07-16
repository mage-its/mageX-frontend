import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    port: 443,
    https: {
      key: path.resolve(__dirname, "cert", "mage-its.test.key"),
      cert: path.resolve(__dirname, "cert", "mage-its.test.crt"),
    },
  },
});
