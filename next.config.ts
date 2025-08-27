import type { NextConfig } from "next";
import path from "path";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  basePath: isProd ? "/dasher-ui" : "",
  assetPrefix: isProd ? "/dasher-ui" : "",
  images: {
    unoptimized: true,
  },
  output: "export",
  sassOptions: {
    includePaths: [path.join(__dirname, "node_modules")],
  },
};

export default nextConfig;
