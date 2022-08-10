import React from "react"
import L from "lodash/fp"
import cn from "classnames"
import PostItem from "../components/PostItem"

interface ICategoriesProps {
    relatedPosts?: MarkdownRemark[]
}

function Categories({ relatedPosts }: ICategoriesProps) {
    return (
        <section className={cn("py-10", { hidden: L.isEmpty(relatedPosts) })}>
            <h1 className={cn("mt-10")}>Related Posts</h1>
            <ul className={cn("px-10")}>
                {L.map(
                    relatedPost => (
                        <PostItem post={relatedPost} />
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
