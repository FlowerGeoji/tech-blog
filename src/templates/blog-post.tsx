import * as React from "react"
import cn from "classnames"
import { Link, graphql } from "gatsby"
import L from "lodash/fp"

import Bio from "../components/Bio"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import RelatedPosts from "../components/RelatedPosts"

import "../styles/code.scss"

const BlogPostTemplate = ({ data, location }) => {
    const post = data.markdownRemark
    const siteTitle = data.site.siteMetadata?.title || `Title`
    const { previous, next, related } = data

    return (
        <Layout location={location} title={siteTitle}>
            <Seo title={post.frontmatter.title} description={post.frontmatter.description || post.excerpt} />
            <article className={cn("blog-post")} itemScope itemType="http://schema.org/Article">
                <header className={cn("pb-5")}>
                    <h1 itemProp="headline">{post.frontmatter.title}</h1>
                    <span className={cn("text-sm")}>{post.frontmatter.date}</span>
                </header>
                <section className={cn("pt-10")} dangerouslySetInnerHTML={{ __html: post.html }} itemProp="articleBody" />

                <RelatedPosts relatedPosts={L.get("nodes", related)} />

                <footer className={cn("border-t")}>
                    <Bio />
                </footer>
            </article>
            <nav className="blog-post-nav">
                <ul className={cn("flex", "flex-wrap", "justify-between", "list-none", "p-0")}>
                    <li>
                        {previous && (
                            <Link className={NavClassName} to={previous.fields.slug} rel="prev">
                                ← {previous.frontmatter.title}
                            </Link>
                        )}
                    </li>
                    <li>
                        {next && (
                            <Link className={NavClassName} to={next.fields.slug} rel="next">
                                {next.frontmatter.title} →
                            </Link>
                        )}
                    </li>
                </ul>
            </nav>
            <script
                src="https://utteranc.es/client.js"
                repo="https://github.com/FlowerGeoji/tech-blog"
                issue-term="pathname"
                label="utterances"
                theme="github-light"
                crossorigin="anonymous"
                async
            ></script>
        </Layout>
    )
}

const NavClassName = cn(
    "border",
    "border-solid",
    "rounded-md",
    "py-2",
    "px-4",
    "text-secondary",
    "font-semibold",
    "bg-secondary",
    "bg-opacity-5",
    "border-secondary",
    "border-opacity-5"
)

export default BlogPostTemplate

export const pageQuery = graphql`
    query BlogPostBySlug($id: String!, $previousPostId: String, $nextPostId: String, $related: String) {
        site {
            siteMetadata {
                title
            }
        }
        markdownRemark(id: { eq: $id }) {
            id
            excerpt(pruneLength: 160)
            html
            frontmatter {
                title
                date(formatString: "MMMM DD, YYYY")
                description
            }
        }
        previous: markdownRemark(id: { eq: $previousPostId }) {
            fields {
                slug
            }
            frontmatter {
                title
            }
        }
        next: markdownRemark(id: { eq: $nextPostId }) {
            fields {
                slug
            }
            frontmatter {
                title
            }
        }
        related: allMarkdownRemark(sort: { order: DESC, fields: frontmatter___date }, filter: { frontmatter: { related: { eq: $related, ne: null } } }) {
            nodes {
                id
                fields {
                    slug
                }
                frontmatter {
                    title
                    category
                }
            }
        }
    }
`
