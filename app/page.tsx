import { SiteHeader } from "@/components/SiteHeader";
import { ContactAndFooter } from "@/components/home/ContactAndFooter";
import { GallerySection } from "@/components/home/GallerySection";
import { HeroPodium } from "@/components/home/HeroPodium";
import { ServicesSection } from "@/components/home/ServicesSection";
import { SvgDefs } from "@/components/home/SvgDefs";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <SvgDefs />
      <HeroPodium />
      <ServicesSection />
      <GallerySection />
      <ContactAndFooter />
    </>
  );
}
