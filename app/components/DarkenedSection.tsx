import Image from "next/image";

export default function DarkenedSection() {
    return (
        <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
            <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
                <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
                    Design is thinking made visual.
                </h2>
                <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                    We believe in the power of minimalism and function. Let us help you tell your story through exceptional design.
                </p>
                <button className="border-2 border-white text-white px-8 py-3 rounded-full hover:bg-white hover:text-black transition-all duration-300 font-semibold">
                    Get in Touch
                </button>
            </div>
        </section>
    );
}
