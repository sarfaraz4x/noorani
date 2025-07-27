import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Users, BookOpen, Award, Clock, Globe, Star, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const features = [
  {
    icon: Users,
    title: "Native Arabic Speakers",
    description: "Certified educators with advanced teaching credentials"
  },
  {
    icon: BookOpen,
    title: "Structured Curriculum",
    description: "Carefully designed frameworks for individual learning"
  },
  {
    icon: Award,
    title: "Official Certification",
    description: "Accredited education with completion certificates"
  },
  {
    icon: Clock,
    title: "Flexible Scheduling",
    description: "Accommodates academic and extracurricular commitments"
  },
  {
    icon: Globe,
    title: "Interactive Learning",
    description: "Game-based strategies for engaging education"
  },
  {
    icon: Star,
    title: "Early Learning Advantage",
    description: "Optimized for young minds and rapid acquisition"
  }
];

const learningOutcomes = [
  {
    category: "Foundation Elements",
    skills: [
      "Arabic numerals and alphabetic systems",
      "Essential vocabulary building",
      "Basic to advanced phrases and question formation"
    ]
  },
  {
    category: "Communication Skills",
    skills: [
      "Listening comprehension and understanding",
      "Arabic letter formation and word writing",
      "Arabic script reading proficiency",
      "Progressive advancement to sophisticated Arabic concepts"
    ]
  },
  {
    category: "Advanced Progression",
    skills: [
      "Complex Arabic language abilities",
      "Confidence and fluency development",
      "Lifelong language skills foundation"
    ]
  }
];

