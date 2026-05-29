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

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <GallerySection />
      <WhySection />
      <OwnerSection />
      <AreasSection />
      <ContactSection />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
