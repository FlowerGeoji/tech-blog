import React, { useState } from "react"
import { graphql } from "gatsby"

import Bio from "../components/Bio"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import Categories from "../components/Categories"
import PostList from "../components/PostList"
import KakaoAdfit from "../components/KakaoAdfit"

if (typeof window !== "undefined") {
    window.addEventListener("beforeinstallprompt", function (event) {
        event.preventDefault()
        console.log("beforeinstallprompt", event)
    })
}

const BlogIndex = ({ data, location }) => {
    const siteTitle = data.site.siteMetadata?.title || `Title`

    const [_category, _setCategory] = useState<string>()

    return (
        <Layout location={location} title={siteTitle}>
            <Seo title="FlowerGeoji" />
            <Bio />
            <Categories onClickCategory={_setCategory} />
            <KakaoAdfit adUnit="DAN-r5K5BD6IIrzcxz7M" adWidth={320} adHeight={100} style={{ display: "none" }} />
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
