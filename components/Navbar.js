export default function Navbar(){
    return(
        <div className="flex items-center justify-center p-5 space-x-24">
            <span className="text-2xl">Documentation</span>
            <ul className="flex space-x-10">
                <li>About</li>
                <li>CSS</li>
                <li>Github</li>
                <li>HTML</li>
                <li>Javascript</li>
                <li>React JS</li>
            </ul>
        </div>
    )
}