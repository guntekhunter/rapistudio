import Hero from "./components/Hero";
import dynamic from "next/dynamic";

const PromoLiburLebaran = dynamic(
  () => import("./components/PromoLiburLebaran"),
);
const ImageGrid = dynamic(() => import("./components/ImageGrid"));
const Testimoni = dynamic(() => import("./components/Testimoni"));
const WhyUs = dynamic(() => import("./components/WhyUs"));
const BeforeAfter = dynamic(() => import("./components/BeforeAfter"));
const OrderingSteps = dynamic(() => import("./components/OrderingSteps"));
const TargetAudience = dynamic(() => import("./components/TargetAudience"));
const PricingExplanation = dynamic(
  () => import("./components/PricingExplanation"),
);
const FinalCTA = dynamic(() => import("./components/FinalCTA"));

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <PromoLiburLebaran />
      <ImageGrid />
      <WhyUs />
      <BeforeAfter />
      <OrderingSteps />
      <TargetAudience />
      <PricingExplanation />
      <Testimoni />
      <FinalCTA />
    </main>
  );
}
