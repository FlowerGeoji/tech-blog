import React, { MouseEventHandler } from "react"
import { useStaticQuery, graphql } from "gatsby"
import L from "lodash/fp"
import cn from "classnames"

interface ICategoriesProps {
    onClickCategory?: MouseEventHandler
}

function Categories({ onClickCategory }: ICategoriesProps) {
    const data = useStaticQuery(graphql`
        query CategoriesQuery {
            site {
                siteMetadata {
                    categories
                }
            }
        }
    `)

    const categories: string[] = L.get("site.siteMetadata.categories", data)

    return (
        <div className={cn("space-x-1")}>
            {L.map(category => {
                return (
                    <button className={cn("border", "border-solid", "py-1", "px-3", "rounded-full")} onClick={onClickCategory}>
                        {category}
                    </button>
                )
            }, categories)}
        </div>
    )
}

export default Categories
