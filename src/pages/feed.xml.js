import rss from '@astrojs/rss';
import sanitizeHtml from "sanitize-html";

export async function GET(context) {
    const postImportResult = import.meta.glob('./post/*.md', { eager: true });
    const posts = Object.values(postImportResult);
    return rss({
        // `<title>` field in output xml
        title: 'EvanLuo42\'s Blog',
        // `<description>` field in output xml
        description: 'An IBDP M25 student.',
        // Pull in your project "site" from the endpoint context
        // https://docs.astro.build/en/reference/api-reference/#contextsite
        site: context.site,
        // Array of `<item>`s in output xml
        // See "Generating items" section for examples using content collections and glob imports
        items: posts.map((post) => ({
            link: post.url,
            content: sanitizeHtml(post.compiledContent()),
            title: post.frontmatter.title,
            pubDate: post.frontmatter.date,
        })),
        // (optional) inject custom xml
        customData: `<language>en-us</language>`,
    });
}