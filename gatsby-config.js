require(`dotenv`).config();

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE;

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    // You can overwrite values here that are used for the SEO component
    // You can also add new values here to query them like usual
    // See all options: https://github.com/LekoArts/gatsby-themes/blob/main/themes/gatsby-theme-minimal-blog/gatsby-config.js
    siteTitle: `blog.chiu.fyi`,
    siteTitleAlt: `blog.chiu.fyi`,
    siteHeadline: `blog.chiu.fyi`,
    siteUrl: `https://blog.chiu.fyi`,
    siteDescription: `it's so loud inside my head`,
    siteImage: `/banner.jpg`,
    author: `@chiu.fyi`,
  },
  trailingSlash: `never`,
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-minimal-blog`,
      // See the theme's README for all available options
      options: {
        blogPath: `/`,
        // navigation: [
        //   {
        //     title: `blog`,
        //     slug: `/blog`,
        //   },
        //   // {
        //   //   title: `about`,
        //   //   slug: `/about`,
        //   // },
        // ],
        // externalLinks: [
        //   {
        //     name: `Twitter`,
        //     url: `https://twitter.com/lekoarts_de`,
        //   },
        //   {
        //     name: `Homepage`,
        //     url: `https://www.lekoarts.de?utm_source=minimal-blog&utm_medium=Starter`,
        //   },
        // ],
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `blog.chiu.fyi`,
        short_name: `blog`,
        description: `it's so loud inside my head`,
        start_url: `/`,
        background_color: `#fff`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#6B46C1`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title: siteTitle
                description: siteDescription
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allPost } }) =>
              allPost.nodes.map((post) => {
                const url = site.siteMetadata.siteUrl + post.slug;
                const content = `<p>${post.excerpt}</p><div style="margin-top: 50px; font-style: italic;"><strong><a href="${url}">Keep reading</a>.</strong></div><br /> <br />`;

                return {
                  title: post.title,
                  date: post.date,
                  excerpt: post.excerpt,
                  url,
                  guid: url,
                  custom_elements: [{ "content:encoded": content }],
                };
              }),
            query: `{
  allPost(sort: {date: DESC}) {
    nodes {
      title
      date(formatString: "MMMM D, YYYY")
      excerpt
      slug
    }
  }
}`,
            output: `rss.xml`,
            title: `blog.chiu.fyi`,
          },
        ],
      },
    },
  ].filter(Boolean),
};
