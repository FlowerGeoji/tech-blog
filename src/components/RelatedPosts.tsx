import React from "react"
import { Link } from "gatsby"
import L from "lodash/fp"
import cn from "classnames"

interface ICategoriesProps {
    relatedPosts?: MarkdownRemark[]
}

function Categories({ relatedPosts }: ICategoriesProps) {
    return (
        <section className={cn("py-10", { hidden: L.isEmpty(relatedPosts) })}>
            <h5 className={cn("mt-0")}>Related Posts</h5>
            <ul className={cn("px-10")}>
                {L.map(
                    relatedPost => (
                        <li className={"list-none"}>
                            <Link className={NavClassName} to={L.get("fields.slug", relatedPost)}>
                                {`${L.upperFirst(L.get("frontmatter.category", relatedPost))} - ${L.get("frontmatter.title", relatedPost)}`}
                            </Link>
                        </li>
                    ),
                    relatedPosts
                )}
            </ul>
        </section>
    )
}

const NavClassName = cn(
    "block",
    "border",
    "border-solid",
    "rounded-md",
    "py-4",
    "px-4",
    "text-primary",
    "font-semibold",
    "hover:bg-primary",
    "hover:bg-opacity-5",
    "border-primary",
    "border-opacity-90"
)

export default Categories
