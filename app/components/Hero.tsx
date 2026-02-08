"use client";

import Image from "next/image";

export default function Hero() {
  const phoneNumber = "6285656646637";

  const message = encodeURIComponent(
    "Halo, saya tertarik dengan jasa desain dinding Rp50.000. Bisa jelaskan lebih lanjut?"
  );

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/1213_1_v4vorw_yhhypv_9_11zon.webp"
          alt="Hero"
          width={1200}
          height={800}
          priority
          quality={70}
          className="absolute inset-0 w-full h-full object-cover"
          sizes="100vw"
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

        <a
          href={whatsappUrl}
          target="_blank"
          onClick={() => (window as any).fbq?.("track", "Lead")}
          className="inline-block bg-white text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-200 transition-all"
        >
          Pesan via WhatsApp
        </a>
      </div>
    </section>
  );
}
