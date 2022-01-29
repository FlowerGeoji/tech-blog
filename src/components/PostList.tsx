import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import L from "lodash/fp"
import cn from "classnames"

interface IPostListProps {
    category?: string
}

function PostList({ category }: IPostListProps) {
    const data = useStaticQuery(graphql`
        query PostList {
            allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }, filter: { frontmatter: { draft: { eq: false } } }) {
                nodes {
                    excerpt
                    fields {
                        slug
                    }
                    frontmatter {
                        date(formatString: "YYYY/MM/DD")
                        title
                        description
                        category
                    }
                }
            }
        }
    `)

    const posts = L.isEmpty(category)
        ? data.allMarkdownRemark.nodes
        : L.filter(node => L.isEqual(node.frontmatter.category, category), data.allMarkdownRemark.nodes)

    if (posts.length === 0) {
        return (
            <p>
                No blog posts found. Add markdown posts to "content/blog" (or the directory you specified for the "gatsby-source-filesystem" plugin in
                gatsby-config.js).
            </p>
        )
    }

    return (
        <ol className={cn("list-none", "px-8", "divide-y")}>
            {posts.map(post => {
                const title = post.frontmatter.title || post.fields.slug

                return (
                    <li key={post.fields.slug}>
                        <Link to={post.fields.slug} itemProp="url">
                            <article className={cn("post-list-item", "hover:text-shadow")} itemScope itemType="http://schema.org/Article">
                                <header>
                                    <h3>
                                        <span itemProp="headline" className={cn("text-gray-700")}>
                                            {title}
                                        </span>
                                    </h3>
                                    <small className={cn("text-light")}>{post.frontmatter.date}</small>
                                </header>
                                <section>
                                    <p
                                        dangerouslySetInnerHTML={{
                                            __html: post.frontmatter.description || post.excerpt,
                                        }}
                                        itemProp="description"
                                        className={cn("text-summary", "font-semibold")}
                                    />
                                </section>
                            </article>
                        </Link>
                    </li>
                )
            })}
        </ol>
    )
}

export default PostList
