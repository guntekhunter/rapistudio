import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-black text-white py-12 px-6">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
                <div className="mb-6 md:mb-0">
                    <h3 className="text-2xl font-bold">rapistudio</h3>
                    <p className="text-gray-400 mt-2 text-sm">© {new Date().getFullYear()} Rapistudio. All rights reserved.</p>
                </div>

                <div className="flex space-x-8">
                    <Link href="#" className="text-gray-400 hover:text-white transition-colors">Instagram</Link>
                    <Link href="#" className="text-gray-400 hover:text-white transition-colors">Twitter</Link>
                    <Link href="#" className="text-gray-400 hover:text-white transition-colors">LinkedIn</Link>
                </div>
            </div>
        </footer>
    );
}
