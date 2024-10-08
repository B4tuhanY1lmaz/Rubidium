import Markdown from "markdown-to-jsx"
import { readConfig } from "@/libs/readConfig"
import { getPostMetadata, getPostContent } from "@/libs/getPostMetadata"
import { notFound } from "next/navigation"
import Showdown from "showdown"

import AuthorHoverCard from "@/components/AuthorHoverCard"
import Header from "@/components/header"

export function generateMetadata({ params }) {
    const slug = params.slug
    const content = getPostContent(slug)
    const config = readConfig()

    const description = () => {
        const sentences = content.content.split(/[.!?#]/).slice(0,2).join("")
        const converter = new Showdown.Converter()
        const result = converter.makeHtml(sentences)
        return result.replace(/<[^>]*>/g, "")
    }

    return {
        title: `${content.data.title} - ${config.siteName}`,
        description: description(),
        authors: [{ name: config.authorName, url: `https://${config.siteURL}` }],
        openGraph: {
            title: content.data.title,
            description: description(),
            type: "website",
            publishedTime: content.data.date
        }
    }
}

 export async function generateStaticParams() {
    const posts = await getPostMetadata()

     return posts.map((post) => ({
         slug: post.slug
     }))
 }

function PostPage(props) {
    const config = readConfig()
    const slug = props.params.slug;
    const content = getPostContent(slug);

    if (!content) {
        return notFound()
    }

    return (
        <>
            <Header path="Blog" pathLink={"/blog"} blogLink={`/blog/${slug}`} blogTitle={content.data.title}/>
        <div className="flex flex-col place-content-center py-10 px-0 sm:px-10 md:px-20 w-full text-xl sm:text-2xl md:text-3xl">
            <h1 className="font-bold">{content.data.title}</h1>
            <div className="flex flex-wrap justify-between mt-2">
                <AuthorHoverCard />
                <p className="text-sm">{`${new Date(content.data.date).toDateString()}`}</p>
            </div>
        </div>
        <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700 justify-center"></hr>
        <div className="text-lg max-w-prose mx-auto">
            <article className="prose prose-invert lg:prose-xl
            prose-code:text-sm prose-code:mx-5 prose-code:my-5 prose-code:bg-slate-800 prose-pre:bg-slate-800">
                <Markdown>{content.content}</Markdown>
            </article>
        </div>
        </>
    )
}

export default PostPage;