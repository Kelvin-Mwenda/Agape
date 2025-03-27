import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import ViteRestart from "vite-plugin-restart";
import fullReload from "vite-plugin-full-reload";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    watch: {
      usePolling: true,
    },
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
    // Auto restart server when these files change
    ViteRestart({
      restart: [
        'vite.config.ts',
        'tailwind.config.ts',
        'postcss.config.js',
        '.env',
        '.env.*',
      ]
    }),
    // Trigger full page reload when these files change
    fullReload([
      'public/**/*',
      'index.html',
      'src/components/**/*',
      'src/lib/**/*',
      'src/contexts/**/*',
    ], { delay: 300 }),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
