import React, { useEffect, useState } from "react"
import { graphql } from "gatsby"
import cn from "classnames"
import L from "lodash/fp"

import Bio from "../components/Bio"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import Categories from "../components/Categories"
import PostList from "../components/PostList"
import KakaoAdfit from "../components/KakaoAdfit"

const BlogIndex = ({ data, location }) => {
    const siteTitle = data.site.siteMetadata?.title || `Title`
    const [_category, _setCategory] = useState<string>()
    const [_defferedPrompt, _setDefferedPrompt] = useState(undefined)
    useEffect(() => {
        if (typeof window !== "undefined") {
            window.addEventListener("beforeinstallprompt", function (event) {
                console.log("beforeinstallprompt", event)
                event.preventDefault()
                _setDefferedPrompt(event)
            })
        }
    }, [])

    const _onConfirmPromotion = function () {
        // Show the install prompt
        _defferedPrompt.prompt()
        _defferedPrompt.userChoice.then(result => {
            console.log({ result })
        })
        _setDefferedPrompt(undefined)
    }

    const _onCancelPromotion = function () {
        _setDefferedPrompt(undefined)
    }

    return (
        <Layout location={location} title={siteTitle}>
            <div
                className={cn(
                    "fixed",
                    "top-[1rem]",
                    "left-[1rem]",
                    "right-[1rem]",
                    "bg-white",
                    "rounded-2xl",
                    "flex",
                    "flex-col",
                    "p-[1rem]",
                    "space-y-[1rem]",
                    "drop-shadow-lg",
                    "z-50",
                    { hidden: L.isNil(_defferedPrompt) }
                )}
            >
                <span>FlowerGeoji 사이트를 설치하시겠습니까?</span>
                <div className={cn("flex", "flex-row", "justify-end", "space-x-[1rem]")}>
                    <button className={cn("bg-white", "text-primary", "py-[0.25rem]", "px-[1rem]", "rounded-lg")} onClick={_onCancelPromotion}>
                        취소
                    </button>
                    <button className={cn("bg-primary", "text-white", "py-[0.25rem]", "px-[1rem]", "rounded-lg")} onClick={_onConfirmPromotion}>
                        확인
                    </button>
                </div>
            </div>
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
