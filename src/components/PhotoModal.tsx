import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface Photo {
  id: number;
  url: string;
  title: string;
  description: string;
  photographer: string;
}

interface PhotoModalProps {
  photo: Photo;
  onClose: () => void;
}

const PhotoModal = ({ photo, onClose }: PhotoModalProps) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative max-w-5xl max-h-[90vh] animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white"
          onClick={onClose}
        >
          <Icon name="X" size={20} />
        </Button>

        <img
          src={photo.url}
          alt={photo.title}
          className="max-w-full max-h-[70vh] object-contain rounded-lg"
        />

        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
          <h3 className="text-2xl font-bold text-white mb-2">{photo.title}</h3>
          <p className="text-gray-300 mb-2">{photo.description}</p>
          <p className="text-sm text-gray-400">
            Фотограф: {photo.photographer}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PhotoModal;
