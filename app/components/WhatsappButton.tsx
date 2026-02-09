"use client";

type Props = {
  className?: string;
};

export default function WhatsAppButton({ className }: Props) {
  const phoneNumber = "6285656646637";

  const message = encodeURIComponent(
    "Halo, saya tertarik dengan jasa desain dinding Rp50.000. Bisa jelaskan lebih lanjut?",
  );

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.fbq?.("track", "Lead");
    setTimeout(() => {
      window.open(whatsappUrl, "_blank");
    }, 200);
  };

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className={`bg-black rounded-full px-5 py-3 inline-block ${className ?? ""}`}
    >
      Pesan via WhatsApp
    </a>
  );
}
