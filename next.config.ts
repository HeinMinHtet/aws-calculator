import type { NextConfig } from "next";

const isExport = process.env.NEXT_EXPORT === "true";

const nextConfig: NextConfig = {
  reactCompiler: true,

  // GitHub Pages only
  ...(isExport && {
    output: "export",
    basePath: "/aws-calculator",
    images: {
      unoptimized: true,
    },
  }),
};

export default nextConfig;
