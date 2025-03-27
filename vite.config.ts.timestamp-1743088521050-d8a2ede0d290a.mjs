// vite.config.ts
import { defineConfig } from "file:///C:/Users/kelvi/OneDrive/Desktop/Agapez-main/node_modules/vite/dist/node/index.js";
import react from "file:///C:/Users/kelvi/OneDrive/Desktop/Agapez-main/node_modules/@vitejs/plugin-react-swc/index.mjs";
import path from "path";
import { componentTagger } from "file:///C:/Users/kelvi/OneDrive/Desktop/Agapez-main/node_modules/lovable-tagger/dist/index.js";
import ViteRestart from "file:///C:/Users/kelvi/OneDrive/Desktop/Agapez-main/node_modules/vite-plugin-restart/dist/index.js";
import fullReload from "file:///C:/Users/kelvi/OneDrive/Desktop/Agapez-main/node_modules/vite-plugin-full-reload/dist/index.js";
var __vite_injected_original_dirname = "C:\\Users\\kelvi\\OneDrive\\Desktop\\Agapez-main";
var vite_config_default = defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    watch: {
      usePolling: true
    }
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
    // Auto restart server when these files change
    ViteRestart({
      restart: [
        "vite.config.ts",
        "tailwind.config.ts",
        "postcss.config.js",
        ".env",
        ".env.*"
      ]
    }),
    // Trigger full page reload when these files change
    fullReload([
      "public/**/*",
      "index.html",
      "src/components/**/*",
      "src/lib/**/*",
      "src/contexts/**/*"
    ], { delay: 300 })
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__vite_injected_original_dirname, "./src")
    }
  }
}));
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxrZWx2aVxcXFxPbmVEcml2ZVxcXFxEZXNrdG9wXFxcXEFnYXBlei1tYWluXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxrZWx2aVxcXFxPbmVEcml2ZVxcXFxEZXNrdG9wXFxcXEFnYXBlei1tYWluXFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy9rZWx2aS9PbmVEcml2ZS9EZXNrdG9wL0FnYXBlei1tYWluL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSBcInZpdGVcIjtcbmltcG9ydCByZWFjdCBmcm9tIFwiQHZpdGVqcy9wbHVnaW4tcmVhY3Qtc3djXCI7XG5pbXBvcnQgcGF0aCBmcm9tIFwicGF0aFwiO1xuaW1wb3J0IHsgY29tcG9uZW50VGFnZ2VyIH0gZnJvbSBcImxvdmFibGUtdGFnZ2VyXCI7XG5pbXBvcnQgVml0ZVJlc3RhcnQgZnJvbSBcInZpdGUtcGx1Z2luLXJlc3RhcnRcIjtcbmltcG9ydCBmdWxsUmVsb2FkIGZyb20gXCJ2aXRlLXBsdWdpbi1mdWxsLXJlbG9hZFwiO1xuXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKCh7IG1vZGUgfSkgPT4gKHtcbiAgc2VydmVyOiB7XG4gICAgaG9zdDogXCI6OlwiLFxuICAgIHBvcnQ6IDgwODAsXG4gICAgd2F0Y2g6IHtcbiAgICAgIHVzZVBvbGxpbmc6IHRydWUsXG4gICAgfSxcbiAgfSxcbiAgcGx1Z2luczogW1xuICAgIHJlYWN0KCksXG4gICAgbW9kZSA9PT0gJ2RldmVsb3BtZW50JyAmJlxuICAgIGNvbXBvbmVudFRhZ2dlcigpLFxuICAgIC8vIEF1dG8gcmVzdGFydCBzZXJ2ZXIgd2hlbiB0aGVzZSBmaWxlcyBjaGFuZ2VcbiAgICBWaXRlUmVzdGFydCh7XG4gICAgICByZXN0YXJ0OiBbXG4gICAgICAgICd2aXRlLmNvbmZpZy50cycsXG4gICAgICAgICd0YWlsd2luZC5jb25maWcudHMnLFxuICAgICAgICAncG9zdGNzcy5jb25maWcuanMnLFxuICAgICAgICAnLmVudicsXG4gICAgICAgICcuZW52LionLFxuICAgICAgXVxuICAgIH0pLFxuICAgIC8vIFRyaWdnZXIgZnVsbCBwYWdlIHJlbG9hZCB3aGVuIHRoZXNlIGZpbGVzIGNoYW5nZVxuICAgIGZ1bGxSZWxvYWQoW1xuICAgICAgJ3B1YmxpYy8qKi8qJyxcbiAgICAgICdpbmRleC5odG1sJyxcbiAgICAgICdzcmMvY29tcG9uZW50cy8qKi8qJyxcbiAgICAgICdzcmMvbGliLyoqLyonLFxuICAgICAgJ3NyYy9jb250ZXh0cy8qKi8qJyxcbiAgICBdLCB7IGRlbGF5OiAzMDAgfSksXG4gIF0uZmlsdGVyKEJvb2xlYW4pLFxuICByZXNvbHZlOiB7XG4gICAgYWxpYXM6IHtcbiAgICAgIFwiQFwiOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCBcIi4vc3JjXCIpLFxuICAgIH0sXG4gIH0sXG59KSk7XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQStULFNBQVMsb0JBQW9CO0FBQzVWLE9BQU8sV0FBVztBQUNsQixPQUFPLFVBQVU7QUFDakIsU0FBUyx1QkFBdUI7QUFDaEMsT0FBTyxpQkFBaUI7QUFDeEIsT0FBTyxnQkFBZ0I7QUFMdkIsSUFBTSxtQ0FBbUM7QUFRekMsSUFBTyxzQkFBUSxhQUFhLENBQUMsRUFBRSxLQUFLLE9BQU87QUFBQSxFQUN6QyxRQUFRO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixPQUFPO0FBQUEsTUFDTCxZQUFZO0FBQUEsSUFDZDtBQUFBLEVBQ0Y7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLE1BQU07QUFBQSxJQUNOLFNBQVMsaUJBQ1QsZ0JBQWdCO0FBQUE7QUFBQSxJQUVoQixZQUFZO0FBQUEsTUFDVixTQUFTO0FBQUEsUUFDUDtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsSUFDRixDQUFDO0FBQUE7QUFBQSxJQUVELFdBQVc7QUFBQSxNQUNUO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLElBQ0YsR0FBRyxFQUFFLE9BQU8sSUFBSSxDQUFDO0FBQUEsRUFDbkIsRUFBRSxPQUFPLE9BQU87QUFBQSxFQUNoQixTQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUEsTUFDTCxLQUFLLEtBQUssUUFBUSxrQ0FBVyxPQUFPO0FBQUEsSUFDdEM7QUFBQSxFQUNGO0FBQ0YsRUFBRTsiLAogICJuYW1lcyI6IFtdCn0K
