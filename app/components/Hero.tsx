import Image from "next/image";
import WhatsAppButton from "./WhatsappButton";

export default function Hero() {
  return (
    <section className="relative min-h-svh flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/1213_1_v4vorw_yhhypv_9_11zon.webp"
          alt="Hero"
          fill
          priority
          quality={75}
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto text-white">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
          Lihat Desain Dindingmu Sebelum Beli Bahan
        </h1>

        <p className="text-xl md:text-2xl mb-10 text-gray-200 max-w-2xl mx-auto">
          Biar nggak nyesel setelah beli bahan. Kami bantu gambarkan desainnya,
          cuma Rp75.000.
        </p>

        <WhatsAppButton />
      </div>
    </section>
  );
}
