"use client";

export default function FinalCTA() {
  const phoneNumber = "6285656646637";

  const message = encodeURIComponent(
    "Halo, saya tertarik dengan jasa desain dinding Rp50.000. Bisa jelaskan lebih lanjut?"
  );

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  const handleClick = () => {
    if (typeof window !== "undefined" && (window as any).fbq) {
      (window as any).fbq("track", "Contact");
    }

    setTimeout(() => {
      window.open(whatsappUrl, "_blank");
    }, 120);
  };

  return (
    <section className="py-24 px-6 bg-gray-50 dark:bg-neutral-900 text-center">
      <div className="max-w-xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
          Masih ragu-ragu? Santai, ngobrol dulu aja.
        </h2>

        <p className="text-xl text-gray-600 dark:text-gray-400 mb-10">
          Sekarang ada potongan 33% buat order pertama biar kamu lebih hemat.
        </p>

        <button
          onClick={handleClick}
          className="inline-block bg-black text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-200 transition-all transform hover:scale-105 active:scale-95"
        >
          Klaim Diskon 33% Sekarang
        </button>
      </div>
    </section>
  );
}
