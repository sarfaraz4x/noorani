import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function QuranClasses() {
  return (
    <div className="min-h-screen bg-[#f9f7f3] flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="pt-16 pb-8 bg-gradient-to-b from-green-50 to-[#f9f7f3] relative overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="mb-6">
              <Link to="/programs" className="inline-flex items-center text-primary hover:text-primary/80 transition-colors">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Programs
              </Link>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
              <div>
                <h1 className="text-5xl font-extrabold text-primary mb-4 font-sans">
                  Quran Classes for Children
                </h1>
                <h2 className="text-2xl font-bold text-primary mb-4">
                  Learn to Read Quran with Proper Tajweed
                </h2>
                <p className="text-lg text-slate-700 mb-6">
                  Our comprehensive Quran learning program helps children develop a deep love for the Holy Quran while mastering proper pronunciation, memorization techniques, and understanding of Quranic meanings.
                </p>
                <Button className="bg-primary hover:bg-primary/90 text-white font-bold rounded-full py-3 px-8 text-lg" asChild>
                  <Link to="/pricing">Enroll Now</Link>
                </Button>
              </div>
              <div className="relative">
                <img 
                  src="/a-charming-child-friendly-cartoon-illust_xn5OLAW7RgKHG6Lm1It5lg_gk1ihdTgSCyfg1K-CU35WA.jpeg" 
                  alt="Quran Learning" 
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
              <h2 className="text-3xl font-bold text-primary mb-8 text-center">Comprehensive Learning Outcomes</h2>
              <h3 className="text-2xl font-bold text-primary mb-6 text-center">Educational Journey Overview</h3>
              <p className="text-lg text-slate-700 mb-8">
                Through our complete Quran education program, your child will develop profound understanding and love for the Holy Quran. The curriculum encompasses proper tajweed rules and pronunciation, memorization techniques for beautiful surahs, understanding of Quranic stories and meanings, and spiritual connection through regular recitation.
              </p>
              <p className="text-lg text-slate-700 mb-8">
                Our comprehensive approach covers Arabic script reading proficiency, proper articulation of Arabic letters, understanding of Quranic verses and their context, development of memorization skills, and building a lifelong relationship with the Holy Quran through interactive and engaging learning methods.
              </p>
            </div>
          </div>
        </section>

        {/* Understanding Quran Education */}
        <section className="py-12 bg-gradient-to-b from-[#f9f7f3] to-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-primary mb-6 text-center">Understanding Quran Education for Young Minds</h2>
              <h3 className="text-2xl font-bold text-primary mb-4">Defining Children's Quran Studies</h3>
              <p className="text-lg text-slate-700 mb-8">
                Quran education represents the sacred journey of learning to read, recite, and understand the Holy Quran with proper tajweed and pronunciation. For Muslim children, developing a strong foundation in Quranic studies is essential for their spiritual growth and connection to their faith.
              </p>
              <p className="text-lg text-slate-700 mb-8">
                Our children's Quran curriculum is designed to make the sacred text accessible and engaging for young learners, where skilled educators employ age-appropriate materials to make Quranic learning both meaningful and enjoyable.
              </p>
            </div>
          </div>
        </section>

        {/* Educational Foundation */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-primary mb-6 text-center">The Educational Foundation</h2>
              <h3 className="text-2xl font-bold text-primary mb-4">Why Children Require Professional Quran Instruction</h3>
              <p className="text-lg text-slate-700 mb-8">
                Quranic recitation requires precise pronunciation and understanding of tajweed rules that can be challenging for young learners. Students benefit tremendously from qualified instructors who provide accurate guidance and prevent common mistakes in Quranic reading.
              </p>
              <p className="text-lg text-slate-700 mb-8">
                Noorani Academy provides expert Quran teachers prepared to guide your child's journey in Quranic learning. Our beloved mascot characters serve as encouraging companions throughout your child's Quranic education, making the learning process both spiritual and enjoyable.
              </p>
            </div>
          </div>
        </section>

        {/* Digital Learning Advantages */}
        <section className="py-12 bg-gradient-to-b from-white to-[#f9f7f3]">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-primary mb-6 text-center">Digital Learning Advantages</h2>
              <h3 className="text-2xl font-bold text-primary mb-4">Benefits of Online Quran Education for Children</h3>
              <p className="text-lg text-slate-700 mb-8">
                Today's children can develop a strong connection with the Holy Quran through digital learning platforms that make Quranic education more accessible than ever for families. Online education provides personalized attention where each child receives individual guidance tailored to their learning pace and needs, professional instruction from certified Quran teachers with deep knowledge of tajweed and memorization techniques, and flexible scheduling that accommodates family routines and school commitments.
              </p>
              <p className="text-lg text-slate-700 mb-8">
                Additionally, our digital platform offers cost-effective learning by eliminating travel expenses and providing access to quality Quranic education from home, enhanced focus through distraction-free learning environments, and continuous progress tracking with regular assessments and feedback to ensure steady improvement in Quranic recitation and memorization skills.
              </p>
            </div>
          </div>
        </section>

        {/* Structured Learning Approach */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-primary mb-6 text-center">Structured Learning Approach</h2>
              <h3 className="text-2xl font-bold text-primary mb-4">Developing Effective Quranic Educational Plans</h3>
              <p className="text-lg text-slate-700 mb-8">
                Given the sacred nature of Quranic studies—spanning from basic Arabic letters to advanced tajweed rules and memorization—systematic lesson planning ensures children learn at appropriate developmental paces while maintaining reverence for the Holy text.
              </p>
              <p className="text-lg text-slate-700 mb-8">
                At Noorani Academy, we prioritize your child's individual learning rhythm while building a strong foundation in Quranic studies. When consulting with our Quran instructors, you'll receive detailed lesson plans that can be customized to match your child's specific capabilities and learning style, ensuring steady progress in their Quranic journey.
              </p>
            </div>
          </div>
        </section>

        {/* Prerequisites and Preparation */}
        <section className="py-12 bg-gradient-to-b from-[#f9f7f3] to-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-primary mb-6 text-center">Prerequisites and Preparation</h2>
              <h3 className="text-2xl font-bold text-primary mb-4">Getting Started with Online Quran Education</h3>
              <p className="text-lg text-slate-700 mb-8">
                No prior requirements exist for enrolling children in our Quran classes. We welcome students at all levels, from complete beginners to those with some Quranic background. However, basic Arabic language familiarity can provide valuable advantages for faster progress in Quranic reading and understanding.
              </p>
              <p className="text-lg text-slate-700 mb-8">
                Consider enrolling your children in our complementary programs: "Online Arabic Learning for Children," "Islamic Studies," and "Quran Classes"—an investment in their spiritual education that will benefit them throughout their lives and strengthen their connection to the Holy Quran.
              </p>
            </div>
          </div>
        </section>

        {/* Curriculum Components */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-primary mb-8 text-center">Curriculum Components</h2>
              <h3 className="text-2xl font-bold text-primary mb-6 text-center">Core Learning Elements in Our Quran Education Program</h3>
              
              <p className="text-lg text-slate-700 mb-8">
                Our comprehensive curriculum covers foundational Quranic skills through proper Arabic letter recognition and pronunciation, teaching children to identify and correctly pronounce each letter of the Arabic alphabet. We focus on tajweed rules and proper recitation techniques, ensuring children learn the correct way to recite Quranic verses with proper articulation and rhythm.
              </p>
              <p className="text-lg text-slate-700 mb-8">
                Memorization techniques are emphasized through systematic approaches to learning and retaining Quranic verses, teaching effective methods for memorizing surahs and developing strong memory skills. Understanding and interpretation come through age-appropriate explanations of Quranic stories and meanings, helping children connect with the spiritual messages of the Holy Quran.
              </p>
              <p className="text-lg text-slate-700 mb-8">
                Spiritual connection is achieved through regular recitation practice and developing a love for reading the Quran, creating a lifelong relationship with the sacred text. This multifaceted approach ensures children develop both technical proficiency and spiritual understanding, creating a strong foundation for their Quranic journey and faith development.
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-12 bg-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Begin Your Child's Quranic Journey Today</h2>
            <p className="text-xl mb-6">Enroll in our comprehensive Quran classes and witness your child's spiritual growth and Quranic proficiency.</p>
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