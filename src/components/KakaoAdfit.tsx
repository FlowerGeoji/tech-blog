import React, { useEffect, useRef, useState } from "react"
import { toString } from "ramda"
import cn from "classnames"

interface IKakaoAdfitProps {
    className?: string
    style?: React.CSSProperties
    adUnit: string
    adWidth: number
    adHeight: number
}

const KakaoAdfit: React.FC<IKakaoAdfitProps> = function (props) {
    const { className, style, adUnit, adWidth, adHeight } = props
    const adFitRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const scr = document.createElement("script")
        scr.type = "text/javascript"
        scr.src = "//t1.daumcdn.net/kas/static/ba.min.js"
        scr.setAttribute("async", "true")
        adFitRef.current?.appendChild(scr)
    }, [])

    return (
        <div className="adfit" ref={adFitRef}>
            <ins
                className={cn("kakao_ad_area", className)}
                style={style}
                data-ad-unit={adUnit}
                data-ad-width={toString(adWidth)}
                data-ad-height={toString(adHeight)}
            ></ins>
        </div>
    )
}

export default KakaoAdfit
