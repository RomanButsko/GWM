/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  poweredByHeader: false,
  env: {
    APP_URL: process.env.REACT_APP_URL
  },
  images: {
    domains: ['localhost'],
    loader: 'custom',
    loaderFile: './loader/Image-loader.ts',
  },
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
