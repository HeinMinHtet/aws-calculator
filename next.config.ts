import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  output: 'export',
  basePath: "/aws-calculator",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
