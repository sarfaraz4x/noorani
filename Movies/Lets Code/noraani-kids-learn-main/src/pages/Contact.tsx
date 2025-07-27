import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageSquare, 
  Send,
  CheckCircle,
  Globe,
  Users,
  Heart
} from "lucide-react";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
    
    // Reset success message after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  const contactMethods = [
    {
      icon: Phone,
      title: "Phone Support",
      value: "+91 74610 27503",
      description: "Call us for immediate assistance",
      color: "bg-green-50 border-green-200",
      iconColor: "text-green-600"
    },
    {
      icon: Mail,
      title: "Email Support",
      value: "quickhelix460@gmail.com",
      description: "Send us an email anytime",
      color: "bg-blue-50 border-blue-200",
      iconColor: "text-blue-600"
    },
    {
      icon: Clock,
      title: "24/7 Availability",
      value: "Always Open",
      description: "We're here to help round the clock",
      color: "bg-purple-50 border-purple-200",
      iconColor: "text-purple-600"
    }
  ];

  const officeHours = [
    { day: "Monday - Friday", hours: "9:00 AM - 9:00 PM IST" },
    { day: "Saturday", hours: "9:00 AM - 6:00 PM IST" },
    { day: "Sunday", hours: "10:00 AM - 4:00 PM IST" },
    { day: "Emergency Support", hours: "24/7 Available" }
  ];

  const faqs = [
    {
      question: "How do I enroll my child in Noorani Academy?",
      answer: "You can enroll your child by visiting our Programs page, selecting a course, and clicking 'Enroll Now'. You can also call us directly for assistance."
    },
    {
      question: "What age groups do you teach?",
      answer: "We teach children from ages 4 to 18, with age-appropriate curricula designed for different developmental stages."
    },
    {
      question: "Do you offer free trial classes?",
      answer: "Yes! We offer a free trial class so you can experience our teaching methods before committing to a full course."
    },
    {
      question: "What if my child misses a class?",
      answer: "We offer flexible scheduling and make-up classes. You can reschedule sessions with advance notice."
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
              Get In Touch
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6" style={{ fontFamily: 'Comic Sans MS, Comic Sans, cursive' }}>
              Contact
              <span className="block text-yellow-600">Noorani Academy</span>
            </h1>
            <p className="text-xl text-slate-700 mb-8 leading-relaxed">
              We're here to help you with any questions about our Islamic education programs. 
              Reach out to us through any of the methods below, and we'll get back to you promptly.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Multiple Ways to Reach Us
            </h2>
            <p className="text-lg text-slate-700 max-w-3xl mx-auto">
              Choose the most convenient way to get in touch with our team. 
              We're committed to providing excellent support for all our families.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-12">
            {contactMethods.map((method, index) => (
              <Card key={index} className={`${method.color} border-2 hover:shadow-lg transition-all duration-300`}>
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-white rounded-full flex items-center justify-center shadow-lg">
                    <method.icon className={`w-8 h-8 ${method.iconColor}`} />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-2">{method.title}</h3>
                  <p className="text-lg font-semibold text-slate-800 mb-2">{method.value}</p>
                  <p className="text-slate-600">{method.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Office Hours */}
      <section className="py-16 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">Send Us a Message</h2>
              <p className="text-slate-700 mb-8 leading-relaxed">
                Have a question or need assistance? Fill out the form below and we'll get back to you 
                within 24 hours. We're here to help with enrollment, curriculum questions, or any other inquiries.
              </p>

              {isSubmitted && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                  <span className="text-green-800">Thank you! Your message has been sent successfully. We'll get back to you soon.</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name" className="text-sm font-semibold text-slate-700">Full Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="mt-2"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-sm font-semibold text-slate-700">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="mt-2"
                      placeholder="Enter your email address"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="phone" className="text-sm font-semibold text-slate-700">Phone Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="mt-2"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  <div>
                    <Label htmlFor="subject" className="text-sm font-semibold text-slate-700">Subject *</Label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="mt-2"
                      placeholder="What is this about?"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="message" className="text-sm font-semibold text-slate-700">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    className="mt-2 min-h-[120px]"
                    placeholder="Tell us how we can help you..."
                  />
                </div>

                <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white font-bold rounded-full py-3 text-lg">
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </Button>
              </form>
            </div>

            {/* Office Hours & Quick Info */}
            <div className="space-y-8">
              <Card className="bg-white border-2 border-primary/20">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-primary flex items-center">
                    <Clock className="w-6 h-6 mr-2" />
                    Office Hours
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {officeHours.map((schedule, index) => (
                      <div key={index} className="flex justify-between items-center py-2 border-b border-slate-100 last:border-b-0">
                        <span className="font-semibold text-slate-800">{schedule.day}</span>
                        <span className="text-slate-600">{schedule.hours}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-yellow-50 to-green-50 border-2 border-yellow-200">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-primary flex items-center">
                    <Heart className="w-6 h-6 mr-2" />
                    Why Choose Us?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                      <span className="text-slate-700">24/7 Support Available</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                      <span className="text-slate-700">Qualified Islamic Educators</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                      <span className="text-slate-700">Flexible Scheduling</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                      <span className="text-slate-700">Personalized Learning Plans</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-slate-700 max-w-3xl mx-auto">
              Find quick answers to common questions about our programs and services.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-2 gap-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="bg-slate-50 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-primary mb-3">{faq.question}</h3>
                  <p className="text-slate-700 leading-relaxed">{faq.answer}</p>
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
              Ready to Start Your Child's Islamic Journey?
            </h2>
            <p className="text-lg text-slate-700 mb-8 leading-relaxed">
              Don't wait to give your child the gift of Islamic education. 
              Contact us today to learn more about our programs or to schedule a free trial class.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-primary hover:bg-primary/90 text-white font-bold rounded-full py-4 px-8 text-lg" asChild>
                <Link to="/programs">Explore Programs</Link>
              </Button>
              <Button variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-white font-bold rounded-full py-4 px-8 text-lg" asChild>
                <Link to="/auth">Start Free Trial</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact; 