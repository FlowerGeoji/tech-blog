import * as React from "react"
import { Link } from "gatsby"
import cn from "classnames"

const Layout = ({ location, title, children }) => {
    // @ts-ignore
    const rootPath = `${__PATH_PREFIX__}/`
    const isRootPath = location.pathname === rootPath
    console.log({ isRootPath, rootPath })

    return (
        <div>
            <header className={cn("global-header", "p-3")}>
                <Link className={cn("header-link-home", "text-white", "opacity-80")} to="/">
                    {title}
                </Link>
            </header>
            <div className="global-wrapper" data-is-root-path={isRootPath}>
                <main>{children}</main>
                <footer>
                    © {new Date().getFullYear()}, Built with
                    {` `}
                    <a href="https://www.gatsbyjs.com">Gatsby</a>
                </footer>
            </div>
        </div>
    )
}

export default Layout
