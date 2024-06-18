import CollectionFeature from "@/components/collection-feature";
import EleganceFeature from "@/components/elegance-feature";
import Features from "@/components/features";
import Hero from "@/components/hero";
import { MarqueeContent } from "@/components/testimonial";
import Trends from "@/components/trend";
import WhyChooseUs from "@/components/why-choose-us";

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <EleganceFeature />
      <MarqueeContent />
      <WhyChooseUs />
      <Trends />
      <CollectionFeature />
    </main>
  );
}
