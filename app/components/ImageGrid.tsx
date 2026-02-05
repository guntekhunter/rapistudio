import Image from "next/image";

const images = [
  "https://res.cloudinary.com/unm/image/upload/f_auto,q_auto,w_auto,dpr_auto,c_scale/v1770279792/rapistudio/45_a1kczf.webp",
  "https://res.cloudinary.com/unm/image/upload/f_auto,q_auto,w_auto,dpr_auto,c_scale/v1770279791/rapistudio/37_qas5qe.webp",
  "https://res.cloudinary.com/unm/image/upload/f_auto,q_auto,w_auto,dpr_auto,c_scale/v1770279791/rapistudio/72_wsy4wq.webp",
  "https://res.cloudinary.com/unm/image/upload/f_auto,q_auto,w_auto,dpr_auto,c_scale/v1770279791/rapistudio/82_pjcdqn.webp",
  "https://res.cloudinary.com/unm/image/upload/f_auto,q_auto,w_auto,dpr_auto,c_scale/v1770279791/rapistudio/24_bhavs1.webp",
  "https://res.cloudinary.com/unm/image/upload/f_auto,q_auto,w_auto,dpr_auto,c_scale/v1770279790/rapistudio/17_s2hwct.webp",
  "https://res.cloudinary.com/unm/image/upload/f_auto,q_auto,w_auto,dpr_auto,c_scale/v1770279790/rapistudio/23_jvuvcb.webp",
  "https://res.cloudinary.com/unm/image/upload/f_auto,q_auto,w_auto,dpr_auto,c_scale/v1770279790/rapistudio/28_bj1kqy.webp",
  "https://res.cloudinary.com/unm/image/upload/f_auto,q_auto,w_auto,dpr_auto,c_scale/v1770279789/rapistudio/10_lgsqdl.webp",
  "https://res.cloudinary.com/unm/image/upload/f_auto,q_auto,w_auto,dpr_auto,c_scale/v1767877228/rapistudio/Mask_group-2_kom288.webp",
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
