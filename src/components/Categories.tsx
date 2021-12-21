import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import L from "lodash/fp"
import cn from "classnames"

interface ICategoriesProps {
    onClickCategory?: (category?: string) => void
}

function Categories({ onClickCategory }: ICategoriesProps) {
    const _data = useStaticQuery(graphql`
        query CategoriesQuery {
            site {
                siteMetadata {
                    categories
                }
            }
        }
    `)

    const _categories: string[] = L.get("site.siteMetadata.categories", _data)

    const [_category, _setCategory] = useState<string>()

    function _onClickCategory(category?: string) {
        _setCategory(category)
        onClickCategory(category)
    }

    return (
        <div className={cn("space-x-1", "sticky", "top-0", "bg-gray-50", "py-4", "px-8")}>
            <button className={ButtonClass({ selected: L.isEmpty(_category) })} onClick={() => _onClickCategory()}>
                All
            </button>
            {L.map(category => {
                return (
                    <button key={category} className={ButtonClass({ selected: L.isEqual(category, _category) })} onClick={() => _onClickCategory(category)}>
                        {category}
                    </button>
                )
            }, _categories)}
        </div>
    )
}

function ButtonClass({ selected }: { selected: boolean }) {
    return cn("border", "border-solid", "py-1", "px-3", "rounded-full", "font-semibold", { "text-primary": selected, "border-primary": selected })
}

export default Categories
