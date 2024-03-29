const colors = require("../../src/styles/colors");

module.exports = {
  siteTitle: "Sabrina Filipelli Blog", // <title>
  shortSiteTitle: "My Personal Blog", // <title> ending for posts and pages
  siteDescription: "Sabrina Filipelli Gatsby blog site",
  siteUrl: "https://sabrina-gatsby-blog-clone.netlify.app",
  pathPrefix: "",
  siteImage: "preview.jpg",
  siteLanguage: "en",
  // author
  authorName: "sabrina filipelli",
  authorTwitterAccount: "sabrinafilipelli",
  // info
  infoTitle: "sabrina's corner",
  infoTitleNote: "a neat blog site",
  // manifest.json
  manifestName: "PersonalBlog - a personal blog",
  manifestShortName: "PersonalBlog", // max 12 characters
  manifestStartUrl: "/",
  manifestBackgroundColor: colors.background,
  manifestThemeColor: colors.background,
  manifestDisplay: "standalone",
  // contact
  contactEmail: "sabrina.a.filipelli@gmail.com.com",
  // social
  authorSocialLinks: [
    { name: "github", url: "https://github.com/sabrinafilipelli" },
    { name: "twitter", url: "https://twitter.com/sabrinafilipelli" },
    { name: "facebook", url: "https://www.facebook.com/" }
  ]
};
