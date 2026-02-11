export default function Footer(){
    return(
        <footer className="bg-gray-400 text-gray-100 py-4">
            <div className="flex justify-between px-6 text-sm">
                <span>© 2026 myWebsite</span>
                <span className="space-x-4">
                    <a href="#" className="hover:text-white">About</a>
                    <a href="#" className="hover:text-white">Contact</a>
                </span>
            </div>
        </footer>
    )
}