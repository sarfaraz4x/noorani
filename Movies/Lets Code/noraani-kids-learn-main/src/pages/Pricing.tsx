import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const courses = [
  {
    title: "Basic Tajweed Course",
    duration: "3 Months",
    monthlyFee: 699,
    offerFee: 1499,
    offerSaving: 598,
    classDays: "Saturday, Sunday, Monday",
    description: "Master the correct pronunciation and rules of Quranic recitation. This foundational course covers Makharij (articulation points), Sifaat (characteristics of letters), and essential Tajweed rules — giving your child the confidence to recite the Quran beautifully and accurately.",
    highlights: ["Makharij al-Huroof", "Noon & Meem rules", "Madd (elongation) rules", "Live correction by expert teacher"],
    syllabus: [],
    note: "",
    best: false,
  },
  {
    title: "Basic Urdu Course",
    duration: "3 Months",
    monthlyFee: 699,
    offerFee: 1499,
    offerSaving: 598,
    classDays: "Tuesday, Wednesday, Thursday",
    description: "A structured introduction to Urdu reading and writing for young learners. Students will learn to recognise Urdu alphabets, form words, and read short sentences — building a strong literacy foundation in one of the most widely spoken Islamic languages.",
    highlights: ["Urdu alphabet & harakat", "Word formation & reading", "Short sentence practice", "Fun interactive exercises"],
    syllabus: [],
    note: "",
    best: false,
  },
  {
    title: "Amma Para Tafseer",
    duration: "6 Months",
    monthlyFee: 699,
    offerFee: 1499,
    offerSaving: 598,
    classDays: "Sunday, Monday, Tuesday",
    description: "An in-depth exploration of the 30th Juz (Amma Para) of the Holy Quran. Students learn the meaning, context, and lessons of each surah — developing a deep understanding of Allah's words and strengthening their connection with the Quran beyond mere recitation.",
    highlights: ["Tafseer of all Surahs in Juz Amma", "Vocabulary & word meanings", "Lessons & moral values", "Age-appropriate explanations"],
    syllabus: [],
    note: "",
    best: true,
  },
  {
    title: "Short Alima Course",
    duration: "3 Years",
    monthlyFee: 749,
    offerFee: 1599,
    offerSaving: 648,
    classDays: "",
    description: "A comprehensive Islamic scholarship program designed for dedicated female students. Covering classical Islamic sciences over 3 years and 6 semesters, this course nurtures well-rounded Islamic scholars grounded in Quran, Hadith, Fiqh, and Arabic.",
    highlights: [],
    syllabus: [
      "Aquedah",
      "Fiqh (Deeni Masail) + Usool e Fiqh",
      "Hadis + Usool e Hadis",
      "Seerat",
      "Tarbiyah (Akhlaqkyat)",
      "Nahu (Arabic Grammar)",
      "Sarf (Arabic Grammar)",
      "Arabic Language",
      "Tafseer + Usool e Tafseer",
    ],
    note: "3 years = 6 semesters, approximately 5 subjects per semester.",
    best: false,
  },
];

export default function Pricing() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#f9f7f3] flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="pt-16 pb-8 bg-gradient-to-b from-yellow-50 to-[#f9f7f3]">
          <div className="container mx-auto px-4">

            {/* Intro */}
            <div className="grid md:grid-cols-2 gap-8 mb-10 items-center">
              <div>
                <h1
                  className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
                  style={{ fontFamily: "'Fredoka', sans-serif" }}
                >
                  Our Courses &amp; Pricing
                </h1>
                <p className="text-lg text-slate-700 mb-4 max-w-xl">Simple, affordable pricing for quality Islamic education. No hidden fees, no registration charges.</p>
                <ul className="list-disc pl-5 text-slate-700 mb-2 space-y-1">
                  <li>Select your course and learning plan</li>
                  <li>No registration fee</li>
                  <li>Special 3-month bundle offers available</li>
                  <li>Learning the Holy Quran is <span className="font-bold text-primary">PRICELESS!</span></li>
                </ul>
              </div>
              <div className="bg-white/80 rounded-2xl p-6 shadow flex flex-col gap-2">
                <h3 className="text-xl font-bold text-primary mb-2">NO REGISTRATION FEE</h3>
                <p className="text-slate-700">There are no setup charges and no registration fees. You just pay for the course you enroll in. Start your child's learning at any time and enjoy flexible scheduling.</p>
              </div>
            </div>

            {/* Course Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6 mb-12">
              {courses.map((course, i) => (
                <div
                  key={i}
                  className={`bg-white rounded-2xl shadow-lg p-6 flex flex-col border-2 relative ${course.best ? "border-primary" : "border-transparent"}`}
                >
                  {course.best && (
                    <span className="absolute top-3 right-3 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">
                      Most Popular
                    </span>
                  )}

                  {/* Title & Duration */}
                  <h3 className="text-lg font-bold text-primary mb-1 pr-20">{course.title}</h3>
                  <span className="text-xs font-semibold text-amber-700 bg-amber-50 rounded-full px-3 py-0.5 mb-4 w-fit">
                    {course.duration}
                  </span>

                  {/* Pricing */}
                  <div className="bg-[#f9f7f3] rounded-xl p-4 mb-4 space-y-2">
                    <div className="flex items-baseline gap-1">
                      <span className="text-2xl font-bold text-slate-800">Rs. {course.monthlyFee}</span>
                      <span className="text-sm text-slate-500">/ month</span>
                    </div>
                    <div className="border-t border-dashed border-slate-200 pt-2">
                      <p className="text-sm font-semibold text-green-700">
                        3-Month Bundle: Rs. {course.offerFee}
                      </p>
                      <p className="text-xs text-green-600">Save Rs. {course.offerSaving}!</p>
                    </div>
                  </div>

                  {/* Description */}
                  {course.description && (
                    <p className="text-sm text-slate-600 leading-relaxed mb-4">{course.description}</p>
                  )}

                  {/* Highlights */}
                  {course.highlights.length > 0 && (
                    <ul className="space-y-1 mb-4">
                      {course.highlights.map((h, j) => (
                        <li key={j} className="text-sm text-slate-700 flex items-start gap-2">
                          <span className="text-primary mt-0.5">✓</span>
                          {h}
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Class Days */}
                  {course.classDays && (
                    <div className="mb-4">
                      <p className="text-xs text-slate-500 uppercase tracking-wide mb-1">Class Days</p>
                      <p className="text-sm font-medium text-slate-700">{course.classDays}</p>
                    </div>
                  )}

                  {/* Syllabus (for Alima course) */}
                  {course.syllabus.length > 0 && (
                    <div className="mb-4">
                      <p className="text-xs text-slate-500 uppercase tracking-wide mb-2">Syllabus</p>
                      <ul className="space-y-1">
                        {course.syllabus.map((item, j) => (
                          <li key={j} className="text-sm text-slate-700 flex items-start gap-2">
                            <span className="text-primary mt-0.5">✓</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Note */}
                  {course.note && (
                    <p className="text-xs text-slate-500 italic mb-4">📌 {course.note}</p>
                  )}

                  <Button
                    className="w-full bg-primary hover:bg-primary/90 text-white font-bold rounded-full py-3 mt-auto"
                    asChild
                  >
                    <Link to="/contact">Enroll Now</Link>
                  </Button>
                </div>
              ))}
            </div>

            {/* Family Plan */}
            <div className="flex flex-col items-center mb-12">
              <div className="bg-white rounded-2xl shadow p-6 w-full max-w-md text-center">
                <h4 className="text-lg font-bold text-primary mb-2">Family Plans</h4>
                <p className="text-slate-700 mb-2">
                  Enroll together and enjoy <span className="font-bold text-green-600">30% off</span> for each additional child after the first two, up to a total of five children.
                </p>
                <Button className="bg-primary hover:bg-primary/90 text-white font-bold rounded-full py-3 mt-2" asChild>
                  <Link to="/contact">Get Family Plan</Link>
                </Button>
              </div>
            </div>

          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
