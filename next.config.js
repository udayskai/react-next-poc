/** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
// }
// module.exports = nextConfig

module.exports = {
  async rewrites() {
    let path_array = [
      {
        source: "/:path*",
        destination: "http://localhost:3000/:path*", // Proxy to Backend
      },
    ];
    return path_array;
  },
}