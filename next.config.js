/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'hstatic.net', pathname: '/**' },
      { protocol: 'https', hostname: 'theme.hstatic.net', pathname: '/**' },
      { protocol: 'https', hostname: 'file.hstatic.net', pathname: '/**' },
      { protocol: 'https', hostname: 'http2.mlstatic.com', pathname: '/**' },
    ],
  },
};

module.exports = nextConfig;
