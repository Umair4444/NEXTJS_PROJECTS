/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io", // Use a string instead of an array
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com", // Use a string here as well
      },
    ],
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Set-Cookie",
            value: "MyCookie=myvalue; SameSite=Strict; Secure; HttpOnly",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
