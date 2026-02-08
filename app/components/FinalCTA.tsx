"use client";

export default function FinalCTA() {
  const phoneNumber = "6285656646637";

  const message = encodeURIComponent(
    "Halo, saya tertarik dengan jasa desain dinding Rp50.000. Bisa jelaskan lebih lanjut?"
  );

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

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
          onClick={() => {
            window.fbq?.("track", "Lead");

            setTimeout(() => {
              window.open(whatsappUrl, "_blank");
            }, 200);
          }}
        >
          Pesan via WhatsApp
        </button>
      </div>
    </section>
  );
}
