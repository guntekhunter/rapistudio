import dynamic from "next/dynamic";

const Navbar = dynamic(() => import("./components/Navbar"));
const Hero = dynamic(() => import("./components/Hero"));
const ImageGrid = dynamic(() => import("./components/ImageGrid"));
const WhyUs = dynamic(() => import("./components/WhyUs"));
const BeforeAfter = dynamic(() => import("./components/BeforeAfter"));
const OrderingSteps = dynamic(() => import("./components/OrderingSteps"));
const TargetAudience = dynamic(() => import("./components/TargetAudience"));
const PricingExplanation = dynamic(() => import("./components/PricingExplanation"));
const FinalCTA = dynamic(() => import("./components/FinalCTA"));

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <ImageGrid />
      <WhyUs />
      <BeforeAfter />
      <OrderingSteps />
      <TargetAudience />
      <PricingExplanation />
      <FinalCTA />
    </main>
  );
}
