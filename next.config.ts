import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  /* Pin the workspace root: without this, Next walks up and finds
     ~/pnpm-lock.yaml and infers the wrong root directory. */
  turbopack: {
    root: path.resolve(__dirname),
  },
};

export default nextConfig;
