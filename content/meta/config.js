const colors = require("../../src/styles/colors");

module.exports = {
  siteTitle: "Sabrina Filipelli Blog", // <title>
  shortSiteTitle: "My Personal Blog", // <title> ending for posts and pages
  siteDescription: "Sabrina Filipelli Gatsby blog site",
  siteUrl: "https://unruffled-torvalds-fcf3e6.netlify.com",
  pathPrefix: "",
  siteImage: "preview.jpg",
  siteLanguage: "en",
  // author
  authorName: "sabrina filipelli",
  authorTwitterAccount: "sabrinafilipelli",
  // info
  infoTitle: "sabrina gear",
  infoTitleNote: "personal blog",
  // manifest.json
  manifestName: "PersonalBlog - a personal blog",
  manifestShortName: "PersonalBlog", // max 12 characters
  manifestStartUrl: "/",
  manifestBackgroundColor: colors.background,
  manifestThemeColor: colors.background,
  manifestDisplay: "standalone",
  // contact
  contactEmail: "sabrinageardesigns@gmail.com.com",
  // social
  authorSocialLinks: [
    { name: "github", url: "https://github.com/sabrinafilipelli" },
    { name: "twitter", url: "https://twitter.com/sabrinafilipelli" },
    { name: "facebook", url: "https://www.facebook.com/" }
  ]
};
