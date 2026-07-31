// This repo deploys to GitHub Pages as a project site at
// https://rabiv887.github.io/portfolio/, so every asset and route must be
// served under the "/portfolio" sub-path. Keep this in sync with
// `basePath` in lib/site.ts.
const REPO_BASE_PATH = "/portfolio"

/** @type {import('next').NextConfig} */
const nextConfig = {
	// Static HTML export -> deploys to GitHub Pages as pure static assets.
	output: "export",
	// Clean, directory-style URLs (/about/) which map 1:1 to static files.
	trailingSlash: true,
	// GitHub Pages serves this project from a /portfolio sub-path (not the
	// domain root), so routes and emitted asset URLs need the prefix.
	basePath: REPO_BASE_PATH,
	assetPrefix: REPO_BASE_PATH + "/",
	// No image optimization server exists in a static export.
	images: { unoptimized: true },
	reactStrictMode: true,
	poweredByHeader: false,
}

export default nextConfig
