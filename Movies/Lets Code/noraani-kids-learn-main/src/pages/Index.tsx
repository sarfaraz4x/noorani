import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import CurriculumHighlights from "@/components/CurriculumHighlights";
import AgeGroups from "@/components/AgeGroups";
import Footer from "@/components/Footer";
// import beeMascot from "@/assets/bee-mascot.jpg";
const beeMascot = '/bee-mascot-Photoroom-Picsart-AiImageEnhancer.png';

import { useEffect, useRef, useState } from 'react';
import { Users, Gamepad2, BookOpen, Handshake, Sparkles, MessageCircle, Users2, GraduationCap, CheckCircle2, PartyPopper } from "lucide-react";

const LearnWithAyaanAndMariam = () => (
  <section className="relative py-16 bg-gradient-to-b from-white via-yellow-50 to-pink-50">
    <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-10">
      {/* Girl image left */}
      <div className="flex-shrink-0 order-1 md:order-none mb-6 md:mb-0">
        <img src="/cartoon-muslim-girl-nura-a-cheerful-musl_3M9ky64SR6u4xu6oOJoOvA_tAuUlG9qTB2OLpQfF8prfA.jpeg" alt="Mariam cartoon" className="w-40 h-40 md:w-56 md:h-56 rounded-full object-cover border-4 border-yellow-200 bg-white shadow-lg" />
      </div>
      {/* Text center */}
      <div className="flex flex-col items-center md:items-center text-center md:text-center order-3 md:order-none">
        <h2 className="text-4xl md:text-5xl font-extrabold text-primary mb-4" style={{ fontFamily: 'Comic Sans MS, Comic Sans, cursive' }}>
          Learn with Ayaan & Mariam
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground max-w-lg mb-6">
          Meet your new learning buddies! Ayaan & Mariam make every lesson fun, interactive, and full of smiles. Join us for a journey of discovery, faith, and friendship.
        </p>
      </div>
      {/* Boy image right */}
      <div className="flex-shrink-0 order-2 md:order-none mb-6 md:mb-0">
        <img src="/a-charming-child-friendly-cartoon-illust_xn5OLAW7RgKHG6Lm1It5lg_gk1ihdTgSCyfg1K-CU35WA.jpeg" alt="Ayaan cartoon" className="w-40 h-40 md:w-56 md:h-56 rounded-full object-cover border-4 border-yellow-200 bg-white shadow-lg" />
      </div>
    </div>
  </section>
);

