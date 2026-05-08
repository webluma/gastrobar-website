import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    localPatterns: [
      {
        pathname: "/images/**",
        search: "",
      },
      {
        pathname: "/images/asia-facade.png",
        search: "?v=20260507-160908",
      },
    ],
  },
};

export default nextConfig;
