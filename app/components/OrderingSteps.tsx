export default function OrderingSteps() {
    const steps = [
        {
            id: 1,
            text: "Kirim ukuran & foto dinding rumahmu",
            bgClass: "bg-[#E8E8E8]",
        },
        {
            id: 2,
            text: "Pilih warna / motif yang kamu pertimbangkan",
            bgClass: "bg-[#E8E8E8]",
        },
        {
            id: 3,
            text: "Kami kirimkan desain dindingnya",
            bgClass: "bg-white border border-gray-200",
        },
    ];

    return (
        <section className="py-20 px-6 bg-white">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center text-black">
                    Langkah Pemesanan
                </h2>

                <div className="space-y-6">
                    {steps.map((step) => (
                        <div
                            key={step.id}
                            className={`${step.bgClass} p-6 rounded-2xl flex items-center transition-transform hover:scale-[1.02] duration-300`}
                        >
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#103129] flex items-center justify-center text-white font-bold text-xl mr-6">
                                {step.id}
                            </div>
                            <p className="text-[#103129] font-medium text-lg md:text-xl">
                                {step.text}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
