import { Hero } from "@/components/sections/Hero";
import { AboutPreview } from "@/components/sections/AboutPreview";
import { TreatmentsPreview } from "@/components/sections/TreatmentsPreview";
import { TeamPreview } from "@/components/sections/TeamPreview";
import { ConversionCta } from "@/components/sections/ConversionCta";
import { FaqSection } from "@/components/sections/FaqSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <TreatmentsPreview />
      <TeamPreview />
      <ConversionCta />
      <FaqSection />
    </>
  );
}
