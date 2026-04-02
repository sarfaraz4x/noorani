import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const TermsOfService = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#f9f7f3] flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="pt-16 pb-4 bg-gradient-to-b from-yellow-50 to-[#f9f7f3]">
          <div className="container mx-auto px-4 max-w-4xl">
            <h1 className="text-3xl sm:text-4xl font-bold text-primary mb-2" style={{ fontFamily: "'Fredoka', sans-serif" }}>
              Terms &amp; Conditions
            </h1>
            <p className="text-slate-500 text-sm mb-2">Last updated: April 3, 2026</p>
            <p className="text-slate-600 mb-8">
              Please read these Terms &amp; Conditions carefully before using Al Afaque's website or enrolling in any of our programs. By accessing our website or signing up for our services, you agree to be bound by these terms.
            </p>
          </div>
        </section>

        <section className="pb-16">
          <div className="container mx-auto px-4 max-w-4xl space-y-10">

            {/* 1 */}
            <div>
              <h2 className="text-xl font-bold text-primary mb-3">1. About Us</h2>
              <p className="text-slate-700">
                Al Afaque is an online Islamic education platform providing live, one-on-one and group classes in Quranic studies, Arabic language, and Islamic Studies for children. Our services are delivered entirely online via video conferencing platforms.
              </p>
            </div>

            {/* 2 */}
            <div>
              <h2 className="text-xl font-bold text-primary mb-3">2. Eligibility</h2>
              <ul className="list-disc pl-6 text-slate-700 space-y-2">
                <li>Our educational services are intended for children aged 4 to 16 years.</li>
                <li>All registrations must be completed by a parent or legal guardian who is at least 18 years of age.</li>
                <li>By registering, the parent/guardian confirms they have the legal authority to enter into this agreement on behalf of the child.</li>
              </ul>
            </div>

            {/* 3 */}
            <div>
              <h2 className="text-xl font-bold text-primary mb-3">3. Services Offered</h2>
              <p className="text-slate-700 mb-3">Al Afaque offers the following programs:</p>
              <ul className="list-disc pl-6 text-slate-700 space-y-2">
                <li><strong>Quran Classes:</strong> Recitation, Tajweed, Hifz, and Quran translation.</li>
                <li><strong>Arabic Language Classes:</strong> Spoken and written Arabic tailored for young learners.</li>
                <li><strong>Islamic Studies:</strong> Aqeedah, Fiqh, Seerah, and Islamic character development.</li>
              </ul>
              <p className="text-slate-700 mt-3">All classes are conducted via live video sessions with qualified teachers. Class durations are 30 minutes per session.</p>
            </div>

            {/* 4 */}
            <div>
              <h2 className="text-xl font-bold text-primary mb-3">4. Enrollment and Account</h2>
              <ul className="list-disc pl-6 text-slate-700 space-y-2">
                <li>Enrollment is confirmed upon successful payment of the applicable monthly fee.</li>
                <li>You are responsible for maintaining the confidentiality of your account credentials.</li>
                <li>You must notify us immediately if you suspect any unauthorised use of your account.</li>
                <li>Al Afaque reserves the right to suspend or terminate accounts that violate these Terms.</li>
              </ul>
            </div>

            {/* 5 */}
            <div>
              <h2 className="text-xl font-bold text-primary mb-3">5. Fees and Payment</h2>
              <ul className="list-disc pl-6 text-slate-700 space-y-2">
                <li>All fees are charged in Indian Rupees (INR) and are listed on our Pricing page.</li>
                <li>Payments are processed securely via Razorpay. We accept UPI, credit/debit cards, net banking, and wallets.</li>
                <li>Monthly fees are due at the beginning of each billing cycle. Failure to pay may result in suspension of classes.</li>
                <li>There are no registration or setup fees. You only pay for the plan you select.</li>
                <li>Prices are subject to change with 30 days' advance notice to enrolled students.</li>
              </ul>
            </div>

            {/* 6 */}
            <div>
              <h2 className="text-xl font-bold text-primary mb-3">6. Free Trial</h2>
              <p className="text-slate-700">
                Al Afaque may offer a free trial class to new students. The free trial is available once per household and is subject to teacher availability. No payment information is required for the free trial. Continuation of classes after the trial requires enrollment and payment.
              </p>
            </div>

            {/* 7 */}
            <div>
              <h2 className="text-xl font-bold text-primary mb-3">7. Scheduling and Attendance</h2>
              <ul className="list-disc pl-6 text-slate-700 space-y-2">
                <li>Class schedules are agreed upon during enrollment and confirmed by both parties.</li>
                <li>Students are expected to attend classes on time. Repeated absences without notice may affect class continuity.</li>
                <li>If a student needs to miss a class, the parent/guardian must inform us via WhatsApp or email at least 3 hours before the scheduled session.</li>
                <li>Makeup classes for missed sessions are subject to teacher availability and are not guaranteed.</li>
                <li>If a teacher is unavailable due to an emergency, Al Afaque will reschedule the class or provide a substitute teacher.</li>
              </ul>
            </div>

            {/* 8 */}
            <div>
              <h2 className="text-xl font-bold text-primary mb-3">8. Code of Conduct</h2>
              <p className="text-slate-700 mb-3">All students and parents/guardians must adhere to the following during classes:</p>
              <ul className="list-disc pl-6 text-slate-700 space-y-2">
                <li>Treat teachers and staff with respect at all times.</li>
                <li>Ensure the child is in a quiet, distraction-free environment during class.</li>
                <li>Refrain from recording class sessions without explicit written consent from Al Afaque.</li>
                <li>No inappropriate, offensive, or disruptive behaviour will be tolerated.</li>
              </ul>
              <p className="text-slate-700 mt-3">Al Afaque reserves the right to terminate enrollment without refund in cases of serious misconduct.</p>
            </div>

            {/* 9 */}
            <div>
              <h2 className="text-xl font-bold text-primary mb-3">9. Intellectual Property</h2>
              <p className="text-slate-700">
                All course content, teaching materials, website content, logos, and branding are the intellectual property of Al Afaque. You may not reproduce, distribute, or create derivative works from our content without prior written permission. Students and parents are granted a limited, non-exclusive licence to use course materials solely for personal, non-commercial educational purposes.
              </p>
            </div>

            {/* 10 */}
            <div>
              <h2 className="text-xl font-bold text-primary mb-3">10. Limitation of Liability</h2>
              <p className="text-slate-700">
                Al Afaque's liability to you for any claim arising out of or in connection with our services shall not exceed the total fees paid by you in the preceding one (1) month. We are not liable for indirect, incidental, special, or consequential damages, including but not limited to loss of learning progress due to technical failures outside our reasonable control (such as internet outages on the student's end).
              </p>
            </div>

            {/* 11 */}
            <div>
              <h2 className="text-xl font-bold text-primary mb-3">11. Disclaimer</h2>
              <p className="text-slate-700">
                Our services are provided on an "as is" and "as available" basis. While we strive to provide high-quality education, Al Afaque does not guarantee specific academic outcomes or results. Progress depends on consistent attendance and practice by the student.
              </p>
            </div>

            {/* 12 */}
            <div>
              <h2 className="text-xl font-bold text-primary mb-3">12. Governing Law and Dispute Resolution</h2>
              <p className="text-slate-700">
                These Terms &amp; Conditions are governed by the laws of India. Any disputes arising out of or relating to these terms shall first be attempted to be resolved amicably. If unresolved, disputes shall be subject to the exclusive jurisdiction of the courts of India.
              </p>
            </div>

            {/* 13 */}
            <div>
              <h2 className="text-xl font-bold text-primary mb-3">13. Changes to Terms</h2>
              <p className="text-slate-700">
                Al Afaque reserves the right to modify these Terms &amp; Conditions at any time. Significant changes will be communicated via email or prominent notice on the website at least 14 days before taking effect. Continued use of our services after such notice constitutes acceptance of the new terms.
              </p>
            </div>

            {/* 14 */}
            <div>
              <h2 className="text-xl font-bold text-primary mb-3">14. Contact Us</h2>
              <p className="text-slate-700 mb-2">For any questions regarding these Terms &amp; Conditions, please reach out:</p>
              <div className="bg-white rounded-2xl p-6 shadow text-slate-700 space-y-1">
                <p><strong>Al Afaque</strong></p>
                <p>Email: alafaque.app@gmail.com</p>
                <p>Phone: +91 74610 27503</p>
                <p>WhatsApp: +91 74610 27503</p>
              </div>
            </div>

          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default TermsOfService;
