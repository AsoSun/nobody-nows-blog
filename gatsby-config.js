/**
 * @type {import('gatsby').GatsbyConfig}
 * 
 */


module.exports = {
  siteMetadata: {
    title: `巫女的药房`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    `gatsby-transformer-sharp`,
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `posts`,
        path: `${__dirname}/posts/`
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `pictures`,
        path: `${__dirname}/pictures/`
      }
    },
    "gatsby-plugin-sass",
    
    {
      resolve:`gatsby-plugin-mdx`,
      options: {
        mdxOptions: {
          remarkPlugins:[
            require(`remark-gfm`),
            require('remark-footnotes')
          ],
        },
        gatsbyRemarkPlugins: [
          {
            resolve:`gatsby-remark-prismjs`,
            options: {
              classPrefix: "language-",
              inlineCodeMarker: null,
              aliases: {},
              showLineNumbers: false,
              noInlineHighlight: false,
              languageExtensions: [
                {
                  language: "superscript",
                  extend: "javascript",
                  definition: {
                    superscript_types: /(SuperType)/,
                  },
                  insertBefore: {
                    function: {
                      superscript_keywords: /(superif|superelse)/,
                    },
                  },
                },
              ],
              prompt: {
                user: "root",
                host: "localhost",
                global: false,
              },
              escapeEntities: {},
            }
          },
        ]

    }
    },


  ],
}
