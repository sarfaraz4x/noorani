import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { BookOpen, GraduationCap, Users, Star, Clock, Award, Globe, Heart } from "lucide-react";
import { Link } from "react-router-dom";

const programs = [
  {
    title: "Quran Classes",
    icon: Heart,
    description: "Learn to read Quran online with proper tajweed, memorize beautiful surahs, and develop a love for reading the Quran through our live classes.",
    features: [
      "Tajweed rules and pronunciation",
      "Memorization techniques",
      "Quranic stories and meanings",
      "One-on-one attention"
    ],
    color: "bg-green-50 border-green-200",
    iconColor: "text-green-600",
    image: "/a-charming-child-friendly-cartoon-illust_xn5OLAW7RgKHG6Lm1It5lg_gk1ihdTgSCyfg1K-CU35WA.jpeg",
    route: "/quran-classes"
  },
  {
    title: "Islamic Studies",
    icon: GraduationCap,
    description: "Learn about Islam with Noor & Nora in a fun, engaging program designed specifically for kids. Our live teachers make Islamic education exciting and memorable.",
    features: [
      "Islamic history and stories",
      "Islamic values and ethics",
      "Fun activities and games",
      "Live teacher interaction"
    ],
    color: "bg-yellow-50 border-yellow-200",
    iconColor: "text-yellow-600",
    image: "/a-charming-child-friendly-cartoon-illust_Hqu_naeDQ9iUAXuwKSQpGw_gk1ihdTgSCyfg1K-CU35WA.jpeg",
    route: "/islamic-studies"
  },
  {
    title: "Arabic Language Classes",
    icon: BookOpen,
    description: "Arabic is the language of the Quran and is essential for every young Muslim. Our Arabic classes make learning fun and engaging with interactive activities.",
    features: [
      "Learn Modern Standard Arabic",
      "Interactive learning methods",
      "Age-appropriate curriculum",
      "Native Arabic speakers"
    ],
    color: "bg-blue-50 border-blue-200",
    iconColor: "text-blue-600",
    image: "/bee-mascot-Photoroom-Picsart-AiImageEnhancer.png",
    route: "/arabic-classes"
  }
];

const features = [
  {
    icon: Users,
    title: "Professional Teachers",
    description: "Certified Islamic educators with years of experience"
  },
  {
    icon: Globe,
    title: "One-on-One Live Classes",
    description: "Personalized attention for every student"
  },
  {
    icon: Clock,
    title: "24-Hour Availability",
    description: "Learn at your own pace and schedule"
  },
  {
    icon: Award,
    title: "Monthly Assessments",
    description: "Track progress with regular evaluations"
  },
  {
    icon: Star,
    title: "Certificates",
    description: "Earn certificates upon completion"
  }
];

export default function Programs() {
  return (
    <div className="min-h-screen bg-[#f9f7f3] flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="pt-16 pb-8 bg-gradient-to-b from-yellow-50 to-[#f9f7f3] relative overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
              <div>
                <h1 className="text-5xl font-extrabold text-primary mb-4 font-sans">
                  Choose a Structured
                </h1>
                <h2 className="text-4xl font-bold text-primary mb-4 font-sans">
                  Noorani Academy Program
                </h2>
                <p className="text-lg text-slate-700 mb-6 max-w-xl">
                  Online Quran, Arabic, and Islamic Studies classes with professional teachers, 
                  one-on-one live classes, 24-hour availability, monthly assessments, and certificates.
                </p>

              </div>
              <div className="relative">
                <img 
                  src="/cartoon-muslim-girl-nura-a-cheerful-musl_3M9ky64SR6u4xu6oOJoOvA_tAuUlG9qTB2OLpQfF8prfA.jpeg" 
                  alt="Student learning" 
                  className="w-full max-w-md mx-auto rounded-2xl shadow-lg"
                />
                <div className="absolute -top-4 -right-4">
                  <img 
                    src="/bee-mascot-Photoroom-Picsart-AiImageEnhancer.png" 
                    alt="Cartoon bird" 
                    className="w-16 h-16"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>



        {/* Programs Section */}
        <section className="py-16 bg-gradient-to-b from-[#f9f7f3] to-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">

              <p className="text-lg text-slate-700 max-w-2xl mx-auto">
                Choose from our comprehensive range of Islamic education programs designed specifically for children
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {programs.map((program, index) => (
                <div key={index} className={`bg-white rounded-2xl shadow-lg p-6 border-2 ${program.color} hover:shadow-xl transition-shadow duration-300`}>
                  <div className="text-center mb-6">
                    <div className="w-20 h-20 mx-auto mb-4 bg-white rounded-full shadow-lg flex items-center justify-center">
                      <img 
                        src={program.image} 
                        alt={program.title} 
                        className="w-16 h-16 rounded-full object-cover"
                      />
                    </div>
                    <h3 className="text-xl font-bold text-primary mb-3">{program.title}</h3>
                    <p className="text-slate-600 mb-4">{program.description}</p>
                  </div>
                  
                  <ul className="space-y-2 mb-6">
                    {program.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-slate-700">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Button className="w-full bg-primary hover:bg-primary/90 text-white font-bold rounded-full py-3" asChild>
                    <Link to={program.route}>Learn More</Link>
                  </Button>
                </div>
              ))}
            </div>

            {/* Call to Action */}
            <div className="text-center">

            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-primary mb-4">Why Choose Noorani Academy?</h2>
              <p className="text-lg text-slate-700 max-w-2xl mx-auto">
                Our comprehensive approach ensures every child receives the best Islamic education experience
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="text-center p-4">
                  <div className="w-12 h-12 mx-auto mb-3 bg-primary/10 rounded-full flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-primary mb-2">{feature.title}</h3>
                  <p className="text-sm text-slate-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>


      </main>

      <Footer />
    </div>
  );
} 