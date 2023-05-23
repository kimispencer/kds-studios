/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: 'https://kimispencer.com',
  generateRobotsTxt: true, // (optional)
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
}