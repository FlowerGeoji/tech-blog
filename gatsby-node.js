const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

// exports.onCreatePage = ({ page, actions }) => {
//     console.log({ page })
// }

exports.createPages = async ({ graphql, actions, reporter }) => {
    const { createPage } = actions

    // Define a template for blog post
    const blogPost = path.resolve(`./src/templates/blog-post.tsx`)

    // Get all markdown blog posts sorted by date
    const result = await graphql(`
        {
            allMdx(sort: { frontmatter: { date: ASC } }, filter: { frontmatter: { draft: { eq: false } } }, limit: 1000) {
                nodes {
                    id
                    fields {
                        slug
                    }
                    frontmatter {
                        category
                        related
                    }
                    internal {
                        contentFilePath
                        type
                    }
                }
            }
            site {
                siteMetadata {
                    categories
                }
            }
        }
    `)

    if (result.errors) {
        reporter.panicOnBuild(`There was an error loading your blog posts`, result.errors)
        return
    }

    const posts = result.data.allMdx.nodes

    // Create blog posts pages
    // But only if there's at least one markdown file found at "content/blog" (defined in gatsby-config.js)
    // `context` is available in the template as a prop and as a variable in GraphQL

    if (posts.length > 0) {
        posts.forEach((post, index) => {
            const previousPostId = index === 0 ? null : posts[index - 1].id
            const nextPostId = index === posts.length - 1 ? null : posts[index + 1].id

            createPage({
                path: post.fields.slug,
                component: `${blogPost}?__contentFilePath=${post.internal.contentFilePath}`,
                context: {
                    id: post.id,
                    previousPostId,
                    nextPostId,
                    related: post.frontmatter.related,
                },
            })
        })
    }
}

exports.onCreateNode = ({ node, actions, getNode }) => {
    const { createNodeField } = actions

    if (node.internal.type === `Mdx`) {
        const value = createFilePath({ node, getNode })

        createNodeField({
            name: `slug`,
            node,
            value,
        })
    }
}

exports.createSchemaCustomization = ({ actions }) => {
    const { createTypes } = actions

    // Explicitly define the siteMetadata {} object
    // This way those will always be defined even if removed from gatsby-config.js

    // Also explicitly define the Markdown frontmatter
    // This way the "Mdx" queries will return `null` even when no
    // blog posts are stored inside "content/blog" instead of returning an error
    createTypes(`
    type SiteSiteMetadata {
      author: Author
      siteUrl: String
      social: Social
    }

    type Author {
      name: String
      summary: String
    }

    type Social {
      twitter: String
      instagram: String
      github: String
    }

    type Mdx implements Node {
      frontmatter: Frontmatter
      fields: Fields
    }

    type Frontmatter {
      title: String
      description: String
      date: Date @dateformat
      modified: Date @dateformat
      category: String
      related: String
    }

    type Fields {
      slug: String
    }
  `)
}
