import { Card, CardContent } from "@/components/ui/card";
import { Users, Gamepad2, BookOpen, Baby, Target, Users2 } from "lucide-react";

const WhyChooseUs = () => {
  const features = [
    {
      icon: Users,
      title: "Live Teachers",
      description: "Interactive sessions with certified Islamic educators who care about your child's progress",
      bgColor: "bg-gradient-to-br from-pink-100 to-pink-200",
      hoverColor: "hover:from-pink-200 hover:to-pink-300",
      iconBg: "bg-pink-300"
    },
    {
      icon: Gamepad2,
      title: "Fun & Engaging",
      description: "Islamic classes that kids love — and parents trust. Learning through games and activities",
      bgColor: "bg-gradient-to-br from-blue-100 to-blue-200",
      hoverColor: "hover:from-blue-200 hover:to-blue-300",
      iconBg: "bg-blue-300"
    },
    {
      icon: BookOpen,
      title: "Complete Curriculum",
      description: "Quran, Arabic, Islamic manners, and Tarbiyah designed for different age groups",
      bgColor: "bg-gradient-to-br from-green-100 to-green-200",
      hoverColor: "hover:from-green-200 hover:to-green-300",
      iconBg: "bg-green-300"
    },
    {
      icon: Baby,
      title: "Age-Appropriate",
      description: "Programs specifically designed for Pre-K, Primary, Middle School, and Teen levels",
      bgColor: "bg-gradient-to-br from-yellow-100 to-yellow-200",
      hoverColor: "hover:from-yellow-200 hover:to-yellow-300",
      iconBg: "bg-yellow-300"
    },
    {
      icon: Target,
      title: "Confidence Building",
      description: "Building Islamic identity and confidence in faith through structured learning",
      bgColor: "bg-gradient-to-br from-purple-100 to-purple-200",
      hoverColor: "hover:from-purple-200 hover:to-purple-300",
      iconBg: "bg-purple-300"
    },
    {
      icon: Users2,
      title: "Family Values",
      description: "Strengthening Islamic family bonds and values in a digital learning environment",
      bgColor: "bg-gradient-to-br from-orange-100 to-orange-200",
      hoverColor: "hover:from-orange-200 hover:to-orange-300",
      iconBg: "bg-orange-300"
    }
  ];

  return (
    <section className="relative py-20 bg-gradient-to-b from-slate-50 to-blue-50 overflow-hidden">
      {/* Floating decorative circles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 bg-yellow-200 rounded-full opacity-30 animate-bounce" style={{animationDelay: '0s'}}></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-pink-200 rounded-full opacity-40 animate-bounce" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-40 left-20 w-24 h-24 bg-blue-200 rounded-full opacity-25 animate-bounce" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 right-10 w-18 h-18 bg-green-200 rounded-full opacity-35 animate-bounce" style={{animationDelay: '0.5s'}}></div>
      </div>

      <div className="container mx-auto px-4 lg:px-6 flex flex-col md:flex-row items-center gap-12 relative z-10">
        {/* Illustration */}
        <div className="flex-shrink-0 relative">
          <div className="relative group">
            {/* Decorative rings around the main image */}
            <div className="absolute -inset-4 bg-gradient-to-r from-yellow-200 to-pink-200 rounded-full opacity-30 group-hover:opacity-50 transition-opacity duration-500 animate-pulse"></div>
            <div className="absolute -inset-2 bg-gradient-to-r from-blue-200 to-purple-200 rounded-full opacity-40 group-hover:opacity-60 transition-opacity duration-500 animate-pulse" style={{animationDelay: '0.5s'}}></div>
            <img 
              src="/cartoon-muslim-girl-nura-a-cheerful-musl_3M9ky64SR6u4xu6oOJoOvA_tAuUlG9qTB2OLpQfF8prfA.jpeg" 
              alt="Nura cartoon" 
              className="w-64 h-64 rounded-full shadow-2xl border-4 border-white object-cover bg-white relative z-10 group-hover:scale-105 transition-transform duration-500" 
            />
          </div>
        </div>

        {/* Content */}
        <div className="flex-1">
          <div className="text-center md:text-left mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-800 mb-6" style={{ fontFamily: 'Comic Sans MS, Comic Sans, cursive' }}>
              Learn with <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">Nura & Anas</span>
          </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto md:mx-0 leading-relaxed">
            Discover why thousands of Muslim families trust Noorani Academy for their children's Islamic education
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
              <Card key={index} className={`group transition-all duration-200 border-0 ${feature.bgColor} ${feature.hoverColor} hover:shadow-md hover:scale-105`}>
              <CardContent className="p-8 text-center">
                  <div className={`mb-4 mx-auto flex items-center justify-center rounded-full w-16 h-16 ${feature.iconBg} group-hover:scale-110 transition-transform duration-200`}>
                    <feature.icon className="h-8 w-8 text-slate-700" />
                </div>
                <h3 className="font-semibold text-lg text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      </div>
      
      {/* Enhanced wavy divider */}
      <svg className="absolute bottom-0 left-0 w-full h-20" viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill="url(#gradient)" fillOpacity="1" d="M0,32L60,37.3C120,43,240,53,360,69.3C480,85,600,107,720,101.3C840,96,960,64,1080,53.3C1200,43,1320,53,1380,58.7L1440,64L1440,160L1380,160C1320,160,1200,160,1080,160C960,160,840,160,720,160C600,160,480,160,360,160C240,160,120,160,60,160L0,160Z"></path>
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="50%" stopColor="#f0f9ff" />
            <stop offset="100%" stopColor="#ffffff" />
          </linearGradient>
        </defs>
      </svg>
      
      {/* Custom animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default WhyChooseUs;