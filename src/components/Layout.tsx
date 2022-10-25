import * as React from "react"
import { Link } from "gatsby"
import cn from "classnames"

const Layout = ({ location, title, children }) => {
    // @ts-ignore
    const rootPath = `${__PATH_PREFIX__}/`
    const isRootPath = location.pathname === rootPath

    return (
        <>
            <header className={cn("global-header", "p-3")}>
                <Link className={cn("header-link-home", "text-white", "opacity-80")} to="/">
                    {title}
                </Link>
            </header>
            <div className="global-wrapper" data-is-root-path={isRootPath}>
                <main>{children}</main>
                <footer className={cn("flex", "flex-col", "items-center", "text-sm", "text-light", "py-14")}>
                    <div>
                        ©TechBlog{" "}
                        <a href="https://github.com/FlowerGeoji" target="_blank" className={cn("text-primary", "font-semibold")}>
                            FlowerGeoji
                        </a>
                        , <span>Built with</span>{" "}
                        <a href="https://github.com/JaeYeopHan/gatsby-starter-bee" target="_blank" className={cn("text-primary", "font-semibold")}>
                            Gatsby-starter-bee
                        </a>
                    </div>

                    <div>
                        Icon made by{" "}
                        <a href="https://www.freepik.com" title="Freepik" className={cn("text-primary", "font-semibold")}>
                            Freepik
                        </a>{" "}
                        from{" "}
                        <a href="https://www.flaticon.com/kr/" title="Flaticon" className={cn("text-primary", "font-semibold")}>
                            www.flaticon.com
                        </a>
                    </div>
                </footer>
            </div>
        </>
    )
}

export default Layout
