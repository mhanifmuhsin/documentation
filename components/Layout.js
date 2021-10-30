import Footer from "./Footer"
import Navbar from "./Navbar"
export default function Layout({ children }) {
    return (
        <>
            <Navbar />
            <main className="max-w-screen-md mx-auto px-5">{children}</main>
            <Footer />
        </>
    )
}