/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "drscdn.500px.org",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
