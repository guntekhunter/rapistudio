import WhatsAppButton from "./WhatsappButton";

export default function PromoLiburLebaran() {
  return (
    <section className="relative overflow-hidden py-16 md:py-24 bg-[#064e3b]">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-5%] w-64 h-64 rounded-full bg-yellow-400 blur-3xl animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-5%] w-80 h-80 rounded-full bg-yellow-500 blur-3xl animate-pulse delay-700" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center border-4 border-yellow-500/30 rounded-3xl p-8 md:p-12 backdrop-blur-sm bg-black/20 shadow-2xl">
          {/* Festive Icon/Header */}
          <div className="mb-6 flex justify-center items-center gap-4">
            <span className="text-4xl md:text-5xl">🌙</span>
            <div className="h-1 w-12 md:w-20 bg-yellow-400 rounded-full" />
            <span className="text-2xl md:text-3xl font-bold text-yellow-500 uppercase tracking-widest">
              Special Promo
            </span>
            <div className="h-1 w-12 md:w-20 bg-yellow-400 rounded-full" />
            <span className="text-4xl md:text-5xl">✨</span>
          </div>

          {/* Main Title */}
          <h2 className="text-4xl md:text-6xl font-black text-white mb-4 drop-shadow-lg">
            PROMO LIBUR LEBARAN!
          </h2>
          
          <div className="inline-block bg-yellow-500 text-black font-black text-2xl md:text-4xl px-6 py-2 rounded-xl rotate-[-2deg] mb-8 shadow-lg transform hover:scale-105 transition-transform">
            DISKON 33% OFF
          </div>

          {/* Price Section */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 mb-10">
            <div className="text-gray-300 text-xl md:text-2xl line-through decoration-red-500 decoration-2">
              Normal: Rp75.000
            </div>
            <div className="text-5xl md:text-7xl font-black text-white flex items-baseline gap-2">
              <span className="text-2xl md:text-3xl font-bold text-yellow-400">Rp</span>
              50.000
            </div>
          </div>

          <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
            Rayakan kemenangan dengan hunian baru. Dapatkan desain dinding premium kami dengan harga spesial Lebaran. 
            <span className="block font-bold text-yellow-400 mt-2">Terbatas hanya selama masa libur Lebaran!</span>
          </p>

          <WhatsAppButton className="!bg-yellow-500 !text-black font-extrabold text-xl md:text-2xl py-6 px-12 hover:scale-105 transition-all shadow-xl hover:shadow-yellow-500/20 active:scale-95 border-none" />
          
          <p className="mt-6 text-white/60 text-sm">
            *Promo berlaku hanya sampai akhir libur Lebaran
          </p>
        </div>
      </div>
    </section>
  );
}
