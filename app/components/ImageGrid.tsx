import Image from "next/image";

const images = [
  "/images/45_a1kczf_5_11zon.webp",
  "/images/37_qas5qe_4_11zon.webp",
  "/images/72_wsy4wq_6_11zon.webp",
  "/images/82_pjcdqn_7_11zon.webp",
  "/images/24_bhavs1_2_11zon.webp",
  "/images/17_s2hwct_15_11zon.webp",
  "/images/23_jvuvcb_1_11zon.webp",
  "/images/28_bj1kqy_3_11zon.webp",
  "/images/10_lgsqdl_14_11zon.webp",
  "/images/Mask_group-2_kom288_12_11zon.webp",
];

export default function ImageGrid() {
  return (
    <section className="py-20 px-4 bg-gray-50 dark:bg-neutral-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Hasil Desain Kami
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Berikut beberapa hasil desain kami
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((src, index) => (
            <div
              key={index}
              className="group relative aspect-square overflow-hidden rounded-2xl cursor-pointer"
            >
              <Image
                src={src}
                alt={`Portfolio item ${index + 1}`}
                fill
                quality={70}
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
