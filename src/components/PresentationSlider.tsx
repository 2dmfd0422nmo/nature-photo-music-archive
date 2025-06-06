import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface Slide {
  id: number;
  title: string;
  content: string[];
  image?: string;
  type: "intro" | "principle" | "example" | "conclusion";
}

const PresentationSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides: Slide[] = [
    {
      id: 1,
      title: "Информационные технологии в лингвистике",
      content: [
        "Общие принципы компьютерного обучения языку",
        "По материалам А.В. Зубова и И.И. Зубовой",
        "Современные подходы к изучению языков с использованием ИТ",
      ],
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      type: "intro",
    },
    {
      id: 2,
      title: "Принцип интерактивности",
      content: [
        "Активное взаимодействие учащегося с компьютерной программой",
        "Немедленная обратная связь на действия пользователя",
        "Возможность выбора траектории обучения",
        "Диалоговый режим работы с системой",
      ],
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      type: "principle",
    },
    {
      id: 3,
      title: "Принцип персонализации",
      content: [
        "Адаптация к индивидуальным особенностям учащегося",
        "Учет уровня подготовки и скорости усвоения материала",
        "Настройка сложности заданий под конкретного пользователя",
        "Создание индивидуального профиля обучения",
      ],
      image:
        "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      type: "principle",
    },
    {
      id: 4,
      title: "Принцип мультимедийности",
      content: [
        "Использование различных форм представления информации",
        "Сочетание текста, звука, изображений и видео",
        "Активизация различных каналов восприятия",
        "Повышение эффективности запоминания материала",
      ],
      image:
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      type: "principle",
    },
    {
      id: 5,
      title: "Принцип адаптивности",
      content: [
        "Автоматическое приспособление к действиям учащегося",
        "Изменение стратегии обучения в зависимости от результатов",
        "Динамическая корректировка сложности материала",
        "Гибкое управление темпом обучения",
      ],
      image:
        "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      type: "principle",
    },
    {
      id: 6,
      title: "Практические примеры применения",
      content: [
        "Интерактивные упражнения по грамматике",
        "Мультимедийные словари с произношением",
        "Адаптивные тесты для оценки знаний",
        "Персонализированные программы изучения лексики",
      ],
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      type: "example",
    },
    {
      id: 7,
      title: "Преимущества компьютерного обучения",
      content: [
        "Повышение мотивации и интереса к изучению языка",
        "Возможность самостоятельной работы в удобном темпе",
        "Объективная оценка знаний и прогресса",
        "Экономия времени преподавателя и учащегося",
      ],
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      type: "conclusion",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const currentSlideData = slides[currentSlide];

  return (
    <section
      id="presentation"
      className="py-16 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <Card className="overflow-hidden shadow-2xl">
            <CardContent className="p-0">
              <div className="grid md:grid-cols-2 gap-0 min-h-[600px]">
                {/* Контент слайда */}
                <div className="p-12 flex flex-col justify-center bg-white">
                  <div className="mb-6">
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                        currentSlideData.type === "intro"
                          ? "bg-blue-100 text-blue-800"
                          : currentSlideData.type === "principle"
                            ? "bg-green-100 text-green-800"
                            : currentSlideData.type === "example"
                              ? "bg-orange-100 text-orange-800"
                              : "bg-purple-100 text-purple-800"
                      }`}
                    >
                      {currentSlideData.type === "intro"
                        ? "Введение"
                        : currentSlideData.type === "principle"
                          ? "Принцип"
                          : currentSlideData.type === "example"
                            ? "Примеры"
                            : "Заключение"}
                    </span>
                  </div>

                  <h2 className="text-3xl font-bold text-gray-800 mb-8 leading-tight">
                    {currentSlideData.title}
                  </h2>

                  <ul className="space-y-4">
                    {currentSlideData.content.map((item, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-3 text-gray-600 text-lg leading-relaxed"
                      >
                        <Icon
                          name="ChevronRight"
                          size={20}
                          className="text-indigo-600 mt-1 flex-shrink-0"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Изображение */}
                <div className="relative">
                  <img
                    src={currentSlideData.image}
                    alt={currentSlideData.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-l from-transparent to-white/20" />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Навигация */}
          <div className="flex items-center justify-between mt-8">
            <Button
              onClick={prevSlide}
              variant="outline"
              className="flex items-center gap-2"
              disabled={currentSlide === 0}
            >
              <Icon name="ChevronLeft" size={18} />
              Назад
            </Button>

            {/* Индикаторы слайдов */}
            <div className="flex gap-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentSlide
                      ? "bg-indigo-600"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>

            <Button
              onClick={nextSlide}
              variant="outline"
              className="flex items-center gap-2"
              disabled={currentSlide === slides.length - 1}
            >
              Далее
              <Icon name="ChevronRight" size={18} />
            </Button>
          </div>

          {/* Счетчик слайдов */}
          <div className="text-center mt-4 text-gray-500">
            Слайд {currentSlide + 1} из {slides.length}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PresentationSlider;
