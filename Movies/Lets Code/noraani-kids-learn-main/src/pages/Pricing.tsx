import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";

const pricingPlans = [
  { title: "Three Classes Per Week", price: 799, per: "month", duration: "30 minutes long" },
  { title: "Four Classes Per Week", price: 999, per: "month", duration: "30 minutes long", best: true },
  { title: "Five Classes Per Week", price: 1299, per: "month", duration: "30 minutes long" },
  { title: "Six Classes Per Week", price: 1499, per: "month", duration: "30 minutes long" },
];

export default function Pricing() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#f9f7f3] flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="pt-16 pb-8 bg-gradient-to-b from-yellow-50 to-[#f9f7f3] relative">
          <div className="container mx-auto px-4">
            {/* Two-column intro */}
            <div className="grid md:grid-cols-2 gap-8 mb-8 items-center">
              <div>
                <h1
                  className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
                  style={{ fontFamily: "'Fredoka', sans-serif" }}
                >
                  Pricing
                </h1>
                <p className="text-lg text-slate-700 mb-4 max-w-xl">Find out more about our classes pricing. Simple and Affordable for all.</p>
                <ul className="list-disc pl-5 text-slate-700 mb-2">
                  <li>SELECT YOUR LEARNING PLAN</li>
                  <li>NO REGISTRATION FEE</li>
                  <li>Learning the Holy Quran is <span className="font-bold text-primary">PRICELESS!</span></li>
                </ul>
              </div>
              <div className="bg-white/80 rounded-2xl p-6 shadow flex flex-col gap-2">
                <h3 className="text-xl font-bold text-primary mb-2">NO REGISTRATION FEE</h3>
                <p className="text-slate-700">There are no setup charges and no registration fees. You just pay for the classes you enroll in. Start your child's learning at any time and enjoy flexible scheduling.</p>
              </div>
            </div>
            {/* Pricing Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {pricingPlans.map((plan, i) => (
                <div key={i} className={`bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center border-2 ${plan.best ? 'border-primary' : 'border-transparent'} relative`}>
                  {plan.best && <span className="absolute top-2 right-2 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">Most Popular</span>}
                  <h3 className="text-xl font-bold text-primary mb-2 text-center">{plan.title}</h3>
                  <div className="flex items-end gap-2 mb-2">
                    <span className="text-2xl font-bold text-orange-600">Rs {plan.price}</span>
                  </div>
                  <span className="text-xs text-slate-500 mb-2 uppercase tracking-wide">PER {plan.per.toUpperCase()}</span>
                  <span className="text-sm text-slate-700 mb-4">{plan.duration}</span>
                  <Button className="w-full bg-primary hover:bg-primary/90 text-white font-bold rounded-full py-3 mt-auto">Sign Up Now</Button>
                </div>
              ))}
            </div>
            {/* Family Plan */}
            <div className="flex flex-col items-center mb-12">
              <div className="bg-white rounded-2xl shadow p-6 w-full max-w-md text-center">
                <h4 className="text-lg font-bold text-primary mb-2">Family Plans</h4>
                <p className="text-slate-700 mb-2">Enroll in classes together and enjoy <span className="font-bold text-green-600">30% off</span> for each additional child after the first two, up to a total of five children.</p>
                <Button className="bg-primary hover:bg-primary/90 text-white font-bold rounded-full py-3 mt-2">Sign Up Now</Button>
              </div>
            </div>

          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
} 