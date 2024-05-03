import { vitePlugin as remix } from "@remix-run/dev";
import { installGlobals } from "@remix-run/node";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { copyFileSync } from "node:fs";
import { join } from "node:path";

installGlobals();

export default defineConfig({
 base: "/remix-tutorial/",
 plugins: [remix({
    basename: "/remix-tutorial/",
    buildEnd(args) {
      if (!args.viteConfig.isProduction) return;
      const buildPath = args.viteConfig.build.outDir;
      copyFileSync(
        join(buildPath, "index.html"),
        join(buildPath, "404.html"),
      );
    }
  }), tsconfigPaths()]
});