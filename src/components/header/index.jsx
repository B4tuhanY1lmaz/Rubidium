import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MdRssFeed } from "react-icons/md"

import { readConfig } from '@/libs/readConfig'

function Header({ path, pathLink, blogLink, blogTitle }) {
    const config = readConfig()

    return (
        <div className="sticky top-0 rounded-md backdrop-blur-md bg-white/5 p-2 items-center">
            <div className="flex justify-between text-lg">
                <div className="flex">
                    <Button variant="ghost3" size="sm2" asChild><Link href={"/"}>{config.siteName}</Link></Button>
                    <p>/</p>
                    {path && (
                        <>
                            <Button variant="ghost3" size="sm2" asChild><Link href={pathLink}>{path}</Link></Button>

                        </>
                    )}
                    {blogLink && (
                        <nav className="hidden md:flex">
                            <p>/</p>
                            <Button variant="ghost3" size="sm2" asChild><Link href={blogLink}>{blogTitle}</Link></Button>
                        </nav>
                    )}
                </div>
                <div className="flex gap-1">
                    <Button variant="ghost3" size="icon" asChild><Link href={"/feed.xml"}><MdRssFeed className="h-4 w-4" /></Link></Button>
                </div>
            </div>
        </div>
    )
}

export default Header;