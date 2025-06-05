import { useState, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface Track {
  id: number;
  title: string;
  artist: string;
  duration: string;
  url: string;
  cover: string;
}

const MusicPlayer = () => {
  const [currentTrack, setCurrentTrack] = useState<Track | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  const tracks: Track[] = [
    {
      id: 1,
      title: "Шум дождя в лесу",
      artist: "Sounds of Nature",
      duration: "10:30",
      url: "/audio/rain-forest.mp3",
      cover:
        "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    },
    {
      id: 2,
      title: "Пение птиц на рассвете",
      artist: "Morning Melodies",
      duration: "8:45",
      url: "/audio/birds-dawn.mp3",
      cover:
        "https://images.unsplash.com/photo-1444927714506-8492d94d5ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    },
    {
      id: 3,
      title: "Океанские волны",
      artist: "Ocean Waves",
      duration: "12:15",
      url: "/audio/ocean-waves.mp3",
      cover:
        "https://images.unsplash.com/photo-1439066615861-d1af74d74000?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    },
    {
      id: 4,
      title: "Горный ветер",
      artist: "Mountain Sounds",
      duration: "9:20",
      url: "/audio/mountain-wind.mp3",
      cover:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    },
  ];

  const playTrack = (track: Track) => {
    if (currentTrack?.id === track.id) {
      if (isPlaying) {
        audioRef.current?.pause();
        setIsPlaying(false);
      } else {
        audioRef.current?.play();
        setIsPlaying(true);
      }
    } else {
      setCurrentTrack(track);
      setIsPlaying(true);
      setTimeout(() => {
        audioRef.current?.play();
      }, 100);
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
      setDuration(audioRef.current.duration || 0);
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  return (
    <section
      id="music"
      className="py-20 bg-gradient-to-br from-blue-50 to-emerald-50"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 font-montserrat">
            Звуки природы
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Расслабляющая коллекция естественных звуков для медитации и отдыха
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-4">
            {tracks.map((track) => (
              <Card
                key={track.id}
                className={`cursor-pointer transition-all duration-300 hover:shadow-lg ${
                  currentTrack?.id === track.id
                    ? "ring-2 ring-emerald-500 bg-emerald-50"
                    : ""
                }`}
                onClick={() => playTrack(track)}
              >
                <CardContent className="p-4">
                  <div className="flex items-center space-x-4">
                    <div className="relative">
                      <img
                        src={track.cover}
                        alt={track.title}
                        className="w-16 h-16 rounded-lg object-cover"
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-black/30 rounded-lg">
                        <Icon
                          name={
                            currentTrack?.id === track.id && isPlaying
                              ? "Pause"
                              : "Play"
                          }
                          size={20}
                          className="text-white"
                        />
                      </div>
                    </div>

                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-800">
                        {track.title}
                      </h3>
                      <p className="text-sm text-gray-600">{track.artist}</p>
                    </div>

                    <span className="text-sm text-gray-500">
                      {track.duration}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {currentTrack && (
            <Card className="lg:sticky lg:top-8 h-fit">
              <CardHeader>
                <CardTitle className="text-center">Сейчас играет</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-6">
                <img
                  src={currentTrack.cover}
                  alt={currentTrack.title}
                  className="w-48 h-48 mx-auto rounded-lg object-cover shadow-lg"
                />

                <div>
                  <h3 className="text-xl font-bold text-gray-800">
                    {currentTrack.title}
                  </h3>
                  <p className="text-gray-600">{currentTrack.artist}</p>
                </div>

                <div className="space-y-2">
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-emerald-600 h-2 rounded-full transition-all duration-300"
                      style={{
                        width: `${duration ? (currentTime / duration) * 100 : 0}%`,
                      }}
                    />
                  </div>
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>{formatTime(currentTime)}</span>
                    <span>{formatTime(duration)}</span>
                  </div>
                </div>

                <div className="flex justify-center space-x-4">
                  <Button variant="outline" size="icon">
                    <Icon name="SkipBack" size={20} />
                  </Button>

                  <Button
                    size="icon"
                    className="bg-emerald-600 hover:bg-emerald-700"
                    onClick={() => playTrack(currentTrack)}
                  >
                    <Icon name={isPlaying ? "Pause" : "Play"} size={20} />
                  </Button>

                  <Button variant="outline" size="icon">
                    <Icon name="SkipForward" size={20} />
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        <audio
          ref={audioRef}
          src={currentTrack?.url}
          onTimeUpdate={handleTimeUpdate}
          onEnded={() => setIsPlaying(false)}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
        />
      </div>
    </section>
  );
};

export default MusicPlayer;
