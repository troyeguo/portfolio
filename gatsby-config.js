module.exports = {
  siteMetadata: {
    title: "Troye Guo | Portfolio",
    description: "Web Developer - React, Node, and more",
    author: "Troye Guo",
  },
  plugins: [
    {
      resolve: `gatsby-plugin-intl`,
      options: {
        // language JSON resource path
        path: `${__dirname}/src/intl`,
        // supported language
        languages: [`en`, `zh-CN`],
        // language file path
        defaultLanguage: `en`,
      },
    },
    "gatsby-plugin-react-helmet",
    `gatsby-plugin-sass`,
    {
      resolve: "gatsby-plugin-google-fonts",
      options: {
        fonts: ["Noto Sans SC", "Noto Serif SC"],
      },
    },
    "gatsby-transformer-json",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/data`,
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Troye Guo Portfolio",
        short_name: "Troye Guo",
        start_url: "/",
        background_color: "#000000",
        theme_color: "#5216CE",
        display: "minimal-ui",
        icon: "static/favicon.png",
        cache_busting_mode: "none",
      },
    },
    {
      resolve: "gatsby-plugin-offline",
      options: {
        workboxConfig: {
          globPatterns: ["**/*"],
        },
      },
    },
    {
      resolve: `gatsby-plugin-baidu-tongji`,
      options: {
        // 百度统计站点ID
        siteid: "cc4b3f01534fd7a11ae91733120ffc21",
        // 配置统计脚本插入位置，默认值为 false, 表示插入到 body 中, 为 true 时插入脚本到 head 中
        head: false,
      },
    },
  ],
};
