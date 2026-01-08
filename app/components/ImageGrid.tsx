import Image from "next/image";

const images = [
    "https://res.cloudinary.com/unm/image/upload/v1767876714/rapistudio/Group_7_duiv9g.png",
    "https://res.cloudinary.com/unm/image/upload/v1767876708/rapistudio/Group_9_fytzs3.png",
    "https://res.cloudinary.com/unm/image/upload/v1767876705/rapistudio/Mask_group_ntyr7s.png",
    "https://res.cloudinary.com/unm/image/upload/v1767876689/rapistudio/1219_1_dd8rqt.png",
    "https://res.cloudinary.com/unm/image/upload/v1767876689/rapistudio/Group_6_qsd3jn.png",
    "https://res.cloudinary.com/unm/image/upload/v1767876686/rapistudio/1229_1_vpivdt.png",
    "https://res.cloudinary.com/unm/image/upload/v1767876684/rapistudio/1214_1_nhr4fs.png",
    "https://res.cloudinary.com/unm/image/upload/v1767876685/rapistudio/1226_o5lwrc.png",
    "https://res.cloudinary.com/unm/image/upload/v1767876684/rapistudio/1213_1_v4vorw.png",
    "https://res.cloudinary.com/unm/image/upload/v1767876684/rapistudio/1224_s5lmcu.png",
];

export default function ImageGrid() {
    return (
        <section className="py-20 px-4 bg-gray-50 dark:bg-neutral-900">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Hasil Desain Kami</h2>
                    <p className="text-gray-600 dark:text-gray-400">Berikut beberapa hasil desain kami</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {images.map((src, index) => (
                        <div key={index} className="group relative aspect-square overflow-hidden rounded-2xl cursor-pointer">
                            <Image
                                src={src}
                                alt={`Portfolio item ${index + 1}`}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
