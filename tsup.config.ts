import { defineConfig } from "tsup";

export default defineConfig({
  clean: true,
  dts: false,
  entry: ["src/index.ts", "src/vendor.ts", "src/interceptors/index.ts"],
  format: ["esm", "cjs"],
  sourcemap: true,
  outDir: "dist",
});
