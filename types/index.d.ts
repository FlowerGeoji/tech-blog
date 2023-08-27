interface Author {
    name?: string
    summary?: string
}
interface Social {
    instagram?: string
    github?: string
}

interface SiteMetaData {
    author?: Author
    siteUrl?: string
    social?: Social
}

interface Frontmatter {
    title?: string
    description?: string
    date?: Date
    modified?: Date
    category?: string
    related?: string
}

interface Fields {
    slug: string
}

interface Mdx {
    excerpt?: string
    frontmatter?: Frontmatter
    fields?: Fields
}

interface AllMdx {
    nodes?: Mdx[]
}
