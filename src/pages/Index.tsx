import Hero from "@/components/Hero";
import PresentationSlider from "@/components/PresentationSlider";
import PrinciplesOverview from "@/components/PrinciplesOverview";
import VideoPlayer from "@/components/VideoPlayer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <PrinciplesOverview />
      <VideoPlayer />
      <PresentationSlider />
    </div>
  );
};

export default Index;
