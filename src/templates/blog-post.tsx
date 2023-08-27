import * as React from "react"
import cn from "classnames"
import { Link, graphql } from "gatsby"
import { isEmpty, isNotNil, prop } from "ramda"

import Adsense from "react-adsense"
import Bio from "../components/Bio"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import RelatedPosts from "../components/RelatedPosts"
import Utterances from "../components/Utterances"
import KakaoAdfit from "../components/KakaoAdfit"

import "../styles/code.scss"

const BlogPostTemplate = ({ data, location, children }) => {
    const post = data.mdx
    const siteTitle = data.site.siteMetadata?.title || `Title`
    const { previous, next, related } = data

    return (
        <Layout location={location} title={siteTitle}>
            <Seo title={post.frontmatter.title} description={post.frontmatter.description || post.excerpt} />
            <article className={cn("blog-post")} itemScope itemType="http://schema.org/Article">
                <header className={cn("pb-5")}>
                    <h1 itemProp="headline">{post.frontmatter.title}</h1>
                    <span className={cn("text-sm")}>
                        {`${post.frontmatter.date}`}
                        {isNotNil(post.frontmatter.modified) && !isEmpty(post.frontmatter.modified) && ` - (업데이트됨: ${post.frontmatter.modified})`}
                    </span>
                </header>

                <div className={cn("flex", "items-center", "justify-center")}>
                    <KakaoAdfit adUnit={"DAN-g54XFc5zmIhKyNJr"} adWidth={728} adHeight={90} style={{ display: "none" }} />
                </div>

                <section className={cn("pt-10")} itemProp="articleBody">
                    {children}
                </section>

                <RelatedPosts className={cn("border-t", "mt-10")} relatedPosts={prop("nodes", related)} />

                <footer className={cn("border-t")}>
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
                    <Bio />
                </footer>
            </article>

            <Adsense.Google
                client="ca-pub-3367639903622741"
                slot="7800150469"
                style={{ display: "block" }}
                format="auto"
                responsive="true"
                // layoutKey="-gw-1+2a-9x+5c"
            />
            <Utterances />
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
    "border-opacity-5",
)

export default BlogPostTemplate

export const pageQuery = graphql`
    query BlogPostBySlug($id: String!, $previousPostId: String, $nextPostId: String, $related: String) {
        site {
            siteMetadata {
                title
            }
        }
        mdx(id: { eq: $id }) {
            id
            excerpt(pruneLength: 160)
            frontmatter {
                title
                date(formatString: "MMMM DD, YYYY")
                description
            }
        }
        previous: mdx(id: { eq: $previousPostId }) {
            fields {
                slug
            }
            frontmatter {
                title
            }
        }
        next: mdx(id: { eq: $nextPostId }) {
            fields {
                slug
            }
            frontmatter {
                title
            }
        }
        related: allMdx(sort: { frontmatter: { date: DESC } }, filter: { id: { ne: $id }, frontmatter: { related: { eq: $related, ne: null } } }) {
            nodes {
                id
                fields {
                    slug
                }
                excerpt
                frontmatter {
                    title
                    category
                    description
                    date(formatString: "YYYY/MM/DD")
                }
            }
        }
    }
`
