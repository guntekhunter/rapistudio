import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  images: {
    qualities: [70, 75],
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
