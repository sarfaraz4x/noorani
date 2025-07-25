import { Button } from "@/components/ui/button";
import { PhoneCall } from "lucide-react";

const Header = () => {
  return (
    <>
      {/* Top Thin Bar with Phone Number */}
      <div className="w-full bg-teal-600 text-white text-xs md:text-sm font-semibold h-7 md:h-8 shadow-sm z-50 relative">
        <div className="container mx-auto px-4 lg:px-6 h-full flex items-center">
          <span className="flex items-center gap-2">
            <PhoneCall className="w-4 h-4 md:w-5 md:h-5 text-white" />
            <a href="tel:+917461027503" className="hover:underline">+91 74610 27503</a>
          </span>
        </div>
      </div>
      <header className="sticky top-0 z-40 w-full bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 lg:px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2 drop-shadow-lg">
            <div className="w-16 h-16 flex items-center justify-center">
              <img src="/Untitled design (1)-modified (1).png" alt="Noorani Academy Logo" className="w-16 h-16 rounded-full object-cover border-4 border-yellow-200 shadow-lg bg-white" />
            </div>
            <div className="flex flex-col ml-1">
              <span className="font-black text-2xl text-primary tracking-tight leading-none drop-shadow-sm" style={{ fontFamily: 'Comic Sans MS, Comic Sans, cursive' }}>NOORANI</span>
              <span className="text-sm md:text-base text-yellow-600 font-semibold mt-0.5 tracking-[0.3em] uppercase leading-none" style={{ letterSpacing: '0.3em', fontFamily: 'Comic Sans MS, Comic Sans, cursive' }}>ACADEMY</span>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-10">
            <a href="#programs" className="text-sm font-semibold text-foreground hover:text-primary transition-colors duration-200 hover:scale-105">
              Programs
            </a>
            <a href="#curriculum" className="text-sm font-semibold text-foreground hover:text-primary transition-colors duration-200 hover:scale-105">
              Our Curriculum
            </a>
            <a href="/pricing" className="text-sm font-semibold text-foreground hover:text-primary transition-colors duration-200 hover:scale-105">
              Pricing
            </a>
            <a href="#about" className="text-sm font-semibold text-foreground hover:text-primary transition-colors duration-200 hover:scale-105">
              About
            </a>
            <a href="#contact" className="text-sm font-semibold text-foreground hover:text-primary transition-colors duration-200 hover:scale-105">
              Contact Us
            </a>
            <span className="text-sm font-semibold text-islamic-green cursor-pointer hover:text-islamic-green/80 transition-colors duration-200 hover:scale-105">
              العربية
            </span>
          </nav>

          {/* CTA Button */}
          <div className="flex items-center space-x-3">
            <Button variant="outline" size="lg" className="hidden md:inline-flex border-2 border-primary text-primary font-bold hover:bg-primary/10 transition-colors duration-200" asChild>
              <a href="/auth?login=true">Student Login</a>
            </Button>
            <Button variant="hero" size="lg" className="hidden md:inline-flex shadow-lg" asChild>
              <a href="/auth">Sign Up Now</a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden p-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;