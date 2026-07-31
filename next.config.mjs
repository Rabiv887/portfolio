/** @type {import('next').NextConfig} */
const nextConfig = {
	// Static HTML export -> deploys to Cloudflare Pages as pure static assets.
	output: "export",
	// Clean, directory-style URLs (/about/) which map 1:1 to static files.
	trailingSlash: true,
	// No image optimization server exists in a static export.
	images: { unoptimized: true },
	reactStrictMode: true,
	poweredByHeader: false,
}

export default nextConfig
