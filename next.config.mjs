/** @type {import('next').NextConfig} */
const nextConfig = {
  redirects: async () => [
    {
      source: "/equipo",
      destination: "/",
      permanent: true,
    },
  ],
};

export default nextConfig;
