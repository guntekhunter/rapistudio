import Image from "next/image";

const images = [
  "/images/testimoni 1.webp",
  "/images/testimoni 2.webp",
  "/images/testimoni 3.webp",
];

export default function ImageGrid() {
  return (
    <section className="py-20 px-4 bg-gray-50 dark:bg-neutral-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Testimoni</h2>
          <p className="text-gray-600 dark:text-gray-400">
            Berikut Hasil Desain Kami
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((src, index) => (
            <div
              key={index}
              className="group relative aspect-9/16 overflow-hidden rounded-2xl cursor-pointer bg-white shadow-md"
            >
              <Image
                src={src}
                alt={`Testimoni item ${index + 1}`}
                fill
                quality={75}
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-contain transition-transform duration-300 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
