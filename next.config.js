/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable strict mode for React
  reactStrictMode: true,
  // Allow Framer Motion to work properly with SSR
  compiler: {
    // Remove properties that are only valid in the browser and would cause hydration issues
    styledComponents: true,
  },
  // Optimize images
  images: {
    domains: [],
    remotePatterns: [],
  },
}

module.exports = nextConfig
