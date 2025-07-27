import { Button } from "@/components/ui/button";
import beeMascot from "@/assets/bee-mascot.jpg";
import kidsLearning from "@/assets/kids-learning-enhanced.jpg";
import leftHeroImg from '/1.1.png';
import rightHeroImg from '/1.2.png';

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-warm-cream via-background to-soft-pink pt-4 md:pt-6 pb-20 lg:pb-32">
      {/* Creative background shapes */}
      {/* Large blurred circles/blobs for desktop */}
      <div className="hidden md:block">
        <div className="absolute -top-32 -left-32 w-[420px] h-[420px] bg-teal-200 rounded-full opacity-40 blur-2xl z-0" />
        <div className="absolute top-1/3 -right-40 w-[340px] h-[340px] bg-yellow-200 rounded-full opacity-30 blur-2xl z-0" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[220px] bg-pink-200 rounded-full opacity-30 blur-3xl z-0" />
        <div className="absolute top-1/2 left-1/4 w-[180px] h-[180px] bg-blue-200 rounded-full opacity-20 blur-2xl z-0" />
      </div>
      {/* Mobile: smaller, less intrusive shapes */}
      <div className="md:hidden">
        <div className="absolute -top-16 -left-16 w-60 h-60 bg-teal-200 rounded-full opacity-30 blur-xl z-0" />
        <div className="absolute top-1/2 -right-20 w-40 h-40 bg-yellow-200 rounded-full opacity-20 blur-xl z-0" />
      </div>
      {/* Responsive hero images and text: always horizontal */}
      <div className="relative z-10 container mx-auto px-4 flex flex-row items-center justify-center gap-2 md:gap-8 lg:gap-16">
        {/* Left image */}
        <div className="flex-shrink-0 flex items-center justify-center">
          <img src={rightHeroImg} alt="Smiling girl" className="w-20 h-20 xs:w-24 xs:h-24 sm:w-32 sm:h-32 md:w-56 md:h-56 lg:w-[22rem] lg:h-[22rem] object-contain" style={{ background: 'none', boxShadow: 'none', border: 'none' }} />
        </div>
        {/* Centered text and CTA */}
        <div className="flex flex-col items-center text-center flex-1 max-w-xs xs:max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl mx-2 md:mx-0">
          <div className="space-y-3 md:space-y-4 relative w-full">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-full max-w-xs xs:max-w-sm sm:max-w-md md:max-w-lg h-20 xs:h-28 sm:h-36 md:h-52 bg-yellow-100 rounded-[60px] shadow-lg -z-10" style={{ filter: 'blur(2px)', opacity: 0.7 }}></div>
            <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight" style={{ fontFamily: "'Baloo 2', 'Nunito', Arial, sans-serif" }}>
              <span className="text-foreground">Online</span>
              <br />
              <span className="text-primary">ISLAMIC</span>
              <br />
              <span className="text-muted-foreground text-lg xs:text-xl sm:text-2xl md:text-3xl">School for</span>
              <br />
              <span className="text-primary text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl">KIDS</span>
            </h1>
            <p className="text-sm xs:text-base sm:text-lg text-muted-foreground max-w-xs xs:max-w-sm sm:max-w-md mx-auto">
              Shaping Young Hearts with Quran & Values.
            </p>
          </div>
          <div className="flex flex-col gap-3 w-full items-center mt-2">
            <Button variant="hero" size="lg" className="text-base xs:text-lg sm:text-xl px-6 xs:px-8 sm:px-10 py-4 xs:py-5 rounded-full font-extrabold shadow-xl w-full max-w-xs sm:max-w-sm" asChild>
              <a href="/auth">Start Your Free Trial Today!</a>
            </Button>
          </div>
        </div>
        {/* Right image */}
        <div className="flex-shrink-0 flex items-center justify-center">
          <img src={leftHeroImg} alt="Smiling boy" className="w-20 h-20 xs:w-24 xs:h-24 sm:w-32 sm:h-32 md:w-56 md:h-56 lg:w-[22rem] lg:h-[22rem] object-contain" style={{ background: 'none', boxShadow: 'none', border: 'none' }} />
        </div>
      </div>
      {/* Wavy divider at the bottom */}
      <svg className="absolute bottom-0 left-0 w-full h-16" viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill="#fff" fillOpacity="1" d="M0,32L60,37.3C120,43,240,53,360,69.3C480,85,600,107,720,101.3C840,96,960,64,1080,53.3C1200,43,1320,53,1380,58.7L1440,64L1440,160L1380,160C1320,160,1200,160,1080,160C960,160,840,160,720,160C600,160,480,160,360,160C240,160,120,160,60,160L0,160Z"></path>
      </svg>
      <style>{`
        @keyframes floatBee {
          0%, 100% { transform: translateY(0) scale(1.05); }
          50% { transform: translateY(-18px) scale(1.12); }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;