export default function ArabicClasses() {
  return (
    <div className="min-h-screen bg-[#f9f7f3] flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="pt-16 pb-8 bg-gradient-to-b from-blue-50 to-[#f9f7f3] relative overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="mb-6">
              <Link to="/programs" className="inline-flex items-center text-primary hover:text-primary/80 transition-colors">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Programs
              </Link>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
              <div>
                <h1 className="text-5xl font-extrabold text-primary mb-4" style={{ fontFamily: 'Comic Sans MS, Comic Sans, cursive' }}>
                  Arabic Learning for Children
                </h1>
                <h2 className="text-2xl font-bold text-primary mb-4">
                  Discover the Perfect Arabic Education Solution for Your Family
                </h2>
                <p className="text-lg text-slate-700 mb-6">
                  Muslim parents residing outside Arabic-speaking regions often face significant challenges when searching for quality Arabic education programs for their children. The task of personally teaching Arabic to young learners can feel overwhelming, creating a genuine need for structured, accessible online Arabic instruction that accelerates language development through proven methodologies.
                </p>
                <Button className="bg-primary hover:bg-primary/90 text-white font-bold rounded-full py-3 px-8 text-lg" asChild>
                  <Link to="/pricing">Enroll Now</Link>
                </Button>
              </div>
              <div className="relative">
                <img 
                  src="/bee-mascot-Photoroom-Picsart-AiImageEnhancer.png" 
                  alt="Arabic Learning" 
                  className="w-full max-w-md mx-auto rounded-2xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Parent Concerns Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-primary mb-6 text-center">Addressing Parent Concerns</h2>
              <p className="text-lg text-slate-700 mb-6">
                Many parents find themselves questioning: Where can I locate qualified Arabic instructors for my children? Do virtual Arabic programs deliver meaningful results? What investment is required for authentic, native-speaker instruction? These concerns are completely understandable, and Noorani Academy is here to provide comprehensive solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Excellence Section */}
        <section className="py-12 bg-gradient-to-b from-[#f9f7f3] to-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-primary mb-6 text-center">Excellence in Arabic Education</h2>
              <p className="text-lg text-slate-700 mb-8">
                Noorani Academy delivers premier Arabic language instruction specifically designed for young learners. Our educational team consists of native Arabic speakers who possess advanced teaching credentials and extensive experience guiding children toward Arabic fluency. Our virtual classroom environment features carefully structured curriculum frameworks that prioritize your child's individual learning journey while maintaining exceptional value compared to traditional alternatives.
              </p>
              <p className="text-lg text-slate-700 mb-8">
                Our comprehensive program enhances multiple linguistic competencies: Arabic literacy, composition skills, verbal communication, and auditory comprehension. Upon completion, students will confidently engage in Arabic conversations, comprehend spoken Arabic, recite Quranic verses with proper pronunciation, and grasp their meanings. This holistic approach fulfills every Muslim parent's aspiration to witness their children beautifully reciting the Holy Quran in its original language.
              </p>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-primary mb-8 text-center">Why Choose Our Program?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3">{feature.title}</h3>
                  <p className="text-slate-700">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Detailed Features */}
        <section className="py-12 bg-gradient-to-b from-white to-[#f9f7f3]">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-primary mb-4">Engaging Learning Experience</h3>
                <p className="text-slate-700 mb-4">
                  Noorani Academy's virtual Arabic curriculum is thoughtfully crafted to address your child's specific educational requirements. Through interactive and entertaining instructional approaches, children remain enthusiastic about learning. Understanding that young minds thrive with playful elements, our courses incorporate game-based learning strategies throughout the educational process.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-primary mb-4">Expert Instruction</h3>
                <p className="text-slate-700 mb-4">
                  Our certified Arabic educators ensure students master the language through memorable, effective techniques that create lasting knowledge retention.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-primary mb-4">Comprehensive Skill Development</h3>
                <p className="text-slate-700 mb-4">
                  Our Arabic language program cultivates essential abilities including reading comprehension, oral expression, written communication, and listening skills. We additionally provide specialized Arabic grammar instruction that introduces students to fundamental language structures and rules.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-primary mb-4">Early Learning Advantage</h3>
                <p className="text-slate-700 mb-4">
                  Our program welcomes children from very young ages, recognizing that early language exposure significantly accelerates acquisition and retention. Young children naturally absorb languages through imitation and pattern recognition, developing fluency far more rapidly than older learners who require more structured, time-intensive approaches.
                </p>
                <p className="text-slate-700 mb-4">
                  Our beginner-friendly Arabic classes require no previous experience or background knowledge. Recognizing children's naturally shorter attention spans, we maintain engagement through interactive games and activities that make learning enjoyable and effective.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Unique Approach */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-primary mb-8 text-center">Our Unique Approach</h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-primary mb-4">Interactive Learning Environment</h3>
                  <p className="text-slate-700 mb-4">
                    Through our specially designed online Arabic curriculum, your child will experience joyful, meaningful education. Understanding that young learners need constant engagement to maintain focus, Noorani Academy introduces students to beloved characters who guide them through exciting educational adventures filled with discovery and achievement.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-primary mb-4">Personalized Teaching</h3>
                  <p className="text-slate-700 mb-4">
                    Your child will master Arabic through dynamic, interactive methods that transform language learning into an enjoyable experience under the guidance of our skilled native instructors. Parents may select either male or female teachers based on their preferences and their child's comfort level.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Learning Outcomes */}
        <section className="py-12 bg-gradient-to-b from-[#f9f7f3] to-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-primary mb-8 text-center">Learning Outcomes</h2>
              <h3 className="text-2xl font-bold text-primary mb-6 text-center">Core Skills Development</h3>
              <p className="text-lg text-slate-700 mb-8 text-center">
                Our comprehensive Arabic Language curriculum ensures students master four fundamental language competencies:
              </p>
              
              <div className="space-y-8">
                {learningOutcomes.map((outcome, index) => (
                  <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-blue-200">
                    <h4 className="text-xl font-bold text-primary mb-4">{outcome.category}</h4>
                    <ul className="space-y-2">
                      {outcome.skills.map((skill, skillIndex) => (
                        <li key={skillIndex} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-slate-700">{skill}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-12 bg-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Begin Your Child's Arabic Learning Journey Today</h2>
            <p className="text-xl mb-6">Register for our online classes and witness remarkable progress in their language development.</p>
            <Button className="bg-white text-primary hover:bg-gray-100 font-bold rounded-full py-4 px-8 text-lg" asChild>
              <Link to="/pricing">Enroll Now</Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
} 