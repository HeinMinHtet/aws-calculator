import type { NextConfig } from "next";

const isExport = process.env.NEXT_EXPORT === "true";

const nextConfig: NextConfig = {
  reactCompiler: true,

  output: isExport ? "export" : undefined,

  basePath: isExport ? "/aws-calculator" : "",

  images: {
    unoptimized: isExport,
  },
};

export default nextConfig;
