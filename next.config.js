// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'example.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
}

module.exports = nextConfig;


// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   images: {
//     domains: ['images.unsplash.com'],
//   },
//   async redirects() {
//     return [
//       {
//         source: '/apply-now',
//         destination: '/apply',
//         permanent: true,
//       },
//     ];
//   },
// };

// module.exports = nextConfig;
