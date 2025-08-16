import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { 
  Heart, 
  Users, 
  Award, 
  Globe, 
  Star, 
  BookOpen,
  Target,
  Shield,
  Lightbulb,
  GraduationCap,
  Clock,
  CheckCircle
} from "lucide-react";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const values = [
    {
      icon: Heart,
      title: "Compassionate Teaching",
      description: "We teach with love, patience, and understanding, recognizing that every child learns differently."
    },
    {
      icon: Shield,
      title: "Islamic Values",
      description: "All our teachings are rooted in authentic Islamic principles and traditional knowledge."
    },
    {
      icon: Target,
      title: "Excellence",
      description: "We strive for academic excellence while nurturing spiritual and character development."
    },
    {
      icon: Users,
      title: "Community",
      description: "Building a supportive community of learners, teachers, and families united in faith."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Combining traditional Islamic education with modern technology and teaching methods."
    },
    {
      icon: Globe,
      title: "Accessibility",
      description: "Making quality Islamic education accessible to children worldwide, regardless of location."
    }
  ];

  const achievements = [
    {
      number: "1000+",
      label: "Students Enrolled",
      description: "Children from around the world learning with us"
    },
    {
      number: "50+",
      label: "Certified Teachers",
      description: "Qualified Islamic educators and native Arabic speakers"
    },
    {
      number: "24/7",
      label: "Learning Support",
      description: "Round-the-clock availability for flexible learning"
    },
    {
      number: "95%",
      label: "Satisfaction Rate",
      description: "Parents and students highly satisfied with our programs"
    }
  ];

  const team = [
    {
      name: "Ustadh Ahmed Hassan",
      role: "Founder & Lead Quran Teacher",
      description: "A Hafiz-e-Quran with over 15 years of teaching experience, specializing in tajweed and Quran memorization.",
      expertise: ["Quran Recitation", "Tajweed", "Islamic Studies"]
    },
    {
      name: "Ustadha Fatima Zahra",
      role: "Islamic Studies Director",
      description: "Graduate from Al-Azhar University with expertise in Islamic jurisprudence and children's education.",
      expertise: ["Islamic Law", "Hadith Studies", "Character Development"]
    },
    {
      name: "Ustadh Omar Khalil",
      role: "Arabic Language Specialist",
      description: "Native Arabic speaker with advanced degrees in Arabic literature and modern teaching methodologies.",
      expertise: ["Modern Standard Arabic", "Classical Arabic", "Teaching Methods"]
    },
    {
      name: "Ustadha Aisha Rahman",
      role: "Curriculum Coordinator",
      description: "Educational specialist with experience in developing age-appropriate Islamic curricula for children.",
      expertise: ["Curriculum Design", "Child Psychology", "Educational Technology"]
    }
  ];

  const testimonials = [
    {
      name: "Amina Patel",
      location: "London, UK",
      text: "Noorani Academy has transformed my daughter's relationship with the Quran. She now reads with confidence and loves her Islamic studies classes.",
      rating: 5
    },
    {
      name: "Ahmed Al-Rashid",
      location: "Dubai, UAE",
      text: "The teachers are exceptional and the curriculum is comprehensive. My son has learned so much about his faith in just a few months.",
      rating: 5
    },
    {
      name: "Sarah Johnson",
      location: "Toronto, Canada",
      text: "As a convert, I wanted my children to have proper Islamic education. Noorani Academy has exceeded all my expectations.",
      rating: 5
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
              About Noorani Academy
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6 font-sans">
              Nurturing Hearts,
              <span className="block text-yellow-600">Building Futures</span>
            </h1>
            <p className="text-xl text-slate-700 mb-8 leading-relaxed">
              Founded with a vision to make authentic Islamic education accessible to every Muslim child, 
              Noorani Academy combines traditional Islamic knowledge with modern teaching methods to create 
              confident, knowledgeable, and spiritually grounded young Muslims.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-primary hover:bg-primary/90 text-white font-bold rounded-full py-3 px-8 text-lg" asChild>
                <Link to="/programs">Explore Our Programs</Link>
              </Button>
              <Button variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-white font-bold rounded-full py-3 px-8 text-lg" asChild>
                <Link to="/curriculum">View Curriculum</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Our Mission & Vision
              </h2>
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-green-50 to-green-100 p-6 rounded-xl border-l-4 border-green-500">
                  <h3 className="text-xl font-bold text-green-800 mb-3">Our Mission</h3>
                  <p className="text-green-700 leading-relaxed">
                    To provide comprehensive Islamic education that nurtures the spiritual, intellectual, 
                    and character development of Muslim children, preparing them to be confident, 
                    knowledgeable, and contributing members of the global Muslim community.
                  </p>
                </div>
                <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-xl border-l-4 border-blue-500">
                  <h3 className="text-xl font-bold text-blue-800 mb-3">Our Vision</h3>
                  <p className="text-blue-700 leading-relaxed">
                    To become the leading online Islamic education platform, making authentic Islamic 
                    knowledge accessible to every Muslim child worldwide, regardless of their location 
                    or background.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-primary/20 to-yellow-100 rounded-3xl p-8">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto mb-6 bg-primary rounded-full flex items-center justify-center">
                    <BookOpen className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-4">Why Choose Noorani Academy?</h3>
                  <ul className="space-y-3 text-left">
                    <li className="flex items-center text-slate-700">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                      Authentic Islamic knowledge from qualified scholars
                    </li>
                    <li className="flex items-center text-slate-700">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                      Age-appropriate curriculum designed for children
                    </li>
                    <li className="flex items-center text-slate-700">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                      Interactive learning with modern technology
                    </li>
                    <li className="flex items-center text-slate-700">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                      Flexible scheduling to fit your family's needs
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-slate-700 max-w-3xl mx-auto">
              These fundamental principles guide everything we do at Noorani Academy, 
              ensuring that every child receives the best possible Islamic education.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="bg-white hover:shadow-lg transition-all duration-300 border-2 border-transparent hover:border-primary/20">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <value.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3">{value.title}</h3>
                  <p className="text-slate-700 leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Our Achievements
            </h2>
            <p className="text-lg text-slate-700 max-w-3xl mx-auto">
              Numbers that reflect our commitment to excellence and the trust 
              that families worldwide have placed in Noorani Academy.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <Card key={index} className="text-center bg-gradient-to-b from-yellow-50 to-white hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="text-4xl font-bold text-primary mb-2">{achievement.number}</div>
                  <h3 className="text-lg font-bold text-primary mb-2">{achievement.label}</h3>
                  <p className="text-slate-700 text-sm">{achievement.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Meet Our Expert Team
            </h2>
            <p className="text-lg text-slate-700 max-w-3xl mx-auto">
              Our dedicated team of qualified Islamic educators brings together 
              traditional knowledge and modern teaching expertise.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-2 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="bg-white hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                      <GraduationCap className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl text-primary">{member.name}</CardTitle>
                      <CardDescription className="text-slate-600 font-semibold">{member.role}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700 mb-4 leading-relaxed">{member.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {member.expertise.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              What Parents Say
            </h2>
            <p className="text-lg text-slate-700 max-w-3xl mx-auto">
              Hear from families who have experienced the Noorani Academy difference 
              in their children's Islamic education journey.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-gradient-to-b from-yellow-50 to-white hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                    ))}
                  </div>
                  <p className="text-slate-700 mb-4 leading-relaxed italic">"{testimonial.text}"</p>
                  <div>
                    <p className="font-semibold text-primary">{testimonial.name}</p>
                    <p className="text-sm text-slate-600">{testimonial.location}</p>
                  </div>
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
              Join the Noorani Academy Family
            </h2>
            <p className="text-lg text-slate-700 mb-8 leading-relaxed">
              Be part of a community dedicated to nurturing the next generation of 
              confident, knowledgeable, and spiritually grounded Muslim children.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-primary hover:bg-primary/90 text-white font-bold rounded-full py-4 px-8 text-lg" asChild>
                <Link to="/auth">Start Free Trial</Link>
              </Button>
              <Button variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-white font-bold rounded-full py-4 px-8 text-lg" asChild>
                <Link to="/programs">Explore Programs</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About; 