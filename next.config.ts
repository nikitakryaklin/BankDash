import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["localhost"], // 👈 сюда добавляем
  },
};

export default nextConfig;
