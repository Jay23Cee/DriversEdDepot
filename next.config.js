/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/About",
        destination: "/about",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
