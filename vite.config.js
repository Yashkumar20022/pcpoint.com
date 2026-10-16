import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Ignore Visual Studio workspace files (and other heavy folders) so the file watcher
// doesn't try to watch files that may be locked by other processes.
export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      ignored: ["**/.vs/**", "**/node_modules/**", "**/.git/**"]
    }
  }
});
