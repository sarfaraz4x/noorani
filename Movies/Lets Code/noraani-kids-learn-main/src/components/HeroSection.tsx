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
      {/* Responsive hero images and text: stack vertically on mobile, float on desktop */}
      <div className="block md:hidden w-full flex flex-col items-center mb-4">
        <div className="flex w-full justify-between items-center mb-2">
          <img src={rightHeroImg} alt="Smiling girl" className="w-32 h-32 object-contain" style={{ background: 'none', boxShadow: 'none', border: 'none' }} />
          <img src={leftHeroImg} alt="Smiling boy" className="w-32 h-32 object-contain" style={{ background: 'none', boxShadow: 'none', border: 'none' }} />
        </div>
        {/* Centered text and CTA, no extra top padding on mobile */}
        <div className="w-full flex flex-col items-center justify-center text-center space-y-6">
          <div className="space-y-4 relative w-full">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-full max-w-sm h-40 bg-yellow-100 rounded-[60px] shadow-lg -z-10" style={{ filter: 'blur(2px)', opacity: 0.7 }}></div>
            <h1 className="text-3xl font-bold leading-tight" style={{ fontFamily: 'Comic Sans MS, Comic Sans, cursive' }}>
              <span className="text-foreground">Online</span>
              <br />
              <span className="text-primary">ISLAMIC</span>
              <br />
              <span className="text-muted-foreground text-xl">School for</span>
              <br />
              <span className="text-primary text-4xl">KIDS</span>
            </h1>
            <p className="text-base text-muted-foreground max-w-xs mx-auto">
              Shaping Young Hearts with Quran & Values.
            </p>
          </div>
          <div className="flex flex-col gap-3 w-full items-center">
            <Button variant="hero" size="lg" className="text-lg px-8 py-5 rounded-full font-extrabold shadow-xl w-full max-w-xs" asChild>
              <a href="/auth">Start Your Free Trial Today!</a>
            </Button>
          </div>
        </div>
      </div>
      {/* Desktop images and text */}
      <div className="hidden md:block absolute top-24 left-0 z-20 pointer-events-none select-none">
        <img src={rightHeroImg} alt="Smiling girl" className="w-72 h-72 md:w-[22rem] md:h-[22rem] object-contain" style={{ background: 'none', boxShadow: 'none', border: 'none' }} />
      </div>
      <div className="hidden md:block absolute top-24 right-0 z-20 pointer-events-none select-none">
        <img src={leftHeroImg} alt="Smiling boy" className="w-72 h-72 md:w-[22rem] md:h-[22rem] object-contain" style={{ background: 'none', boxShadow: 'none', border: 'none' }} />
      </div>
      <div className="hidden md:flex container mx-auto px-4 lg:px-6 relative z-10 flex-col items-center justify-center">
        {/* Centered text and CTA, moved higher for desktop */}
        <div className="w-full flex flex-col items-center justify-center text-center space-y-8 pt-8 pb-8" style={{ minHeight: '340px' }}>
          <div className="space-y-4 relative">
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-full max-w-lg h-52 bg-yellow-100 rounded-[60px] shadow-lg -z-10" style={{ filter: 'blur(2px)', opacity: 0.7 }}></div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight" style={{ fontFamily: 'Comic Sans MS, Comic Sans, cursive' }}>
                <span className="text-foreground">Online</span>
                <br />
                <span className="text-primary">ISLAMIC</span>
                <br />
                <span className="text-muted-foreground text-2xl md:text-3xl">School for</span>
                <br />
                <span className="text-primary text-5xl md:text-6xl lg:text-7xl">KIDS</span>
              </h1>
            <p className="text-lg text-muted-foreground max-w-md mx-auto">
                Shaping Young Hearts with Quran & Values.
              </p>
            </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" className="text-xl px-10 py-7 rounded-full font-extrabold shadow-xl" asChild>
                <a href="/auth">Start Your Free Trial Today!</a>
              </Button>
          </div>
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