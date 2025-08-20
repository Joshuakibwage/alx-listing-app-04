import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
   images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "a0.muscache.com",
      },
    ],
  },
};

export default nextConfig;
