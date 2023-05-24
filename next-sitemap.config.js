/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: 'https://kimispencer.com', // @TODO needs to run through array of multi-domains
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
}