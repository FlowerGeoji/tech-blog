import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { isEmpty, isNil, filter, equals } from "ramda"
import cn from "classnames"
// import Adsense from "react-adsense"
import PostItem from "./PostItem"

interface IPostListProps {
    category?: string
}

function PostList({ category }: IPostListProps) {
    const data = useStaticQuery<{ allMdx: AllMdx }>(graphql`
        query PostList {
            allMdx(sort: { frontmatter: { date: DESC } }, filter: { frontmatter: { draft: { eq: false } } }) {
                nodes {
                    excerpt
                    fields {
                        slug
                    }
                    frontmatter {
                        date(formatString: "YYYY/MM/DD")
                        modified(formatString: "YYYY/MM/DD")
                        title
                        description
                        category
                    }
                }
            }
        }
    `)

    const posts = isEmpty(category) || isNil(category) ? data.allMdx.nodes : filter(node => equals(node.frontmatter.category, category), data.allMdx.nodes)

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
                    <>
                        <li key={post.fields.slug}>
                            <PostItem post={post} />
                        </li>
                        {/* <li>
                            <Adsense.Google
                                client="ca-pub-3367639903622741"
                                slot="5978578546"
                                style={{ display: "block" }}
                                format="fluid"
                                responsive="true"
                                layoutKey="--ez+64+31-d5+c4"
                            />
                        </li> */}
                    </>
                )
            })}
        </ol>
    )
}

export default PostList
