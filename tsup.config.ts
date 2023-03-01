import { defineConfig } from "tsup";

export default defineConfig({
  clean: true,
  dts: true,
  entry: ["src/index.ts", "src/vendor.ts", "src/interceptors/index.ts"],
  format: ["esm"],
  sourcemap: true,
  outDir: "dist",
});
