import Image from "next/image";

export default function TargetAudience() {
    return (
        <section className="relative py-24 px-6 overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="https://res.cloudinary.com/unm/image/upload/v1767877228/rapistudio/Mask_group_pzgs42.webp"
                    alt="Target Audience Background"
                    fill
                    className="object-cover"
                    sizes="100vw"
                />
                <div className="absolute inset-0 bg-black/80" />
            </div>

            <div className="relative z-10 max-w-6xl mx-auto text-white">
                <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
                    Ini Cocok Untuk Siapa?
                </h2>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Cocok Untuk */}
                    <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border-l-4 border-green-500">
                        <h3 className="text-2xl font-bold mb-6 text-green-400">Jasa ini cocok untuk:</h3>
                        <ul className="space-y-4 text-lg text-gray-200">
                            <li className="flex items-start">
                                <span className="mr-3 text-green-400">✓</span>
                                Pemilik rumah yang bingung pilih dinding
                            </li>
                            <li className="flex items-start">
                                <span className="mr-3 text-green-400">✓</span>
                                Mau cek sebelum beli cat / wallpanel
                            </li>
                            <li className="flex items-start">
                                <span className="mr-3 text-green-400">✓</span>
                                Budget terbatas tapi mau pilih desain dulu
                            </li>
                        </ul>
                    </div>

                    {/* Tidak Cocok Jika */}
                    <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border-l-4 border-red-500">
                        <h3 className="text-2xl font-bold mb-6 text-red-400">Jasa ini tidak cocok jika:</h3>
                        <ul className="space-y-4 text-lg text-gray-200">
                            <li className="flex items-start">
                                <span className="mr-3 text-red-400">✕</span>
                                Ingin desain interior full rumah
                            </li>
                            <li className="flex items-start">
                                <span className="mr-3 text-red-400">✕</span>
                                Butuh gambar teknis & RAB
                            </li>
                            <li className="flex items-start">
                                <span className="mr-3 text-red-400">✕</span>
                                Mau renovasi besar
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
