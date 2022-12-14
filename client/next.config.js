/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  poweredByHeader: false,
  env: {
    APP_URL: process.env.REACT_APP_URL
  },
  images: {
    domains: ['localhost'],
  },
  headers: () => [
    {
      source: '/profile/my-profile',
      headers: [
        {
          key: 'Cache-Control',
          value: 'no-store',
        },
      ],
    },
  ],
  // async rewrites() {
  //   return [
  //     { 
  //       source: 'api/path*', 
  //       destination: 'http://localhost:7500/api/:path*'
  //   },
  //   ]

    
  // } 
}

module.exports = nextConfig
