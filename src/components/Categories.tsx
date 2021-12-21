import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import L from "lodash/fp"
import cn from "classnames"

interface ICategoriesProps {
    onClickCategory?: (category?: string) => void
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
            <button className={ButtonClass} onClick={() => onClickCategory()}>
                All
            </button>
            {L.map(category => {
                return (
                    <button key={category} className={ButtonClass} onClick={() => onClickCategory(category)}>
                        {category}
                    </button>
                )
            }, categories)}
        </div>
    )
}

const ButtonClass = cn("border", "border-solid", "py-1", "px-3", "rounded-full")

export default Categories
