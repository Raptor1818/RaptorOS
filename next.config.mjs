// Importing Next.js module using CommonJS syntax
import next from 'next';

const nextConfig = {
  webpack(config) {
    // Add a rule for .md files using raw-loader
    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader',
    });

    return config;
  },
};

export default nextConfig;
