import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 dark:bg-black/80 dark:border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0">
                        <Link href="/" className="text-2xl font-bold tracking-tighter hover:opacity-80 transition-opacity">
                            rapistudio
                        </Link>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            <Link href="#" className="hover:text-gray-600 dark:hover:text-gray-300 px-3 py-2 transition-colors">Work</Link>
                            <Link href="#" className="hover:text-gray-600 dark:hover:text-gray-300 px-3 py-2 transition-colors">About</Link>
                            <Link href="#" className="hover:text-gray-600 dark:hover:text-gray-300 px-3 py-2 transition-colors">Contact</Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}
