import { SiteHeader } from "@/components/SiteHeader";
import Marquee from "@/components/Marquee";
import AboutSection from "@/components/home/AboutSection";
import { ContactAndFooter } from "@/components/home/ContactAndFooter";
import { GallerySection } from "@/components/home/GallerySection";
import { HeroPodium } from "@/components/home/HeroPodium";
import ProcessSection from "@/components/home/ProcessSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { SvgDefs } from "@/components/home/SvgDefs";
import TestimonialsSection from "@/components/home/TestimonialsSection";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <SvgDefs />
      <HeroPodium />
      <AboutSection />
      <ServicesSection />
      <Marquee
        items={[
          "Портрет",
          "Семья",
          "Лав-стори",
          "Уличная съёмка",
          "Дети",
          "Беременность",
        ]}
        direction="left"
        speed={45}
      />
      <ProcessSection />
      <GallerySection />
      <TestimonialsSection />
      <Marquee
        items={[
          "Калининград",
          "Фотограф",
          "Момент",
          "Образ",
          "Свет",
          "История",
        ]}
        direction="right"
        speed={55}
        variant="muted"
      />
      <ContactAndFooter />
    </>
  );
}
