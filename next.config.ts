import type { NextConfig } from "next";

const repo = 'TheTechLedger.github.io';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