const LiveTeachersFunClasses = () => (
  <section className="relative py-16 bg-gradient-to-b from-yellow-50 via-white to-pink-50">
    <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-10">
      {/* Text content */}
      <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left mb-8 md:mb-0">
        <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-4" style={{ fontFamily: 'Comic Sans MS, Comic Sans, cursive' }}>
          Live Teachers. Fun Classes.
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground max-w-lg mb-6">
          Live, teacher-instructed learning for children. Our classes are interactive, engaging, and designed to make Islamic learning fun and memorable for every child.
        </p>
        <ul className="text-left text-base text-foreground space-y-2 mb-4">
          <li className="flex items-center gap-2"><Users2 className="h-5 w-5 text-primary" />Small group, interactive sessions</li>
          <li className="flex items-center gap-2"><GraduationCap className="h-5 w-5 text-primary" />Certified, caring Islamic educators</li>
          <li className="flex items-center gap-2"><CheckCircle2 className="h-5 w-5 text-primary" />Real-time feedback and encouragement</li>
          <li className="flex items-center gap-2"><PartyPopper className="h-5 w-5 text-primary" />Fun activities, stories, and games</li>
        </ul>
        <a href="#programs" className="inline-block mt-2 px-8 py-4 bg-primary text-white font-bold rounded-full shadow-lg hover:bg-primary/90 transition-colors text-lg" style={{ fontFamily: 'Comic Sans MS, Comic Sans, cursive' }}>
          Explore Our Programs
        </a>
      </div>
      {/* Illustration */}
      <div className="flex-1 flex items-center justify-center">
        {/* Improved TV Frame */}
        <div className="relative bg-teal-400 from-teal-400 to-teal-500 bg-gradient-to-br p-4 sm:p-5 rounded-3xl shadow-2xl border-4 border-teal-600 w-full max-w-lg">
          {/* Antennae */}
          <div className="absolute -top-14 left-1/3 w-3 h-14 bg-teal-600 rounded-t-full transform -rotate-12"></div>
          <div className="absolute -top-14 right-1/3 w-3 h-14 bg-teal-600 rounded-t-full transform rotate-12"></div>
          <div className="absolute -top-16 left-1/3 -ml-1.5 w-6 h-6 bg-yellow-400 border-2 border-yellow-500 rounded-full transform -rotate-12"></div>
          <div className="absolute -top-16 right-1/3 -mr-1.5 w-6 h-6 bg-yellow-400 border-2 border-yellow-500 rounded-full transform rotate-12"></div>
          {/* Screen */}
          <div className="bg-black rounded-xl overflow-hidden aspect-video shadow-inner">
            <iframe 
              className="w-full h-full"
              src="https://www.youtube.com/embed/mQwgJ2-9lVI?autoplay=0&rel=0"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          {/* TV Details */}
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-20 h-6 bg-teal-500 rounded-b-lg border-x-4 border-b-4 border-teal-600"></div>

        </div>
      </div>
    </div>
  </section>
);

