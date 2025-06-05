import { useState } from "react";
import { Card } from "@/components/ui/card";
import PhotoModal from "@/components/PhotoModal";

interface Photo {
  id: number;
  url: string;
  title: string;
  description: string;
  photographer: string;
}

const PhotoGallery = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

  const photos: Photo[] = [
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Горное озеро",
      description: "Кристально чистое озеро в окружении заснеженных вершин",
      photographer: "Nature Explorer",
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Лесная тропа",
      description: "Таинственная дорожка сквозь густой хвойный лес",
      photographer: "Forest Walker",
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Альпийские луга",
      description: "Цветущие поля на фоне величественных гор",
      photographer: "Mountain Lover",
    },
    {
      id: 4,
      url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Закат у океана",
      description: "Золотые лучи солнца над бескрайним морем",
      photographer: "Ocean Dreamer",
    },
    {
      id: 5,
      url: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Дикий водопад",
      description: "Мощные струи воды среди тропической зелени",
      photographer: "Water Hunter",
    },
    {
      id: 6,
      url: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Пустынные дюны",
      description: "Золотистые песчаные холмы под звездным небом",
      photographer: "Desert Nomad",
    },
  ];

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 font-montserrat">
            Галерея природы
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Коллекция захватывающих дух пейзажей со всего мира
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {photos.map((photo) => (
            <Card
              key={photo.id}
              className="group cursor-pointer overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
              onClick={() => setSelectedPhoto(photo)}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={photo.url}
                  alt={photo.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-xl font-semibold mb-1">{photo.title}</h3>
                  <p className="text-sm opacity-90">{photo.photographer}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {selectedPhoto && (
        <PhotoModal
          photo={selectedPhoto}
          onClose={() => setSelectedPhoto(null)}
        />
      )}
    </section>
  );
};

export default PhotoGallery;
