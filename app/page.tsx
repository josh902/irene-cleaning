import Navbar from "./components/Navbar";
import HeroSection from "./components/Hero/HeroSection";
import ServicesSection from "./components/Services/ServicesSection";
import GallerySection from "./components/Gallery/GallerySection";
import WhySection from "./components/WhyUs/WhySection";
import OwnerSection from "./components/Owner/OwnerSection";
import AreasSection from "./components/Areas/AreasSection";
import ContactSection from "./components/Contact/ContactSection";
import { Footer } from "./components/Footer";
import { ScrollToTop } from "./components/ui/ScrollToTop";
import { MobileCtaBar } from "./components/ui/MobileCtaBar";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <OwnerSection />
      <ServicesSection />
      <GallerySection />
      <WhySection />
      <AreasSection />
      <ContactSection />
      <Footer />
      {/* Spacer so the fixed mobile CTA bar doesn't cover footer content */}
      <div className="h-20 lg:hidden" aria-hidden="true" />
      <ScrollToTop />
      <MobileCtaBar />
    </main>
  );
}
