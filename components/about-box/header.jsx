import { Button } from "@/components/ui/button"
import Link from "next/link"

function HomeHeader({ header }) {
    return (
        <div className="flex justify-center font-light text-xl">
            <div className="flex gap-6 py-1 backdrop-blur-md bg-white/10 hover:-translate-y-1 transition duration-200 rounded-lg px-2">
                {header.map((head, index) => (
                    <Button variant="ghost2" asChild>
                        <Link href={head.link} key={index}>{head.title}</Link>
                    </Button>
                ))}
            </div>
        </div>
    )
}

export default HomeHeader