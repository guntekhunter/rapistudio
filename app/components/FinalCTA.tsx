import WhatsAppButton from "./WhatsappButton";

export default function FinalCTA() {
  return (
    <section className="py-24 px-6 dark:bg-neutral-900 text-center">
      <div className="max-w-xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
          Masih ragu-ragu? Santai, ngobrol dulu aja.
        </h2>

        <p className="text-xl text-gray-600 dark:text-gray-400 mb-10">
          Sekarang ada potongan 33% buat order pertama biar kamu lebih hemat.
        </p>

        <WhatsAppButton />
      </div>
    </section>
  );
}
