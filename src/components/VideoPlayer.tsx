import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface Video {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  duration: string;
  url: string;
  category: string;
}

const VideoPlayer = () => {
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);

  const videos: Video[] = [
    // Природные видео
    {
      id: 1,
      title: "Таинственный лес",
      description: "Прогулка по густому лесу с пением птиц и шелестом листьев",
      thumbnail:
        "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      duration: "4:15",
      url: "https://www.w3schools.com/html/mov_bbb.mp4",
      category: "Природа",
    },
    {
      id: 2,
      title: "Океанский прибой",
      description: "Бескрайний океан и ритмичные волны на золотом песке",
      thumbnail:
        "https://images.unsplash.com/photo-1439066615861-d1af74d74000?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      duration: "3:45",
      url: "https://www.w3schools.com/html/movie.mp4",
      category: "Природа",
    },
    {
      id: 3,
      title: "Горные вершины",
      description: "Величественные пики и альпийские луга на рассвете",
      thumbnail:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      duration: "5:20",
      url: "https://www.w3schools.com/html/mov_bbb.mp4",
      category: "Природа",
    },
    // Городские видео
    {
      id: 4,
      title: "Городские улицы",
      description: "Динамичная жизнь мегаполиса в дневное время",
      thumbnail:
        "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      duration: "3:30",
      url: "https://www.w3schools.com/html/movie.mp4",
      category: "Город",
    },
    {
      id: 5,
      title: "Ночной город",
      description: "Сияющие небоскребы и неоновые огни после заката",
      thumbnail:
        "https://images.unsplash.com/photo-1514565131-fce0801e5785?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      duration: "4:40",
      url: "https://www.w3schools.com/html/mov_bbb.mp4",
      category: "Город",
    },
    {
      id: 6,
      title: "Городской парк",
      description: "Зеленый оазис среди каменных джунглей города",
      thumbnail:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      duration: "2:55",
      url: "https://www.w3schools.com/html/movie.mp4",
      category: "Город",
    },
  ];

  return (
    <section
      id="videos"
      className="py-20 bg-gradient-to-br from-purple-50 to-pink-50"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 font-montserrat">
            Видеоколлекция
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Откройте для себя красоту природы и энергию городской жизни в нашей
            коллекции из 6 уникальных видео
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-2 gap-8">
          <div className="lg:col-span-2 xl:col-span-1">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {videos.map((video) => (
                <Card
                  key={video.id}
                  className={`cursor-pointer transition-all duration-300 hover:shadow-lg group ${
                    selectedVideo?.id === video.id
                      ? "ring-2 ring-purple-500 bg-purple-50"
                      : ""
                  }`}
                  onClick={() => setSelectedVideo(video)}
                >
                  <CardContent className="p-4">
                    <div className="space-y-3">
                      <div className="relative">
                        <img
                          src={video.thumbnail}
                          alt={video.title}
                          className="w-full h-32 rounded-lg object-cover"
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-black/40 rounded-lg group-hover:bg-black/50 transition-colors">
                          <Icon name="Play" size={24} className="text-white" />
                        </div>
                        <span className="absolute top-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                          {video.duration}
                        </span>
                      </div>

                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <span
                            className={`px-2 py-1 text-xs rounded-full ${
                              video.category === "Природа"
                                ? "bg-green-100 text-green-700"
                                : "bg-blue-100 text-blue-700"
                            }`}
                          >
                            {video.category}
                          </span>
                        </div>
                        <h3 className="font-semibold text-gray-800 mb-1">
                          {video.title}
                        </h3>
                        <p className="text-sm text-gray-600 line-clamp-2">
                          {video.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="lg:col-span-1 xl:col-span-1">
            <div className="lg:sticky lg:top-8">
              {selectedVideo ? (
                <Card>
                  <CardHeader>
                    <CardTitle className="text-center">
                      Просмотр видео
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <video
                      className="w-full rounded-lg shadow-lg"
                      controls
                      poster={selectedVideo.thumbnail}
                      key={selectedVideo.id}
                    >
                      <source src={selectedVideo.url} type="video/mp4" />
                      Ваш браузер не поддерживает видео.
                    </video>

                    <div className="text-center space-y-2">
                      <h3 className="text-xl font-bold text-gray-800">
                        {selectedVideo.title}
                      </h3>
                      <p className="text-gray-600">
                        {selectedVideo.description}
                      </p>
                      <div className="flex justify-center gap-4 text-sm text-gray-500">
                        <span className="flex items-center gap-1">
                          <Icon name="Clock" size={16} />
                          {selectedVideo.duration}
                        </span>
                        <span className="flex items-center gap-1">
                          <Icon name="Tag" size={16} />
                          {selectedVideo.category}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ) : (
                <Card className="h-96 flex items-center justify-center">
                  <CardContent className="text-center space-y-4">
                    <Icon
                      name="Video"
                      size={64}
                      className="text-gray-300 mx-auto"
                    />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-600 mb-2">
                        Выберите видео
                      </h3>
                      <p className="text-gray-500">
                        Нажмите на любое видео слева, чтобы начать просмотр
                      </p>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoPlayer;
