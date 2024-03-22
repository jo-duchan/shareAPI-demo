import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import mkcert from "vite-plugin-mkcert";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    https: true,
  },
  plugins: [react(), mkcert()],
  resolve: {
    alias: [
      { find: "@", replacement: "/src" },
      { find: "@assets", replacement: "/src/assets" },
      { find: "@styles", replacement: "/src/styles" },
      { find: "@components", replacement: "/src/components" },
      { find: "@data", replacement: "/src/data" },
      { find: "@hook", replacement: "/src/hook" },
    ],
  },
});