const EveryClassCounts = () => {
  // Icon data for circular layout
  const icons = [
    { icon: Users, label: 'Live Teachers', bg: 'bg-orange-200' },
    { icon: Gamepad2, label: 'Fun Activities', bg: 'bg-blue-200' },
    { icon: BookOpen, label: 'Curriculum', bg: 'bg-green-200' },
    { icon: Handshake, label: 'Confidence', bg: 'bg-yellow-200' },
    { icon: Sparkles, label: 'Faith', bg: 'bg-purple-200' },
    { icon: MessageCircle, label: 'Communication', bg: 'bg-pink-200' },
  ];
  // Circle layout parameters
  const radius = 170; // px

  return (
    <section className="relative py-20 bg-gradient-to-b from-pink-50 via-white to-yellow-50">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-10">
        {/* Left: Bee and circular icons */}
        <div className="flex-1 flex flex-col items-center justify-center relative min-w-[340px] h-[340px] md:h-[400px]">
          {/* Central bee */}
          <div className="absolute left-1/2 top-1/2 z-10" style={{ transform: 'translate(-50%, -50%)' }}>
            <img src="/bee-mascot-Photoroom-Picsart-AiImageEnhancer.png" alt="Bee mascot" className="w-48 h-48 md:w-64 md:h-64 object-contain drop-shadow-xl" />
          </div>
          {/* Circular icons around bee */}
          {icons.map((item, i) => {
            const angle = (i / icons.length) * 2 * Math.PI;
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;
            return (
              <div
                key={item.label}
                className={`absolute flex flex-col items-center`}
                style={{
                  left: `calc(50% + ${x}px)` ,
                  top: `calc(50% + ${y}px)` ,
                  transform: 'translate(-50%, -50%)',
                }}
              >
                <div className={`w-14 h-14 rounded-full ${item.bg} flex items-center justify-center mb-1 shadow-md`}>
                  <item.icon className="h-8 w-8 text-slate-700" />
                </div>
                <span className="text-xs font-bold text-slate-700 whitespace-nowrap">{item.label}</span>
              </div>
            );
          })}
        </div>
        {/* Right: Text content */}
        <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-extrabold text-primary mb-2" style={{ fontFamily: 'Comic Sans MS, Comic Sans, cursive' }}>
            Every Class Counts
          </h2>
          <p className="text-xl font-bold text-slate-700 mb-4">Your child grows in faith, confidence, and understanding with every class.</p>
          <p className="text-base text-muted-foreground mb-6 max-w-md">
            Our approach ensures that every lesson is meaningful, memorable, and fun!
          </p>
          <ul className="text-left text-base text-foreground space-y-2 mb-4">
            <li className="flex items-center gap-2"><Users2 className="h-5 w-5 text-primary" />Small group, interactive sessions</li>
            <li className="flex items-center gap-2"><GraduationCap className="h-5 w-5 text-primary" />Certified, caring Islamic educators</li>
            <li className="flex items-center gap-2"><CheckCircle2 className="h-5 w-5 text-primary" />Real-time feedback and encouragement</li>
            <li className="flex items-center gap-2"><PartyPopper className="h-5 w-5 text-primary" />Fun activities, stories, and games</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

const BeePath = () => {
  // Bee follows the path with scroll, and floats up/down at rest
  const beeRef = useRef(null);
  const pathRef = useRef(null);
  const [beePos, setBeePos] = useState({ x: 0, y: 0 });
  const [isScrolling, setIsScrolling] = useState(false);
  const [scrollTimeout, setScrollTimeout] = useState(null);
  const [restAnim, setRestAnim] = useState(0);

  useEffect(() => {
    const path = pathRef.current;
    if (!path) return;
    const totalLength = path.getTotalLength();
    const updateBee = () => {
      const scrollY = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const progress = Math.min(1, scrollY / (docHeight || 1));
      const length = totalLength * progress;
      const point = path.getPointAtLength(length);
      setBeePos({ x: point.x, y: point.y });
    };
    window.addEventListener('scroll', updateBee);
    updateBee();
    return () => window.removeEventListener('scroll', updateBee);
  }, []);

  // Gentle up/down floating effect at rest
  useEffect(() => {
    let animationFrame;
    let t = 0;
    const floatBee = () => {
      setRestAnim(t);
      t += 0.03;
      animationFrame = requestAnimationFrame(floatBee);
    };
    if (!isScrolling) {
      animationFrame = requestAnimationFrame(floatBee);
    }
    return () => cancelAnimationFrame(animationFrame);
  }, [isScrolling]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(true);
      if (scrollTimeout) clearTimeout(scrollTimeout);
      setScrollTimeout(setTimeout(() => setIsScrolling(false), 200));
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeout) clearTimeout(scrollTimeout);
    };
  }, [scrollTimeout]);

  // Calculate bee position with floating effect when at rest
  const restY = beePos.y + Math.sin(restAnim) * 12;

  return (
    <div className="pointer-events-none select-none fixed top-0 left-0 w-full h-full z-10" style={{ pointerEvents: 'none' }}>
      <svg width="100vw" height="100vh" viewBox="0 0 1440 2000" fill="none" className="absolute top-0 left-0 w-full h-full" style={{ opacity: 0.45 }}>
        <path
          ref={pathRef}
          d="M 100 10 Q 400 120 700 40 Q 1100 -40 1300 200 Q 900 500 400 400 Q 100 600 700 800 Q 1200 1000 900 1300 Q 600 1600 1300 1800"
          stroke="#FACC15"
          strokeWidth="4"
          strokeDasharray="8 12"
          fill="none"
        />
      </svg>
      <img
        ref={beeRef}
        src={beeMascot}
        alt="Bee mascot"
        style={{
          position: 'absolute',
          left: `calc(${beePos.x}px - 32px)` ,
          top: `calc(${isScrolling ? beePos.y : restY}px - 32px)` ,
          width: 64,
          height: 64,
          transition: 'left 0.2s linear, top 0.2s linear',
          zIndex: 20,
          filter: 'drop-shadow(0 2px 8px #facc15cc)'
        }}
      />
    </div>
  );
};

