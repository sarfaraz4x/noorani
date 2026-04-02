import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
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
              Privacy Policy
            </h1>
            <p className="text-slate-500 text-sm mb-2">Last updated: April 3, 2026</p>
            <p className="text-slate-600 mb-8">
              Al Afaque ("we", "our", or "us") is committed to protecting the privacy of our students, parents, and website visitors. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
            </p>
          </div>
        </section>

        <section className="pb-16">
          <div className="container mx-auto px-4 max-w-4xl space-y-10">

            {/* 1 */}
            <div>
              <h2 className="text-xl font-bold text-primary mb-3">1. Information We Collect</h2>
              <p className="text-slate-700 mb-3">We may collect the following categories of information:</p>
              <ul className="list-disc pl-6 text-slate-700 space-y-2">
                <li><strong>Personal Identification Information:</strong> Full name, email address, phone number, and WhatsApp number of the parent or guardian.</li>
                <li><strong>Child Information:</strong> First name, age, and grade level of the child enrolling in our programs. We do not collect sensitive personal data of minors beyond what is necessary to deliver our educational services.</li>
                <li><strong>Payment Information:</strong> Billing details processed securely through Razorpay. We do not store credit/debit card numbers or CVVs on our servers.</li>
                <li><strong>Usage Data:</strong> IP address, browser type, pages visited, time spent on pages, and device information collected automatically via cookies and analytics tools.</li>
                <li><strong>Communications:</strong> Messages sent to us via contact forms, email, or WhatsApp.</li>
              </ul>
            </div>

            {/* 2 */}
            <div>
              <h2 className="text-xl font-bold text-primary mb-3">2. How We Use Your Information</h2>
              <p className="text-slate-700 mb-3">We use the information we collect to:</p>
              <ul className="list-disc pl-6 text-slate-700 space-y-2">
                <li>Enroll students and manage their class schedules.</li>
                <li>Process payments securely through our payment gateway.</li>
                <li>Communicate class updates, schedules, and important notices to parents/guardians.</li>
                <li>Provide customer support and respond to inquiries.</li>
                <li>Improve our website, curriculum, and teaching quality.</li>
                <li>Send occasional promotional communications (you may opt out at any time).</li>
                <li>Comply with legal obligations applicable under Indian law.</li>
              </ul>
            </div>

            {/* 3 */}
            <div>
              <h2 className="text-xl font-bold text-primary mb-3">3. Children's Privacy</h2>
              <p className="text-slate-700 mb-3">
                Our services are designed for children under the supervision of their parents or legal guardians. All accounts must be created and managed by a parent or guardian who is at least 18 years of age.
              </p>
              <p className="text-slate-700">
                We do not knowingly collect personal information directly from children without verifiable parental consent. If you believe we have inadvertently collected information from a child without consent, please contact us immediately and we will delete such information promptly.
              </p>
            </div>

            {/* 4 */}
            <div>
              <h2 className="text-xl font-bold text-primary mb-3">4. Sharing of Information</h2>
              <p className="text-slate-700 mb-3">We do not sell, rent, or trade your personal information. We may share information only in the following circumstances:</p>
              <ul className="list-disc pl-6 text-slate-700 space-y-2">
                <li><strong>Service Providers:</strong> Third-party vendors such as Razorpay (payment processing), Google (analytics and video conferencing), and cloud hosting providers, who are contractually bound to maintain confidentiality.</li>
                <li><strong>Legal Requirements:</strong> When required by law, court order, or governmental authority under applicable Indian law (including the IT Act, 2000 and IT Rules, 2011).</li>
                <li><strong>Business Transfer:</strong> In the event of a merger, acquisition, or sale of assets, your information may be transferred with prior notice.</li>
              </ul>
            </div>

            {/* 5 */}
            <div>
              <h2 className="text-xl font-bold text-primary mb-3">5. Cookies and Tracking Technologies</h2>
              <p className="text-slate-700 mb-3">
                We use cookies and similar tracking technologies to enhance your browsing experience, analyse website traffic, and understand user behaviour. You may disable cookies through your browser settings; however, some features of our website may not function properly as a result.
              </p>
              <p className="text-slate-700">
                We use Google Analytics to understand how visitors interact with our website. Google Analytics collects anonymised usage data and does not identify individual users.
              </p>
            </div>

            {/* 6 */}
            <div>
              <h2 className="text-xl font-bold text-primary mb-3">6. Data Security</h2>
              <p className="text-slate-700">
                We implement industry-standard security measures including SSL/TLS encryption, secure servers, and restricted access to personal data to protect your information from unauthorised access, disclosure, alteration, or destruction. Payment transactions are processed through Razorpay's PCI-DSS compliant infrastructure. Despite these measures, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
              </p>
            </div>

            {/* 7 */}
            <div>
              <h2 className="text-xl font-bold text-primary mb-3">7. Data Retention</h2>
              <p className="text-slate-700">
                We retain your personal information for as long as your account is active or as needed to provide services to you. We will also retain and use your information to comply with legal obligations, resolve disputes, and enforce our agreements. Upon request, we will delete or anonymise your data within 30 days, unless retention is required by law.
              </p>
            </div>

            {/* 8 */}
            <div>
              <h2 className="text-xl font-bold text-primary mb-3">8. Your Rights</h2>
              <p className="text-slate-700 mb-3">As a user, you have the right to:</p>
              <ul className="list-disc pl-6 text-slate-700 space-y-2">
                <li>Access the personal information we hold about you.</li>
                <li>Correct inaccurate or incomplete information.</li>
                <li>Request deletion of your personal data (subject to legal requirements).</li>
                <li>Withdraw consent for marketing communications at any time.</li>
                <li>Lodge a complaint with the relevant data protection authority.</li>
              </ul>
              <p className="text-slate-700 mt-3">To exercise any of these rights, contact us at <strong>alafaque.app@gmail.com</strong>.</p>
            </div>

            {/* 9 */}
            <div>
              <h2 className="text-xl font-bold text-primary mb-3">9. Third-Party Links</h2>
              <p className="text-slate-700">
                Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of those sites. We encourage you to review the privacy policies of any third-party sites you visit.
              </p>
            </div>

            {/* 10 */}
            <div>
              <h2 className="text-xl font-bold text-primary mb-3">10. Changes to This Policy</h2>
              <p className="text-slate-700">
                We may update this Privacy Policy from time to time. We will notify you of significant changes by posting the new policy on this page with an updated date and, where appropriate, via email. Your continued use of our services after changes are posted constitutes your acceptance of the revised policy.
              </p>
            </div>

            {/* 11 */}
            <div>
              <h2 className="text-xl font-bold text-primary mb-3">11. Contact Us</h2>
              <p className="text-slate-700 mb-2">If you have any questions or concerns regarding this Privacy Policy, please contact us:</p>
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

export default PrivacyPolicy;
