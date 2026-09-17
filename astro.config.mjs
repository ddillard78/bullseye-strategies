import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://bullseyestrategiesllc.com",
  vite: { plugins: [tailwindcss()] },
  // `assets` renames Astro's default "_astro" output folder. Leading
  // underscores are reserved by some static hosts, so avoid them entirely.
  build: { inlineStylesheets: "auto", assets: "assets" },
});
