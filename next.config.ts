import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isGitHubPages ? "/Shri-Babulal-College" : "",
  assetPrefix: isGitHubPages ? "/Shri-Babulal-College/" : "",
};

export default nextConfig;
