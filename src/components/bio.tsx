/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import cn from "classnames"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Bio = () => {
    const data = useStaticQuery(graphql`
        query BioQuery {
            site {
                siteMetadata {
                    author {
                        name
                        summary
                    }
                    social {
                        twitter
                    }
                }
            }
        }
    `)

    // Set these values by editing "siteMetadata" in gatsby-config.js
    const author = data.site.siteMetadata?.author
    const social = data.site.siteMetadata?.social

    return (
        <div className="bio">
            <StaticImage
                className="bio-avatar"
                layout="fixed"
                formats={["auto", "webp", "avif"]}
                src="../images/profile.jpeg"
                width={100}
                height={100}
                quality={95}
                alt="Profile picture"
            />
            <div className={cn("flex", "flex-col", "items-start")}>
                <a className={cn("py-0.5", "px-1.5", "rounded-lg", "bg-author", "text-author", "font-bold")} href="/aboutme">
                    <span>@{author.name}</span>
                </a>
                <span className={cn("text-sm", "text-summary", "font-semibold")}>{author.summary}</span>
            </div>
        </div>
    )
}

export default Bio
