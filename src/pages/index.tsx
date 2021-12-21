import React, { useState } from "react"
import { graphql } from "gatsby"

import Bio from "../components/Bio"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import Categories from "../components/Categories"
import PostList from "../components/PostList"

const BlogIndex = ({ data, location }) => {
    const siteTitle = data.site.siteMetadata?.title || `Title`

    const [_category, _setCategory] = useState<string>()

    return (
        <Layout location={location} title={siteTitle}>
            <Seo title="All posts" />
            <Bio />
            <Categories onClickCategory={_setCategory} />
            <PostList category={_category} />
        </Layout>
    )
}

export default BlogIndex

export const pageQuery = graphql`
    query {
        site {
            siteMetadata {
                title
            }
        }
    }
`
