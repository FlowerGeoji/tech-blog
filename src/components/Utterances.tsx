import React, { createRef, useLayoutEffect } from "react"

const Utterances: React.FC<{}> = function () {
    const containerRef = createRef<HTMLDivElement>()

    useLayoutEffect(() => {
        const utterances = document.createElement("script")

        const attributes = {
            src: "https://utteranc.es/client.js",
            repo: "FlowerGeoji/tech-blog",
            theme: "github-light",
            "issue-term": "pathname",
            label: "✨💬 comments ✨",
            crossOrigin: "anonymous",
            async: "true",
        }

        Object.entries(attributes).forEach(([key, value]) => {
            utterances.setAttribute(key, value)
        })

        containerRef.current!.appendChild(utterances)
    }, [])

    return <div ref={containerRef} />
}

export default Utterances
