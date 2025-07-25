import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Join Now Section */}
        <div className="text-center mb-16 bg-primary/10 rounded-3xl p-12">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Join Now
            </h2>
            <p className="text-lg text-white mb-8 leading-relaxed">
              Don't Delay Your Child's Islamic Education!<br />
              Compassionate Teaching. Proven Results. Bright Future for the Ummah.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" className="px-8 py-6">
                Start Free Trial
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-6 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                View Pricing
              </Button>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">N</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xl text-background">NOORANI</span>
                <span className="text-sm text-background/70 -mt-1">ACADEMY</span>
              </div>
            </div>
            <p className="text-background/70 mb-6 leading-relaxed">
              Nurturing young hearts with Islamic knowledge, values, and character development through interactive online learning.
            </p>
            
            {/* Social Media */}
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors cursor-pointer">
                <span className="text-background">📱</span>
              </div>
              <div className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors cursor-pointer">
                <span className="text-background">📺</span>
              </div>
              <div className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors cursor-pointer">
                <span className="text-background">💬</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg text-background mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#programs" className="text-background/70 hover:text-primary transition-colors">Programs</a></li>
              <li><a href="#curriculum" className="text-background/70 hover:text-primary transition-colors">Curriculum</a></li>
              <li><a href="#pricing" className="text-background/70 hover:text-primary transition-colors">Pricing</a></li>
              <li><a href="#about" className="text-background/70 hover:text-primary transition-colors">About Us</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg text-background mb-4">Contact</h3>
            <div className="space-y-3 text-background/70">
              <p>📧 info@noraaniacademy.com</p>
              <p>📞 +91 98765 43210</p>
              <p>🕐 24/7 Support</p>
              <div className="pt-4">
                <p className="text-islamic-green font-semibold cursor-pointer hover:text-islamic-green/80">
                  العربية - Switch Language
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 pt-8 text-center text-background/60">
          <p>&copy; 2024 Noorani Academy. All rights reserved. Made with ❤️ for the Ummah.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;