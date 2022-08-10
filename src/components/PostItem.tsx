import React from "react"
import { Link } from "gatsby"
import cn from "classnames"

interface IPostItemProps {
    post: MarkdownRemark
}

export default function PostItem({ post }: IPostItemProps) {
    return (
        <Link to={post.fields.slug} itemProp="url">
            <article className={cn("post-list-item", "hover:text-shadow")} itemScope itemType="http://schema.org/Article">
                <header>
                    <h3>
                        <span itemProp="headline" className={cn("text-gray-700")}>
                            {post.frontmatter.title || post.fields.slug}
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
    )
}
