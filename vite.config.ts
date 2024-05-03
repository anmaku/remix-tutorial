import { vitePlugin as remix } from "@remix-run/dev";
import { installGlobals } from "@remix-run/node";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { copyFileSync } from "node:fs";
import { join } from "node:path";

installGlobals();

export default defineConfig({
 base: "/",
 plugins: [remix({
    basename: "/",
  }), tsconfigPaths()]
});