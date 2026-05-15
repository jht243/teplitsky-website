import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/dapper-labs-class-action",
        destination: "/",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
