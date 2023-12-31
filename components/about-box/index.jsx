import React from "react";
import Image from "next/image";
import Link from "next/link";

import { BsMastodon } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";

function AboutBox({ pp, name, description }) {
    return (
        <div className="mx-auto my-40">
            <div className="flex flex-wrap gap-5 text-center justify-center">
                <Image src={pp} width={200} height={200} alt="Avatar Image" className="rounded-full"/>
                <div className="flex flex-col gap-5">
                    <h4 className="text-2xl">{name}</h4>
                    <p className="max-w-md text-base">{description}</p>
                    <div className="flex gap-5 text-xl justify-center"> 
                        <a href="https://github.com/B4tuhanY1lmaz/nextjs-starter-markdown"><BsGithub /></a> 
                        <a href="https://fosstodon.org/@B4tuhanY1lmaz"><BsMastodon /></a> 
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutBox;