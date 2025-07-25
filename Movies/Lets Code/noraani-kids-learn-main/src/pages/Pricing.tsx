import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const pricingPlans = [
  { title: "Three Classes Per Week", price: 799, per: "month", duration: "30 minutes long" },
  { title: "Four Classes Per Week", price: 999, per: "month", duration: "30 minutes long", best: true },
  { title: "Five Classes Per Week", price: 1299, per: "month", duration: "30 minutes long" },
  { title: "Six Classes Per Week", price: 1499, per: "month", duration: "30 minutes long" },
];

export default function Pricing() {
  const [showNewsletter, setShowNewsletter] = useState(true);
  const [newsletterSent, setNewsletterSent] = useState(false);
  const [form, setForm] = useState({ email: '', name: '' });

  function handleNewsletterSubmit(e) {
    e.preventDefault();
    setNewsletterSent(true);
    setTimeout(() => setShowNewsletter(false), 1800);
  }

  return (
    <div className="min-h-screen bg-[#f9f7f3] flex flex-col">
      <Header />
      {/* Newsletter Modal */}
      {showNewsletter && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40" style={{backdropFilter: 'blur(2px)'}}>
          <div className="bg-yellow-100 rounded-2xl shadow-2xl p-0 max-w-md w-full relative flex flex-col items-center border-4 border-yellow-200">
            <button onClick={() => setShowNewsletter(false)} className="absolute top-2 right-2 text-2xl font-bold text-yellow-600 hover:text-yellow-800">×</button>
            <div className="flex flex-col items-center w-full p-6 pt-8">
              <div className="flex items-center justify-center gap-3 mb-2">
                <img src="/Untitled design (1)-modified (1).png" alt="Noorani Academy Logo" className="w-12 h-12 rounded-full border-2 border-yellow-300 bg-white" />
                <span className="font-black text-lg text-yellow-700 tracking-tight">NOORANI ACADEMY</span>
              </div>
              <img src="/a-charming-child-friendly-cartoon-illust_Hqu_naeDQ9iUAXuwKSQpGw_gk1ihdTgSCyfg1K-CU35WA.jpeg" alt="Newsletter" className="w-24 h-24 rounded-full mb-2 border-2 border-yellow-200" />
              <h3 className="text-xl font-bold text-yellow-700 mb-2">Join Our Newsletter</h3>
              {!newsletterSent ? (
                <form className="flex flex-col gap-2 w-full" onSubmit={handleNewsletterSubmit}>
                  <label className="text-sm font-semibold text-yellow-800">Email Address *</label>
                  <input type="email" required value={form.email} onChange={e => setForm(f => ({...f, email: e.target.value}))} className="rounded px-3 py-2 border border-yellow-300 focus:outline-none" placeholder="Email" />
                  <label className="text-sm font-semibold text-yellow-800">Name</label>
                  <input type="text" value={form.name} onChange={e => setForm(f => ({...f, name: e.target.value}))} className="rounded px-3 py-2 border border-yellow-300 focus:outline-none" placeholder="Name" />
                  <Button className="mt-2 bg-yellow-500 hover:bg-yellow-600 text-white font-bold rounded shadow">Send</Button>
                </form>
              ) : (
                <div className="text-green-700 font-bold text-lg py-6">Thank you for subscribing!</div>
              )}
            </div>
          </div>
        </div>
      )}
      <main className="flex-1">
        <section className="pt-16 pb-8 bg-gradient-to-b from-yellow-50 to-[#f9f7f3] relative">
          <div className="container mx-auto px-4">
            {/* Two-column intro */}
            <div className="grid md:grid-cols-2 gap-8 mb-8 items-center">
              <div>
                <h1 className="text-5xl font-extrabold text-primary mb-2" style={{ fontFamily: 'Comic Sans MS, Comic Sans, cursive' }}>Pricing</h1>
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
            {/* Discounts Section */}
            <div className="mb-16">
              <h2 className="text-4xl font-extrabold text-primary mb-4" style={{ fontFamily: 'Comic Sans MS, Comic Sans, cursive' }}>Discounts</h2>
              <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
                <div className="bg-white rounded-2xl shadow p-6 flex-1 min-w-[260px] text-center">
                  <h5 className="text-lg font-bold text-primary mb-2">Family Discount</h5>
                  <p className="text-slate-700 mb-2">Enroll 2 or more children and get <span className="font-bold text-green-600">10% off</span> your monthly tuition for each child.</p>
                  <Button className="bg-primary hover:bg-primary/90 text-white font-bold rounded-full py-2 mt-2">Sign Up Now</Button>
                </div>
                <div className="bg-white rounded-2xl shadow p-6 flex-1 min-w-[260px] text-center">
                  <h5 className="text-lg font-bold text-primary mb-2">Group Sibling Classes</h5>
                  <p className="text-slate-700 mb-2">Start a Sibling Class and each student after the first can get <span className="font-bold text-green-600">50% off</span> monthly tuition.</p>
                  <Button className="bg-primary hover:bg-primary/90 text-white font-bold rounded-full py-2 mt-2">Sign Up Now</Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
} 