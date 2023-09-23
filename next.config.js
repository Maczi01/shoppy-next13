/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		mdxRs: true,
		typedRoutes: true,
	},
};
module.exports = {
	async redirects() {
		return [
			{
				source: "/products",
				destination: "/products/1",
				permanent: true,
			},
		];
	},
};
const withMDX = require("@next/mdx")();
module.exports = withMDX(nextConfig);
