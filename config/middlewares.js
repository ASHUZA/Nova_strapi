module.exports = [
  "strapi::errors",
  {
    name: "strapi::security",
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          "connect-src": ["'self'", "https:"],
          "img-src": [
            "'self'",
            "data:",
            "blob:",
            "dl.airtable.com",
            "res.cloudinary.com",
          ],
          "media-src": [
            "'self'",
            "data:",
            "blob:",
            "dl.airtable.com",
            "res.cloudinary.com",
          ],
          upgradeInsecureRequests: null,
        },
      },
    },
  },

  // {
  //   name: 'strapi::cors',
  //   config: {
  //     enabled: true,
  //     headers: '*',
  //     origin: ['http://localhost:3000','http://localhost:1341','https://api5.makussa.org/graphql', 'http://api5.makussa.org/graphql','http://makussa.org','http://api5.makussa.org', 'https://api5.makussa.org','https://makussa.org', `https://makussa.vercel.app`]
  //   }
  // },

  // {
  //   name: "strapi::cors",
  //   config: {
  //     origin: ["*"],
  //     methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "HEAD", "OPTIONS"],
  //     headers: ["Content-Type", "Authorization", "Origin", "Accept"],
  //     keepHeaderOnError: true,
  //   },
  // },
  "strapi::cors",
  "strapi::poweredBy",
  "strapi::logger",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
];
