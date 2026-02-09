import Image from "next/image";
import WhatsAppButton from "./WhatsappButton";

export default function Hero() {
  return (
    <section className="relative min-h-svh flex items-center justify-center overflow-hidden">
      {/* ✅ Move Image DIRECTLY inside section (no wrapper div) */}
      <Image
        src="/images/1213_1_v4vorw_yhhypv_9_11zon.webp"
        alt="Hero background"
        fill
        priority
        sizes="100vw"
        className="object-cover -z-10"
      />

      {/* overlay */}
      <div className="absolute inset-0 bg-black/50 -z-10" />

      {/* Content */}
      <div className="relative text-center px-4 max-w-4xl mx-auto text-white">
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
