import Image from "next/image";

export default function Hero() {
    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="https://res.cloudinary.com/unm/image/upload/v1767876684/rapistudio/1213_1_v4vorw.png"
                    alt="Lihat Desain Dindingmu Sebelum Beli Bahan"
                    fill
                    className="object-cover"
                    priority
                    sizes="100vw"
                />
                <div className="absolute inset-0 bg-black/50" />
            </div>

            {/* Content */}
            <div className="relative z-10 text-center px-4 max-w-4xl mx-auto text-white">
                <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
                    Lihat Desain Dindingmu Sebelum Beli Bahan
                </h1>
                <p className="text-xl md:text-2xl mb-10 text-gray-200 max-w-2xl mx-auto">
                    Biar nggak nyesel setelah beli bahan. Kami bantu gambarkan desainnya, cuma Rp50.000.
                </p>
                <button className="bg-white text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-200 transition-all transform hover:scale-105 active:scale-95">
                    Pesan Sekarang
                </button>
            </div>
        </section>
    );
}
