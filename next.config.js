/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

// module.exports = {
//   images: {
//     remotePatterns: [
//       {
//         protocol: 'https',
//         hostname: 'thecocktaildb.com',
//         port: '',
//         pathname: '/images/**',
//       },
//     ],
//   },
// }
module.exports = {
  images: {
    domains: ['thecocktaildb.com'],
  },
};


