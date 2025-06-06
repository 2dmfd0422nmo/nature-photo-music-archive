import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const PrinciplesOverview = () => {
  const principles = [
    {
      title: "Интерактивность",
      description:
        "Активное взаимодействие учащегося с обучающей системой через диалоговый режим",
      icon: "MessageCircle",
      color: "bg-blue-500",
    },
    {
      title: "Персонализация",
      description:
        "Адаптация программы к индивидуальным особенностям и уровню подготовки учащегося",
      icon: "User",
      color: "bg-green-500",
    },
    {
      title: "Мультимедийность",
      description:
        "Использование различных форм представления информации: текст, звук, изображения, видео",
      icon: "Monitor",
      color: "bg-orange-500",
    },
    {
      title: "Адаптивность",
      description:
        "Автоматическое приспособление системы к действиям и результатам учащегося",
      icon: "Settings",
      color: "bg-purple-500",
    },
  ];

  return (
    <section id="principles" className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Основные принципы
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Четыре ключевых принципа компьютерного обучения языку согласно
            исследованиям А.В. Зубова и И.И. Зубовой
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {principles.map((principle, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-shadow duration-300"
            >
              <CardHeader className="text-center">
                <div
                  className={`w-16 h-16 ${principle.color} rounded-full flex items-center justify-center mx-auto mb-4`}
                >
                  <Icon
                    name={principle.icon as any}
                    size={28}
                    className="text-white"
                  />
                </div>
                <CardTitle className="text-xl font-semibold text-gray-800">
                  {principle.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center leading-relaxed">
                  {principle.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PrinciplesOverview;
