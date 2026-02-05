"use client";

import Image from "next/image";

export default function Hero() {
  const phoneNumber = "6285656646637";

  const message = encodeURIComponent(
    "Halo, saya tertarik dengan jasa desain dinding Rp50.000. Bisa jelaskan lebih lanjut?"
  );

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  const handleClick = () => {
    if (typeof window !== "undefined" && (window as any).fbq) {
      (window as any).fbq("track", "Contact");
    }

    // delay supaya pixel terkirim dulu
    setTimeout(() => {
      window.open(whatsappUrl, "_blank");
    }, 120);
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://res.cloudinary.com/unm/image/upload/v1770289508/rapistudio/1213_1_v4vorw_yhhypv.webp"
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
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
          Lihat Desain Dindingmu Sebelum Beli Bahan
        </h1>

        <p className="text-xl md:text-2xl mb-10 text-gray-200 max-w-2xl mx-auto">
          Biar nggak nyesel setelah beli bahan. Kami bantu gambarkan desainnya,
          cuma Rp75.000.
        </p>

        <button
          onClick={handleClick}
          className="inline-block bg-white text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-200 transition-all transform hover:scale-105 active:scale-95"
        >
          Pesan via WhatsApp
        </button>
      </div>
    </section>
  );
}
