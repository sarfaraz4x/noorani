import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";



export default function IslamicStudies() {
  return (
    <div className="min-h-screen bg-[#f9f7f3] flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="pt-16 pb-8 bg-gradient-to-b from-yellow-50 to-[#f9f7f3] relative overflow-hidden">
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
                  Islamic Studies for Children
                </h1>
                <h2 className="text-2xl font-bold text-primary mb-4">
                  Comprehensive Learning Outcomes
                </h2>
                <p className="text-lg text-slate-700 mb-6">
                  Through our complete Islamic education program, your child will develop profound understanding of essential Islamic knowledge. The curriculum encompasses comprehensive learning that builds a strong foundation for lifelong faith development.
                </p>
                <Button className="bg-primary hover:bg-primary/90 text-white font-bold rounded-full py-3 px-8 text-lg" asChild>
                  <Link to="/pricing">Enroll Now</Link>
                </Button>
              </div>
              <div className="relative">
                <img 
                  src="/a-charming-child-friendly-cartoon-illust_Hqu_naeDQ9iUAXuwKSQpGw_gk1ihdTgSCyfg1K-CU35WA.jpeg" 
                  alt="Islamic Studies" 
                  className="w-full max-w-md mx-auto rounded-2xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Learning Outcomes */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-primary mb-8 text-center">Educational Journey Overview</h2>
              <p className="text-lg text-slate-700 mb-8">
                Through our complete Islamic education program, your child will develop profound understanding of essential Islamic knowledge. The curriculum encompasses prophetic narratives, hadith collection, Islamic heritage, core principles, character development, spiritual expressions, and age-appropriate Seerah studies designed for young learners.
              </p>
              <p className="text-lg text-slate-700 mb-8">
                Our comprehensive approach covers life stories and teachings of the Prophet Muhammad (peace be upon him), authentic sayings and traditions, rich historical foundations of Islam, the fundamental five pillars that guide Muslim practice, Islamic ethics and their practical application in daily situations, supplications and prayers for different life circumstances, and comprehensive biographical learning.
              </p>
            </div>
          </div>
        </section>

        {/* Understanding Islamic Education */}
        <section className="py-12 bg-gradient-to-b from-[#f9f7f3] to-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-primary mb-6 text-center">Understanding Islamic Education for Young Minds</h2>
              <h3 className="text-2xl font-bold text-primary mb-4">Defining Children's Islamic Studies</h3>
              <p className="text-lg text-slate-700 mb-8">
                Islamic education represents the comprehensive academic exploration of Islamic knowledge, principles, and practices. For Muslims seeking deeper comprehension of their faith and the ability to confidently address religious inquiries, mastering Islamic studies becomes indispensable.
              </p>
              <p className="text-lg text-slate-700 mb-8">
                Our children's Islamic studies curriculum mirrors our youth-oriented Quranic programs, where skilled educators employ developmentally appropriate materials to make sophisticated religious concepts accessible and understandable for young minds.
              </p>
            </div>
          </div>
        </section>

        {/* Educational Foundation */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-primary mb-6 text-center">The Educational Foundation</h2>
              <h3 className="text-2xl font-bold text-primary mb-4">Why Children Require Professional Islamic Instruction</h3>
              <p className="text-lg text-slate-700 mb-8">
                Islamic knowledge can present complexity that challenges young learners. Students benefit tremendously from qualified instructors who provide accurate explanations and prevent misunderstandings of fundamental religious principles.
              </p>
              <p className="text-lg text-slate-700 mb-8">
                Noorani Academy provides expert educators prepared to guide your child's initial steps in Islamic learning. Additionally, our beloved mascot characters serve as encouraging companions throughout your child's educational adventure, motivating continued learning and engagement.
              </p>
            </div>
          </div>
        </section>

        {/* Digital Learning Advantages */}
        <section className="py-12 bg-gradient-to-b from-white to-[#f9f7f3]">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-primary mb-6 text-center">Digital Learning Advantages</h2>
              <h3 className="text-2xl font-bold text-primary mb-4">Benefits of Online Islamic Education for Children</h3>
              <p className="text-lg text-slate-700 mb-8">
                Today's children must develop familiarity with age-appropriate Islamic concepts, and digital learning platforms make this more accessible than ever for families. Online education provides customized focus areas where you can select specific topics matching your child's interests and needs, professional guidance from expert instructors dedicated to quality education, and efficiency benefits with optimized time management and reduced effort requirements.
              </p>
              <p className="text-lg text-slate-700 mb-8">
                Additionally, our digital platform offers cost effectiveness by eliminating additional material and transportation expenses, enhanced concentration through improved learning focus in familiar home environments, and schedule flexibility with adaptable timing that complements existing school commitments.
              </p>
            </div>
          </div>
        </section>

        {/* Structured Learning Approach */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-primary mb-6 text-center">Structured Learning Approach</h2>
              <h3 className="text-2xl font-bold text-primary mb-4">Developing Effective Educational Plans</h3>
              <p className="text-lg text-slate-700 mb-8">
                Given the extensive scope of Islamic studies—spanning beginner through advanced levels—systematic lesson planning ensures children learn at appropriate developmental paces.
              </p>
              <p className="text-lg text-slate-700 mb-8">
                At Noorani Academy, we prioritize your child's individual learning rhythm while preventing information overload. When consulting with course instructors, you'll receive detailed lesson plans that can be customized to match your child's specific capabilities and learning style.
              </p>
            </div>
          </div>
        </section>

        {/* Prerequisites and Preparation */}
        <section className="py-12 bg-gradient-to-b from-[#f9f7f3] to-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-primary mb-6 text-center">Prerequisites and Preparation</h2>
              <h3 className="text-2xl font-bold text-primary mb-4">Getting Started with Online Islamic Education</h3>
              <p className="text-lg text-slate-700 mb-8">
                No prior requirements exist for enrolling children in our Islamic studies programs. However, foundational Arabic language skills and Quranic familiarity provide valuable advantages. Since Islamic studies involve deeper exploration of Quranic and Hadith teachings, basic Holy Quran knowledge facilitates smoother learning progression.
              </p>
              <p className="text-lg text-slate-700 mb-8">
                Consider enrolling your children in our complementary programs: "Virtual Quran Classes for Youth," "Online Arabic Learning for Children," and "Islamic Studies" courses—an investment in their spiritual education they'll appreciate throughout their lives.
              </p>
            </div>
          </div>
        </section>

        {/* Curriculum Components */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-primary mb-8 text-center">Curriculum Components</h2>
              <h3 className="text-2xl font-bold text-primary mb-6 text-center">Core Learning Elements in Our Islamic Education Program</h3>
              
              <p className="text-lg text-slate-700 mb-8">
                Our comprehensive curriculum covers character and conduct through Islamic ethics, teaching proper manners and their integration into everyday interactions and behaviors. We focus on prophetic teachings through authentic Hadith studies, exploring the traditions and sayings of Prophet Muhammad (Peace Be Upon Him).
              </p>
              <p className="text-lg text-slate-700 mb-8">
                Spiritual practice is emphasized through supplication training, teaching duas and prayers appropriate for various life situations and circumstances. Historical understanding comes through prophetic stories, presenting narratives of Prophet Muhammad as found in the Holy Quran.
              </p>
              <p className="text-lg text-slate-700 mb-8">
                Biographical learning is achieved through comprehensive Seerah education, providing a detailed life study of Prophet Muhammad designed specifically for young learners. This multifaceted approach ensures children develop well-rounded Islamic knowledge that combines spiritual understanding with practical application, creating a strong foundation for lifelong faith development.
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-12 bg-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Begin Your Child's Islamic Education Journey Today</h2>
            <p className="text-xl mb-6">Enroll in our comprehensive Islamic studies program and witness your child's spiritual growth and understanding.</p>
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