import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-8 lg:py-12">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Join Now Section - More Compact */}
        <div className="text-center mb-8 lg:mb-12 bg-primary/10 rounded-2xl p-6 lg:p-8">
          <div className="max-w-xl mx-auto">
            <h2 className="text-2xl lg:text-3xl font-bold text-primary mb-3">
              Join Now
            </h2>
            <p className="text-sm lg:text-base text-white mb-6 leading-relaxed">
              Don't Delay Your Child's Islamic Education!<br />
              Compassionate Teaching. Proven Results.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button variant="hero" size="lg" className="px-6 py-3 text-sm" asChild>
                <Link to="/auth">Start Free Trial</Link>
              </Button>
              <Button variant="outline" size="lg" className="px-6 py-3 text-sm border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground" asChild>
                <Link to="/pricing">View Pricing</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Main Footer Content - Compact Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-8">
          {/* Logo and Description */}
          <div className="col-span-2 lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">N</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg text-background">NOORANI</span>
                <span className="text-xs text-background/70 -mt-1">ACADEMY</span>
              </div>
            </div>
            <p className="text-background/70 mb-4 leading-relaxed text-sm">
              Nurturing young hearts with Islamic knowledge, values, and character development through interactive online learning.
            </p>
            
            {/* Social Media */}
            <div className="flex space-x-3">
              <div className="w-8 h-8 bg-background/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors cursor-pointer">
                <span className="text-background text-sm">📱</span>
              </div>
              <div className="w-8 h-8 bg-background/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors cursor-pointer">
                <span className="text-background text-sm">📺</span>
              </div>
              <div className="w-8 h-8 bg-background/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors cursor-pointer">
                <span className="text-background text-sm">💬</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-base text-background mb-3">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#programs" className="text-background/70 hover:text-primary transition-colors text-sm">Programs</a></li>
              <li><Link to="/curriculum" className="text-background/70 hover:text-primary transition-colors text-sm">Curriculum</Link></li>
              <li><Link to="/pricing" className="text-background/70 hover:text-primary transition-colors text-sm">Pricing</Link></li>
              <li><Link to="/about" className="text-background/70 hover:text-primary transition-colors text-sm">About Us</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-base text-background mb-3">Contact</h3>
            <div className="space-y-2 text-background/70 text-sm">
              <p>📧 info@noraaniacademy.com</p>
              <p>📞 +91 98765 43210</p>
              <p>🕐 24/7 Support</p>
              <div className="pt-2">
                <p className="text-islamic-green font-semibold cursor-pointer hover:text-islamic-green/80 text-sm">
                  العربية - Switch Language
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar - More Compact */}
        <div className="border-t border-background/20 pt-4 lg:pt-6 text-center text-background/60">
          <p className="text-sm">&copy; 2024 Noorani Academy. All rights reserved. Made with ❤️ for the Ummah.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;