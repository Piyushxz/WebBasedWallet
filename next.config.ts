import type { NextConfig } from "next";
import NodePolyfillPlugin from "node-polyfill-webpack-plugin";

const nextConfig: NextConfig = {
  webpack: (config) => {
    // Add the NodePolyfillPlugin
    config.plugins = [...config.plugins, new NodePolyfillPlugin()];

    // Add fallback for Node.js modules
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false, // Disable unsupported modules if not needed
      net: false,
      tls: false,
      child_process: false,
      dgram: false,
      crypto: require.resolve("crypto-browserify"),
      stream: require.resolve("stream-browserify"),
      buffer: require.resolve("buffer/"),
    };

    return config;
  },
};

export default nextConfig;
