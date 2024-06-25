/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        BASE_URL:"https://next-js14-twitter-clone.vercel.app/"
      },
    images:{
        remotePatterns:[
            {
                protocol: 'https',
                hostname: '**',
            }
        ]
    }
}

module.exports = nextConfig
