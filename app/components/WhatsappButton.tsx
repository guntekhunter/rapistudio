"use client";

export default function WhatsAppButton() {
  const phoneNumber = "6285656646637";

  const message = encodeURIComponent(
    "Halo, saya tertarik dengan jasa desain dinding Rp50.000. Bisa jelaskan lebih lanjut?",
  );

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  const handleClick = () => {
    window.fbq?.("track", "Lead");
    window.open(whatsappUrl, "_blank");
  };

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      className="bg-black rounded-full px-5 py-3 inline-block"
    >
      Pesan via WhatsApp
    </a>
  );
}
