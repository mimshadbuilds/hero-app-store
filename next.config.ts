import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
      protocol: "https",
      hostname: "i.postimg.cc",
      },
      {
        protocol: "https",
        hostname: "i.pinimg.com",
      },
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
      },
      {
        protocol: "https",
        hostname: "png.pngtree.com",
      },
      {
      protocol: "https",
      hostname: "upload.wikimedia.org",
      },
    ],
  },
};

export default nextConfig;
