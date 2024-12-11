/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/portfolio-minimal',
  assetPrefix: '/portfolio-minimal/',
  trailingSlash: true,
  distDir: 'out',
};

export default nextConfig;