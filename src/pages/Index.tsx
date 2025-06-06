import Hero from "@/components/Hero";
import PresentationSlider from "@/components/PresentationSlider";
import PrinciplesOverview from "@/components/PrinciplesOverview";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <PrinciplesOverview />
      <PresentationSlider />
    </div>
  );
};

export default Index;
