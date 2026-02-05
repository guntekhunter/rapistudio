export default function WhyUs() {
  const reasons = [
    "Takut salah pilih warna dinding dan uang terbuang?",
    "Takut nyesel tiap hari lihat dinding yang tidak sesuai keinginan",
    "Bingung mau pilih motif dinding tapi nggak bisa ngebayangin hasilnya?",
    "Sebelum beli cat atau wallpanel, lihat dulu hasilnya di rumahmu.",
    "Tahu Jumlah Kebutuhan Produk Sebelum Beli",
    "Cuma Rp75.000 untuk tahu: cocok atau tidak.",
    "Bisa langsung beli produknya"
  ];

  return (
    <section className="py-20 px-6 bg-white text-black">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-12">
          Kenapa Jasa Ini Cocok Untukmu?
        </h2>
        <ul className="space-y-6 text-left inline-block">
          {reasons.map((reason, index) => (
            <li key={index} className="flex items-start text-lg md:text-xl">
              <span className="mr-4 text-green-600 text-2xl">✓</span>
              {reason}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
