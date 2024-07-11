/** @type {import('next').NextConfig} */

/*

  For production apps you don't want to populate image domains
  instead copy the image to your own storage having domains in
  here can be exploited

*/

const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "avatars.githubusercontent.com",
      },
      {
        hostname: "lh3.googleusercontent.com",
      },
    ],
  },
};

export default nextConfig;
