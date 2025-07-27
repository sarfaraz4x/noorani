import { Button } from "@/components/ui/button";
import { Moon, BookOpen, Pencil, Handshake } from "lucide-react";

const CurriculumHighlights = () => {
  const subjects = [
    {
      icon: Moon,
      title: "Islam",
      description: "Core beliefs, pillars of Islam, and essential practices for kids",
      bgColor: "bg-green-50",
      iconColor: "text-green-500"
    },
    {
      icon: BookOpen,
      title: "Quran",
      description: "Quran recitation, memorization, and basic Tafseer for kids",
      bgColor: "bg-orange-50",
      iconColor: "text-orange-500"
    },
    {
      icon: Pencil,
      title: "Arabic",
      description: "Reading, writing, and speaking Arabic fundamentals",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-500"
    },
    {
      icon: Handshake,
      title: "Tarbiyah",
      description: "Character building and spiritual development through stories",
      bgColor: "bg-purple-50",
      iconColor: "text-purple-500"
    }
  ];

  return (
    <section id="curriculum" className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
            Our <span className="text-teal-600">Islamic Curriculum</span>
          </h2>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed px-4">
            Comprehensive Islamic education covering Quran, Arabic, manners, and character development
          </p>
        </div>

        {/* Curriculum Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8 mb-16">
          {subjects.map((subject, index) => (
            <div key={index} className="group">
              {/* Icon Circle */}
              <div className={`w-16 h-16 lg:w-24 lg:h-24 ${subject.bgColor} rounded-full flex items-center justify-center mx-auto mb-4 lg:mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}>
                <span className="text-2xl lg:text-4xl">
                  <subject.icon className={`w-8 h-8 lg:w-12 lg:h-12 ${subject.iconColor}`} />
                </span>
              </div>
              
              {/* Content */}
              <div className="text-center">
                <h3 className="font-bold text-lg lg:text-2xl text-slate-800 mb-3 lg:mb-4">
                  {subject.title}
                </h3>
                <p className="text-slate-600 text-xs lg:text-base leading-relaxed px-1 lg:px-2">
                  {subject.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Button 
            variant="hero" 
            size="lg" 
            className="px-8 lg:px-10 py-4 text-lg font-semibold bg-teal-600 hover:bg-teal-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            View Full Curriculum
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CurriculumHighlights;