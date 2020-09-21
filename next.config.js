module.exports = {
  async rewrites() {
    return [
      {
        source: '/api/v2/:path*',
        destination: `http://localhost:4000/:path*`,
      },
    ]
  },
}
