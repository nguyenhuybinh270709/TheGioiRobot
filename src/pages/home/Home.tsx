import { FeaturesSection } from "@/pages/home/components/FeaturesSection";
import { HeroSection } from "@/pages/home/components/HeroSection";
import { NewsSection } from "@/pages/home/components/NewsSection";
import { PartnerSection } from "@/pages/home/components/PartnerSection";
import { StatSection } from "@/pages/home/components/StatSection";
import { VicoSection } from "@/pages/home/components/VicoSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <div className="bg-[#0B0F14] lg:px-8 lg:mt-4 lg:space-y-4">
        <VicoSection />
        <FeaturesSection />
        <PartnerSection />
        <StatSection />
        <NewsSection />
      </div>
    </div>
  );
}
