import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { 
  BookOpen, 
  Heart, 
  Globe, 
  Star, 
  Users, 
  Award,
  Clock,
  Target,
  CheckCircle,
  GraduationCap
} from "lucide-react";

const Curriculum = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const programs = [
    {
      title: "Quran Classes",
      icon: Heart,
      description: "Master the Holy Quran with proper tajweed and memorization",
      color: "bg-green-50 border-green-200",
      iconColor: "text-green-600",
      levels: [
        {
          name: "Beginner",
          duration: "3-6 months",
          skills: ["Arabic alphabet recognition", "Basic tajweed rules", "Simple surah memorization", "Proper pronunciation"]
        },
        {
          name: "Intermediate",
          duration: "6-12 months",
          skills: ["Advanced tajweed", "Medium surah memorization", "Quranic stories understanding", "Recitation practice"]
        },
        {
          name: "Advanced",
          duration: "12+ months",
          skills: ["Complete tajweed mastery", "Long surah memorization", "Quranic interpretation", "Teaching others"]
        }
      ]
    },
    {
      title: "Islamic Studies",
      icon: BookOpen,
      description: "Comprehensive Islamic knowledge and character development",
      color: "bg-purple-50 border-purple-200",
      iconColor: "text-purple-600",
      levels: [
        {
          name: "Foundation",
          duration: "4-8 months",
          skills: ["Five pillars of Islam", "Basic Islamic manners", "Prophet's stories", "Daily duas"]
        },
        {
          name: "Intermediate",
          duration: "8-16 months",
          skills: ["Hadith studies", "Islamic history", "Character building", "Advanced supplications"]
        },
        {
          name: "Advanced",
          duration: "16+ months",
          skills: ["Seerah studies", "Islamic jurisprudence basics", "Spiritual development", "Community leadership"]
        }
      ]
    },
    {
      title: "Arabic Language",
      icon: Globe,
      description: "Learn Modern Standard Arabic for Quran and communication",
      color: "bg-blue-50 border-blue-200",
      iconColor: "text-blue-600",
      levels: [
        {
          name: "Beginner",
          duration: "6-12 months",
          skills: ["Arabic alphabet", "Basic vocabulary", "Simple conversations", "Reading practice"]
        },
        {
          name: "Intermediate",
          duration: "12-24 months",
          skills: ["Grammar fundamentals", "Intermediate vocabulary", "Writing skills", "Cultural understanding"]
        },
        {
          name: "Advanced",
          duration: "24+ months",
          skills: ["Advanced grammar", "Fluency in speaking", "Literature appreciation", "Academic Arabic"]
        }
      ]
    }
  ];

  const learningOutcomes = [
    {
      icon: Star,
      title: "Spiritual Growth",
      description: "Develop a deep connection with Allah and strengthen faith through Quranic and Islamic studies"
    },
    {
      icon: Users,
      title: "Character Development",
      description: "Build Islamic character traits including honesty, kindness, patience, and respect for others"
    },
    {
      icon: Globe,
      title: "Language Proficiency",
      description: "Master Arabic language skills for Quran reading, Islamic texts, and cultural communication"
    },
    {
      icon: Award,
      title: "Academic Excellence",
      description: "Achieve comprehensive Islamic education with recognized certificates and qualifications"
    },
    {
      icon: Heart,
      title: "Love for Learning",
      description: "Cultivate a lifelong passion for Islamic knowledge and continuous spiritual development"
    },
    {
      icon: Target,
      title: "Practical Application",
      description: "Apply Islamic teachings in daily life through prayers, manners, and community service"
    }
  ];

  const teachingMethods = [
    {
      icon: Users,
      title: "One-on-One Sessions",
      description: "Personalized attention from qualified Islamic educators"
    },
    {
      icon: Clock,
      title: "Flexible Scheduling",
      description: "Learn at your own pace with 24/7 availability"
    },
    {
      icon: CheckCircle,
      title: "Interactive Learning",
      description: "Engaging activities, games, and multimedia resources"
    },
    {
      icon: GraduationCap,
      title: "Certified Teachers",
      description: "Native Arabic speakers with advanced Islamic education credentials"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Header />
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/10 via-yellow-50 to-green-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">
              Complete Islamic Education
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6 font-sans">
              Our Comprehensive
              <span className="block text-yellow-600">Curriculum</span>
            </h1>
            <p className="text-xl text-slate-700 mb-8 leading-relaxed">
              A structured, age-appropriate Islamic education program designed to nurture young hearts and minds. 
              Our curriculum combines traditional Islamic knowledge with modern teaching methods to create 
              confident, knowledgeable, and spiritually grounded Muslim children.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-primary hover:bg-primary/90 text-white font-bold rounded-full py-3 px-8 text-lg" asChild>
                <Link to="/programs">Explore Programs</Link>
              </Button>
              <Button variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-white font-bold rounded-full py-3 px-8 text-lg" asChild>
                <Link to="/pricing">View Pricing</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Three Pillars of Islamic Education
            </h2>
            <p className="text-lg text-slate-700 max-w-3xl mx-auto">
              Our curriculum is built on three fundamental programs that work together to provide 
              a complete Islamic education experience for your child.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-12">
            {programs.map((program, index) => (
              <Card key={index} className={`${program.color} border-2 hover:shadow-lg transition-all duration-300`}>
                <CardHeader className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-white rounded-full flex items-center justify-center shadow-lg">
                    <program.icon className={`w-8 h-8 ${program.iconColor}`} />
                  </div>
                  <CardTitle className="text-2xl font-bold text-primary">{program.title}</CardTitle>
                  <CardDescription className="text-slate-700">{program.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {program.levels.map((level, levelIndex) => (
                      <div key={levelIndex} className="bg-white/50 rounded-lg p-4">
                        <div className="flex justify-between items-center mb-2">
                          <h4 className="font-semibold text-primary">{level.name}</h4>
                          <Badge variant="secondary" className="text-xs">
                            {level.duration}
                          </Badge>
                        </div>
                        <ul className="space-y-1">
                          {level.skills.map((skill, skillIndex) => (
                            <li key={skillIndex} className="text-sm text-slate-700 flex items-center">
                              <CheckCircle className="w-4 h-4 text-green-600 mr-2 flex-shrink-0" />
                              {skill}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Outcomes */}
      <section className="py-16 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              What Your Child Will Achieve
            </h2>
            <p className="text-lg text-slate-700 max-w-3xl mx-auto">
              Our comprehensive curriculum ensures that every child develops essential skills and knowledge 
              for a strong Islamic foundation and successful future.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {learningOutcomes.map((outcome, index) => (
              <Card key={index} className="bg-white hover:shadow-lg transition-all duration-300 border-2 border-transparent hover:border-primary/20">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <outcome.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3">{outcome.title}</h3>
                  <p className="text-slate-700 leading-relaxed">{outcome.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Teaching Methods */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Our Teaching Approach
            </h2>
            <p className="text-lg text-slate-700 max-w-3xl mx-auto">
              We combine traditional Islamic teaching methods with modern educational technology 
              to create an engaging and effective learning experience.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teachingMethods.map((method, index) => (
              <Card key={index} className="text-center bg-gradient-to-b from-yellow-50 to-white hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                    <method.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-primary mb-3">{method.title}</h3>
                  <p className="text-slate-700 text-sm leading-relaxed">{method.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-br from-primary/10 to-yellow-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Ready to Begin Your Child's Islamic Journey?
            </h2>
            <p className="text-lg text-slate-700 mb-8 leading-relaxed">
              Join thousands of families who have chosen Noorani Academy for their children's Islamic education. 
              Start with a free trial and experience the difference our comprehensive curriculum makes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-primary hover:bg-primary/90 text-white font-bold rounded-full py-4 px-8 text-lg" asChild>
                <Link to="/auth">Start Free Trial</Link>
              </Button>
              <Button variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-white font-bold rounded-full py-4 px-8 text-lg" asChild>
                <Link to="/programs">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Curriculum; 