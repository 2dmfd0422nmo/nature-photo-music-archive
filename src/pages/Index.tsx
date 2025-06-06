import Hero from "@/components/Hero";
import PhotoGallery from "@/components/PhotoGallery";
import VideoPlayer from "@/components/VideoPlayer";
import MusicPlayer from "@/components/MusicPlayer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <PhotoGallery />
      <VideoPlayer />
      <MusicPlayer />
    </div>
  );
};

export default Index;
