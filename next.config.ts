import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  logging: {
    incomingRequests: { ignore: [/^\/api\/gps-simulator\//] },
  },
};

export default nextConfig;
