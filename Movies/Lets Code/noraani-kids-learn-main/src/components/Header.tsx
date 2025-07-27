import { Button } from "@/components/ui/button";
import { PhoneCall, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

const navLinks = [
  { to: "/programs", label: "Programs" },
  { to: "/curriculum", label: "Our Curriculum" },
  { to: "/pricing", label: "Pricing" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact Us" },
];

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

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
          <Link to="/" className="flex items-center space-x-2 drop-shadow-lg hover:scale-105 transition-transform duration-200" onClick={closeMobileMenu}>
            <div className="w-16 h-16 flex items-center justify-center">
              <img src="/Untitled design (1)-modified (1).png" alt="Noorani Academy Logo" className="w-16 h-16 rounded-full object-cover border-4 border-yellow-200 shadow-lg bg-white" />
            </div>
            <div className="flex flex-col ml-1">
              <span className="font-black text-2xl text-primary tracking-tight leading-none drop-shadow-sm" style={{ fontFamily: 'Comic Sans MS, Comic Sans, cursive' }}>NOORANI</span>
              <span className="text-sm md:text-base text-yellow-600 font-semibold mt-0.5 tracking-[0.3em] uppercase leading-none" style={{ letterSpacing: '0.3em', fontFamily: 'Comic Sans MS, Comic Sans, cursive' }}>ACADEMY</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-10">
            {navLinks.map(link => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-sm font-semibold transition-colors duration-200 hover:text-primary hover:scale-105 ${location.pathname === link.to ? 'text-primary font-bold' : 'text-foreground'}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            <Button variant="outline" size="lg" className="border-2 border-primary text-primary font-bold hover:bg-primary/10 transition-colors duration-200" asChild>
              <a href="/auth?login=true">Student Login</a>
            </Button>
            <Button variant="hero" size="lg" className="shadow-lg" asChild>
              <a href="/auth">Sign Up Now</a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button 
            className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation Menu - Compact and Card-like */}
        {isMobileMenuOpen && (
          <div className="lg:hidden fixed top-0 left-0 w-full h-full flex items-start justify-center z-50 bg-black/30">
            <div className="relative mt-6 w-full max-w-xs bg-background rounded-2xl shadow-2xl border border-border p-4 mx-2 animate-fadein">
              {/* Close button always visible */}
              <button
                className="absolute top-2 right-2 p-2 text-foreground hover:text-primary transition-colors z-10"
                onClick={closeMobileMenu}
                aria-label="Close mobile menu"
              >
                <X className="w-6 h-6" />
              </button>
              <nav className="flex flex-col space-y-2 pt-2 pb-2">
                {navLinks.map(link => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className={`block text-base font-semibold transition-colors duration-200 py-1 ${location.pathname === link.to ? 'text-primary font-bold' : 'text-foreground'} hover:text-primary`}
                    onClick={closeMobileMenu}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
              {/* Mobile CTA Buttons - Compact */}
              <div className="flex flex-col space-y-2 pt-2 border-t border-border mt-2">
                <Button variant="outline" size="sm" className="border-2 border-primary text-primary font-bold hover:bg-primary/10 transition-colors duration-200 text-sm py-2" asChild>
                  <a href="/auth?login=true" onClick={closeMobileMenu}>Student Login</a>
                </Button>
                <Button variant="hero" size="sm" className="shadow-lg text-sm py-2" asChild>
                  <a href="/auth" onClick={closeMobileMenu}>Sign Up Now</a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;