import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-emerald-50 via-blue-50 to-purple-50 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80')`,
        }}
      />

      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <h1 className="text-6xl md:text-7xl font-bold text-gray-800 mb-6 font-montserrat">
          Javriyat —
          <span className="text-emerald-600 block">Природа в объективе</span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-600 mb-12 font-light leading-relaxed">
          Погрузитесь в мир удивительных пейзажей и успокаивающих звуков природы
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center flex-wrap">
          <Button
            size="lg"
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 text-base font-medium"
            onClick={() => scrollToSection("gallery")}
          >
            <Icon name="Camera" size={18} />
            Смотреть фото
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="border-emerald-600 text-emerald-600 hover:bg-emerald-50 px-6 py-3 text-base font-medium"
            onClick={() => scrollToSection("videos")}
          >
            <Icon name="Video" size={18} />
            Смотреть видео
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="border-purple-600 text-purple-600 hover:bg-purple-50 px-6 py-3 text-base font-medium"
            onClick={() => scrollToSection("music")}
          >
            <Icon name="Music" size={18} />
            Слушать музыку
          </Button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Icon name="ChevronDown" size={32} className="text-emerald-600" />
      </div>
    </section>
  );
};

export default Hero;
