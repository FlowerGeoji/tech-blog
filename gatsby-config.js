module.exports = {
    siteMetadata: {
        title: `Frontend Tech blog`,
        author: {
            name: `FlowerGeoji`,
            summary: `판타지 소설, 그 중에서도 아포칼립스나 사이버펑크 장르를 가장 좋아하는 프론트엔드 개발자입니다.`,
        },
        social: {
            github: `https://github.com/FlowerGeoji`,
            instagram: `https://www.instagram.com/good_jad/`,
        },
        description: `A frontend tech blog posting react, javascript, typescript, etc`,
        categories: ["react", "javascript", "typescript", "web"],
        siteUrl: `https://flowergeoji.me`,
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-image`,
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
        {
            resolve: `gatsby-plugin-mdx`,
            options: {
                gatsbyRemarkPlugins: [
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: "768",
                        },
                    },
                    {
                        resolve: `gatsby-remark-responsive-iframe`,
                        options: {
                            wrapperStyle: `margin-bottom: 1.0725rem`,
                        },
                    },
                    {
                        resolve: `gatsby-remark-prismjs`,
                        options: {
                            inlineCodeMarker: "%",
                        },
                    },
                    `gatsby-remark-copy-linked-files`,
                    `gatsby-remark-smartypants`,
                ],
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `pages`,
                path: `${__dirname}/src/pages`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/content/blog`,
                name: `posts`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                trackingId: `G-VHVHG9B7VZ`, // The property ID; the tracking code won't be generated without it
                head: false, // Defines where to place the tracking script - `true` in the head and `false` in the body
                // anonymize: true, // Setting this parameter is optional
                // respectDNT: true, // Setting this parameter is also optional
                // exclude: ["/preview/**", "/do-not-track/me/too/"], // Avoids sending pageview hits from custom paths
                pageTransitionDelay: 0, // Delays sending pageview hits on route update (in milliseconds)
                optimizeId: "YOUR_GOOGLE_OPTIMIZE_TRACKING_ID", // Enables Google Optimize using your container Id
                experimentId: "YOUR_GOOGLE_EXPERIMENT_ID", // Enables Google Optimize Experiment ID
                variationId: "YOUR_GOOGLE_OPTIMIZE_VARIATION_ID", // Set Variation ID. 0 for original 1,2,3....
                defer: false, // Defers execution of google analytics script after page load
                sampleRate: 5, // Any additional optional fields
                siteSpeedSampleRate: 10,
                // cookieDomain: "example.com",
                // enableWebVitalsTracking: true, // defaults to false
            },
        },
        {
            resolve: "gatsby-plugin-sitemap",
            options: {
                query: `
                {
                    site {
                        siteMetadata {
                            siteUrl
                        }
                    }  
                    allMdx {
                        nodes {
                            fields {
                                slug
                            }
                            frontmatter {
                                modified
                                date
                            }
                        }
                    }
                }`,
                resolveSiteUrl: ({
                    site: {
                        siteMetadata: { siteUrl },
                    },
                }) => siteUrl,
                resolvePages: ({ allMdx: { nodes: allMarkdownPages } }) => {
                    const pages = allMarkdownPages.map(page => {
                        const modified =
                            page.frontmatter.modified === null || page.frontmatter.modified === undefined || page.frontmatter.modified === ""
                                ? page.frontmatter.date
                                : page.frontmatter.modified
                        return {
                            path: page.fields.slug,
                            modified,
                        }
                    })
                    return [...pages]
                },
                serialize: ({ path, modified }) => {
                    return {
                        url: path,
                        lastmod: modified,
                        changefreq: "daily",
                        priority: 0.7,
                    }
                },
            },
        },
        {
            resolve: `gatsby-plugin-feed`,
            options: {
                query: `
                {
                    site {
                        siteMetadata {
                            title
                            description
                            siteUrl
                            site_url: siteUrl
                        }
                    }
                }`,
                feeds: [
                    {
                        serialize: ({ query: { site, allMdx } }) => {
                            return allMdx.nodes.map(node => {
                                return Object.assign({}, node.frontmatter, {
                                    description: node.excerpt,
                                    date: node.frontmatter.date,
                                    url: site.siteMetadata.siteUrl + node.fields.slug,
                                    guid: site.siteMetadata.siteUrl + node.fields.slug,
                                    // custom_elements: [{ "content:encoded": node.html }],
                                })
                            })
                        },
                        query: `
                        {
                            allMdx(
                                sort: { frontmatter: { date: DESC } },
                            ) {
                                nodes {
                                    excerpt
                                    fields {
                                        slug
                                    }
                                    frontmatter {
                                        title
                                        date
                                    }
                                }
                            }
                        }`,
                        output: "/rss.xml",
                        title: "Gatsby Starter Blog RSS Feed",
                    },
                ],
            },
        },
        {
            resolve: "gatsby-plugin-robots-txt",
            options: {
                host: "https://flowergeoji.me",
                sitemap: "https://flowergeoji.me/sitemap/sitemap-index.xml",
                policy: [{ userAgent: "*", allow: "/" }],
            },
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `FlowerGeoji Tech Blog`,
                short_name: `FG-TechBlog`,
                start_url: `/`,
                // This will impact how browsers show your PWA/website
                // https://css-tricks.com/meta-theme-color-and-trickery
                background_color: `#ffffff`,
                theme_color: `#945abc`,
                display: `standalone`,
                icon: `src/images/icon.png`, // This path is relative to the root of the site.
                orientation: `portrait`,
            },
        },
        `gatsby-plugin-postcss`,
        {
            resolve: `gatsby-plugin-sass`,
            options: {
                postCssPlugins: [require("tailwindcss"), require("./tailwind.config.js")],
            },
        },
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        `gatsby-plugin-offline`,
    ],
}
