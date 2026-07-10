/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/About",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/drivers-ed",
        destination: "/states-online-drivers-ed",
        permanent: true,
      },
      {
        source: "/online-drivers-ed",
        destination: "/states-online-drivers-ed",
        permanent: true,
      },
      {
        source: "/budget-drivers-ed",
        destination: "/budget-drivers-ed-school",
        permanent: true,
      },
      {
        source: "/cheap-drivers-ed",
        destination: "/budget-drivers-ed-school",
        permanent: true,
      },
      {
        source: "/traffic-school",
        destination: "/states-ticket-dismissal",
        permanent: true,
      },
      {
        source: "/defensive-driving",
        destination: "/states-ticket-dismissal",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
