import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import L from "lodash/fp"
import cn from "classnames"
import Adsense from "react-adsense"
import PostItem from "./PostItem"

interface IPostListProps {
    category?: string
}

function PostList({ category }: IPostListProps) {
    const data = useStaticQuery<{ allMarkdownRemark: AllMarkdownRemark }>(graphql`
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
                return (
                    <li key={post.fields.slug}>
                        <PostItem post={post} />
                    </li>
                )
            })}
        </ol>
    )
}

export default PostList
