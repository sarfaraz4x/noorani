import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const AgeGroups = () => {
  const ageGroups = [
    {
      title: "Pre-K",
      subtitle: "Pre-K & Kindergarten",
      description: "Start strong—build their foundation early! Our Pre-K program helps children begin their journey with a love for Islam through Quran, Arabic, and Islamic Studies designed just for young minds.",
      color: "bg-[#FEE4E1] border-[#FEE4E1]",
      accent: "bg-[#F9B7A6] text-[#F76C5E]",
      image: "/1.jpeg",
      grade: "Pre-K & Kindergarten"
    },
    {
      title: "Elementary",
      subtitle: "1st Grade - 5th Grade",
      description: "Build confidence and fluency! These are the golden years to learn the Quran and Arabic with ease and joy. Our engaging lessons support brain development and instill core Islamic values for life.",
      color: "bg-[#E1F1FA] border-[#E1F1FA]",
      accent: "bg-[#A6D8F9] text-[#1C7ED6]",
      image: "/2.jpg",
      grade: "1st Grade - 5th Grade"
    },
    {
      title: "Middle School",
      subtitle: "6th Grade - 8th Grade",
      description: "Stay rooted in faith and identity! Middle schoolers face new challenges, so we help them stay grounded with classes designed to guide them through this transitional stage.",
      color: "bg-[#FFF2E1] border-[#FFF2E1]",
      accent: "bg-[#FFD59E] text-[#FFA94D]",
      image: "/3.jpeg",
      grade: "6th Grade - 8th Grade"
    },
    {
      title: "High School",
      subtitle: "9th Grade - 12th Grade",
      description: "Prepare for adulthood with faith and clarity! Teens gain deep Islamic knowledge, strong Quran skills, and real-life discussions rooted in Islamic principles.",
      color: "bg-[#E1F9E6] border-[#E1F9E6]",
      accent: "bg-[#A6F9C2] text-[#38B000]",
      image: "/4.jpg",
      grade: "9th Grade - 12th Grade"
    }
  ];

  const imagePaths = [
    '/1.jpeg', // Pre-K
    '/2.jpg', // Primary School
    '/3.jpeg', // Middle School
    '/4.jpg'  // High School
  ];

  return (
    <section id="programs" className="py-20 bg-gradient-to-b from-background to-muted relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-2 font-sans">
            Islamic Classes for All Ages
          </h2>
          <p className="text-xl md:text-2xl font-bold text-[#1C7ED6] mb-4 font-sans">
            K-12 Program Made for Every Stage of Your Child's Growth
          </p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-10 mb-12">
          {ageGroups.map((group, index) => (
            <div key={index} className={`relative flex flex-col items-center rounded-[1.5rem] lg:rounded-[2.5rem] border-4 ${group.color} shadow-xl pb-6 lg:pb-10 pt-4 lg:pt-8 px-3 lg:px-6`} style={{ minHeight: '400px' }}>
              <div className="transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-2xl hover:ring-4 hover:ring-primary/20 rounded-3xl mb-3 lg:mb-4" style={{ width: '120px', height: '120px', background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img src={group.image} alt={group.title + ' illustration'} className="w-28 h-28 lg:w-40 lg:h-40 rounded-3xl object-cover border-4 border-white shadow-lg bg-white transition-transform duration-300 ease-in-out" />
                </div>
              <h3 className="text-lg lg:text-2xl font-extrabold mb-2 text-center font-sans">{group.title}</h3>
              <p className="text-xs lg:text-base text-foreground mb-3 lg:mb-4 font-semibold text-center">{group.subtitle}</p>
              <p className="text-xs lg:text-base text-muted-foreground mb-3 lg:mb-4 flex-grow text-center">{group.description}</p>
              {/* Grade badge inside card */}
              <span className={`inline-block mt-2 px-2 lg:px-4 py-1 lg:py-2 rounded-full font-bold text-xs lg:text-sm shadow-md font-sans ${group.accent}`}>
                {group.grade}
              </span>
                </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <button className="px-8 lg:px-10 py-4 lg:py-5 rounded-full bg-primary text-white font-extrabold text-lg lg:text-xl shadow-lg hover:bg-primary/90 transition-colors font-sans">
            Start Learning Today
          </button>
        </div>
      </div>
      {/* Wavy divider at the bottom */}
      <svg className="absolute bottom-0 left-0 w-full h-16" viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill="#fff" fillOpacity="1" d="M0,32L60,37.3C120,43,240,53,360,69.3C480,85,600,107,720,101.3C840,96,960,64,1080,53.3C1200,43,1320,53,1380,58.7L1440,64L1440,160L1380,160C1320,160,1200,160,1080,160C960,160,840,160,720,160C600,160,480,160,360,160C240,160,120,160,60,160L0,160Z"></path>
      </svg>
    </section>
  );
};

export default AgeGroups;