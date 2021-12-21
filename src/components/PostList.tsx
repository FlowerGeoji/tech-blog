import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import L from "lodash/fp"
import gql from "graphql-tag"
import { useQuery } from "@apollo/react-hooks"
import cn from "classnames"

interface IPostListProps {
    category?: string
}

function PostList({ category }: IPostListProps) {
    const data = useStaticQuery(graphql`
        query PostList {
            allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
                nodes {
                    excerpt
                    fields {
                        slug
                    }
                    frontmatter {
                        date(formatString: "MMMM DD, YYYY")
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
        <ol className={cn("list-none", "divide-y")}>
            {posts.map(post => {
                const title = post.frontmatter.title || post.fields.slug

                return (
                    <li key={post.fields.slug}>
                        <article className="post-list-item" itemScope itemType="http://schema.org/Article">
                            <header>
                                <h2>
                                    <Link to={post.fields.slug} itemProp="url">
                                        <span itemProp="headline">{title}</span>
                                    </Link>
                                </h2>
                                <small>{post.frontmatter.date}</small>
                            </header>
                            <section>
                                <p
                                    dangerouslySetInnerHTML={{
                                        __html: post.frontmatter.description || post.excerpt,
                                    }}
                                    itemProp="description"
                                />
                            </section>
                        </article>
                    </li>
                )
            })}
        </ol>
    )
}

export default PostList
