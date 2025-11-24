import * as esbuild from "esbuild";

const isProduction = process.env.NODE_ENV === "production";
const isWatch = process.argv.includes("--watch");

const config = {
  entryPoints: ["src/main.js"],
  bundle: true,
  minify: isProduction,
  sourcemap: !isProduction,
  target: ["es2020", "chrome90", "firefox88", "safari14", "edge90"],
  outfile: "dist/main.js",
  format: "esm",
  platform: "browser",
  logLevel: "info",
  define: {
    "process.env.NODE_ENV": JSON.stringify(
      isProduction ? "production" : "development",
    ),
    "import.meta.env.BASE_PATH": JSON.stringify(process.env.BASE_PATH || ""),
  },
};

if (isWatch) {
  const ctx = await esbuild.context(config);
  await ctx.watch();
  console.log("👀 Watching for changes...");
} else {
  await esbuild.build(config);
  console.log("✅ Build complete!");
}