const Index = () => {
  // Ensure WhatsApp button stays above other content
  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `.whatsapp-float-btn { z-index: 9999; }`;
    document.head.appendChild(style);
    return () => { document.head.removeChild(style); };
  }, []);

  // WhatsApp CTA tooltip state
  const [showWhatsAppTip, setShowWhatsAppTip] = useState(false);
  useEffect(() => {
    const interval = setInterval(() => {
      setShowWhatsAppTip((prev) => !prev);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-background relative overflow-x-clip">
      <BeePath />
      <Header />
      <HeroSection />
      <LearnWithAyaanAndMariam />
      <LiveTeachersFunClasses />
      <WhyChooseUs />
      <CurriculumHighlights />
      <AgeGroups />
      <EveryClassCounts />
      <Footer />
      {/* WhatsApp Floating Button with bounce and tooltip */}
      <div className="fixed left-4 bottom-4 z-50 flex flex-col items-center">
        {/* Tooltip CTA */}
        {showWhatsAppTip && (
          <div className="absolute -top-4 left-16 px-4 py-2 rounded-lg bg-green-600 text-white text-sm font-semibold shadow-lg animate-fadein whitespace-nowrap" style={{ minWidth: '160px' }}>
            Chat with us on WhatsApp!
          </div>
        )}
        <a
          href="https://wa.me/917461027503?text=Hi%2C%20I%20would%20like%20more%20details%20about%20Noorani%20Academy."
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-float-btn bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg flex items-center justify-center w-16 h-16 text-4xl transition-colors animate-bounce-cta"
          aria-label="Chat on WhatsApp"
        >
          {/* WhatsApp SVG icon */}
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="36" height="36" fill="currentColor">
            <path d="M16 3C9.373 3 4 8.373 4 15c0 2.385.832 4.584 2.236 6.393L4 29l7.828-2.05C13.416 27.168 14.684 27.5 16 27.5c6.627 0 12-5.373 12-12S22.627 3 16 3zm0 22c-1.18 0-2.336-.207-3.432-.613l-.244-.09-4.65 1.217 1.24-4.527-.16-.234C7.22 18.13 6.5 16.6 6.5 15c0-5.238 4.262-9.5 9.5-9.5s9.5 4.262 9.5 9.5-4.262 9.5-9.5 9.5zm5.07-7.13c-.277-.139-1.637-.809-1.89-.902-.253-.093-.437-.139-.62.14-.184.277-.713.902-.874 1.088-.16.185-.32.208-.597.07-.277-.139-1.17-.431-2.23-1.375-.824-.735-1.38-1.64-1.542-1.917-.16-.277-.017-.427.122-.566.126-.125.277-.32.416-.48.139-.16.185-.277.277-.462.093-.185.047-.347-.023-.486-.07-.139-.62-1.497-.85-2.05-.224-.539-.453-.466-.62-.475l-.527-.009c-.17 0-.446.064-.68.3-.233.233-.89.87-.89 2.122s.911 2.463 1.038 2.635c.126.17 1.793 2.74 4.35 3.736.608.209 1.082.334 1.452.427.61.155 1.165.133 1.604.081.489-.058 1.637-.668 1.87-1.312.232-.644.232-1.196.162-1.312-.07-.116-.253-.185-.53-.324z"/>
          </svg>
        </a>
      </div>
      {/* WhatsApp bounce and fadein animation */}
      <style>{`
        @keyframes bounceCta {
          0%, 100% { transform: translateY(0); }
          20% { transform: translateY(-12px); }
          40% { transform: translateY(0); }
          60% { transform: translateY(-8px); }
          80% { transform: translateY(0); }
        }
        .animate-bounce-cta {
          animation: bounceCta 1.2s infinite;
        }
        @keyframes fadein {
          0% { opacity: 0; transform: translateY(10px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fadein {
          animation: fadein 0.5s;
        }
      `}</style>
    </div>
  );
};

export default Index;
