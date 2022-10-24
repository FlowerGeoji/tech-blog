import React from "react"
import L from "lodash/fp"
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

    return (
        <ins
            className={cn("kakao_ad_area", className)}
            style={style}
            data-ad-unit={adUnit}
            data-ad-width={L.toNumber(adWidth)}
            data-ad-height={L.toNumber(adHeight)}
        ></ins>
    )
}

export default KakaoAdfit
