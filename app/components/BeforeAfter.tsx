import Image from "next/image";

export default function BeforeAfter() {
  return (
    <section className="relative py-24 px-6 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://res.cloudinary.com/unm/image/upload/f_auto,q_auto,w_auto,dpr_auto,c_scale/v1767877228/rapistudio/Mask_group-1_ccfws9.webp"
          alt="Background"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/80" /> {/* Dark overlay */}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto text-white">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
          Sebelum & Sesudah
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
            <h3 className="text-2xl font-bold mb-6 text-red-400">
              Sebelum Pakai jasa desain dinding:
            </h3>
            <ul className="space-y-4 text-lg text-gray-200">
              <li className="flex items-center">
                <span className="mr-3">❌</span>Bingung pilih warna & motif
              </li>
              <li className="flex items-center">
                <span className="mr-3">❌</span>Takut hasilnya beda dari
                bayangan
              </li>
              <li className="flex items-center">
                <span className="mr-3">❌</span>Nggak Tahu Jumlah Kebutuhan
                Material
              </li>
            </ul>
          </div>

          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-green-500/30">
            <h3 className="text-2xl font-bold mb-6 text-green-400">
              Sesudah lihat desainnya:
            </h3>
            <ul className="space-y-4 text-lg text-gray-200">
              <li className="flex items-center">
                <span className="mr-3">✅</span>Lebih yakin beli cat / wallpanel
              </li>
              <li className="flex items-center">
                <span className="mr-3">✅</span>Tahu mana yang cocok & mana yang
                tidak
              </li>
              <li className="flex items-center">
                <span className="mr-3">✅</span>Tahu Jumlah Kebutuhannya
              </li>
              <li className="flex items-center">
                <span className="mr-3">✅</span>Nggak takut nyesel
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
