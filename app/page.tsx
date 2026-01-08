import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ImageGrid from "./components/ImageGrid";
import WhyUs from "./components/WhyUs";
import BeforeAfter from "./components/BeforeAfter";
import OrderingSteps from "./components/OrderingSteps";
import TargetAudience from "./components/TargetAudience";
import PricingExplanation from "./components/PricingExplanation";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";

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
      <Footer />
    </main>
  );
}
