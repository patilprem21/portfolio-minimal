/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
      unoptimized: true,
    },
    basePath: '/portfolio-minimal',
    assetPrefix: '/portfolio-minimal',
    // Ensure your images and other assets work
    webpack: (config) => {
      config.resolve.fallback = { fs: false };
      return config;
    },
  };
  
  export default nextConfig;