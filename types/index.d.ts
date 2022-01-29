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
    category?: string
    related?: string
}

interface Fields {
    slug: string
}

interface MarkdownRemark {
    frontmatter?: Frontmatter
    fields?: Fields
}
