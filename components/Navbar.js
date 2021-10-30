import { useState } from "react"
import Link from 'next/link'

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <>
            <div className="flex items-center justify-between p-5 mx-auto max-w-screen-md">
                <div className="flex items-center space-x-5 font-lato text-base">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <Link href="/">
                        <a>Documentation</a>
                    </Link>
                </div>
                <ul className="hidden md:flex space-x-7 font-lato text-base">
                    <Link href="/about">
                        <a>About</a>
                    </Link>
                    <li>Blog</li>
                    <li>Portofolio</li>
                </ul>
                <div className="visible md:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                        onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? (<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />) :
                            (<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />)}
                    </svg>
                </div>
            </div>
            <div className={`${isOpen ? ('visible') : ('hidden')}`}>
                <ul className="flex flex-col justify-center items-center space-y-2 font-lato text-base">
                    <li>About</li>
                    <li>Github</li>
                    <li>HTML</li>
                    <li>Javascript</li>
                    <li>React JS</li>
                </ul>
            </div>
        </>
    )
}