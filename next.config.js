/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "lh3.googleusercontent.com",
            },
            {
                protocol: "https",
                hostname: "loremflickr.com",
            },
            {
                protocol: "https",
                hostname: "remoteok.io",
            }
        ]
    }
}

module.exports = nextConfig
