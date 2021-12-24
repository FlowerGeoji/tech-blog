/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import cn from "classnames"
import L from "lodash/fp"
import { useStaticQuery, graphql, Link } from "gatsby"
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
                        instagram
                        github
                    }
                }
            }
        }
    `)

    // Set these values by editing "siteMetadata" in gatsby-config.js
    const author: Author = data.site.siteMetadata?.author
    const social: Social = data.site.siteMetadata?.social

    return (
        <div className="bio">
            <StaticImage
                className="bio-avatar"
                layout="fixed"
                formats={["auto", "webp", "avif"]}
                src="../images/profile_emoji.gif"
                width={100}
                height={100}
                quality={95}
                alt="Profile picture"
            />
            <div className={cn("flex", "flex-col", "items-start", "justify-evenly")}>
                <Link className={cn("py-0.5", "px-1.5", "rounded-lg", "bg-author", "text-primary", "font-bold", "animate-siso")} to={"/aboutme"}>
                    <span>@{author.name}</span>
                </Link>
                <span className={cn("mt-1", "text-sm", "text-summary", "font-semibold")}>{author.summary}</span>
                <div className={cn("flex", "flex-row", "space-x-2")}>
                    {L.pipe(
                        L.toPairs,
                        L.map(([key, url]) => (
                            <a key={key} href={url} target={"_blank"} className={cn("text-primary", "text-sm", "font-semibold")}>
                                {"✤ " + key}
                            </a>
                        ))
                    )(social)}
                </div>
            </div>
        </div>
    )
}

export default Bio
