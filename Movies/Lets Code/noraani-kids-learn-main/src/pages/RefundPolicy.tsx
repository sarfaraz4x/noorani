import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const RefundPolicy = () => {
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
              Refund &amp; Cancellation Policy
            </h1>
            <p className="text-slate-500 text-sm mb-2">Last updated: April 3, 2026</p>
            <p className="text-slate-600 mb-8">
              At Al Afaque, we are committed to your satisfaction. This Refund &amp; Cancellation Policy outlines the terms under which refunds and cancellations are processed for our online Islamic education services.
            </p>
          </div>
        </section>

        <section className="pb-16">
          <div className="container mx-auto px-4 max-w-4xl space-y-10">

            {/* 1 */}
            <div>
              <h2 className="text-xl font-bold text-primary mb-3">1. Subscription Model</h2>
              <p className="text-slate-700">
                Al Afaque operates on a monthly subscription basis. Fees are charged at the beginning of each billing cycle for the upcoming month's classes. All prices are listed in Indian Rupees (INR) and payments are processed through Razorpay.
              </p>
            </div>

            {/* 2 */}
            <div>
              <h2 className="text-xl font-bold text-primary mb-3">2. Free Trial</h2>
              <p className="text-slate-700">
                New students are eligible for one free trial class before committing to a paid subscription. No payment is required for the free trial. If you choose not to continue after the trial, no charges will apply.
              </p>
            </div>

            {/* 3 */}
            <div>
              <h2 className="text-xl font-bold text-primary mb-3">3. Cancellation Policy</h2>

              <h3 className="text-base font-semibold text-slate-800 mb-2">3.1 Cancellation by Student</h3>
              <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-4">
                <li>You may cancel your subscription at any time by contacting us via email or WhatsApp before your next billing date.</li>
                <li>Cancellations made <strong>before the next billing cycle begins</strong> will stop future charges. You will retain access to your classes until the end of the current paid period.</li>
                <li>Cancellations are <strong>not</strong> effective mid-cycle — no partial refunds are issued for the remaining days of a billing period once classes have commenced for that cycle.</li>
              </ul>

              <h3 className="text-base font-semibold text-slate-800 mb-2">3.2 Cancellation by Al Afaque</h3>
              <ul className="list-disc pl-6 text-slate-700 space-y-2">
                <li>Al Afaque reserves the right to cancel or suspend a student's enrollment in cases of misconduct, abuse, or violation of our Terms &amp; Conditions.</li>
                <li>In such cases, a pro-rata refund for unused classes in the current cycle will be issued at our discretion.</li>
              </ul>
            </div>

            {/* 4 */}
            <div>
              <h2 className="text-xl font-bold text-primary mb-3">4. Refund Policy</h2>

              <h3 className="text-base font-semibold text-slate-800 mb-2">4.1 Eligible Refunds</h3>
              <p className="text-slate-700 mb-3">You are eligible for a refund in the following situations:</p>
              <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-4">
                <li><strong>Refund within 7 days of payment:</strong> If you are dissatisfied after your first paid month and have attended fewer than 3 classes, you may request a full refund within 7 days of your initial payment date.</li>
                <li><strong>Service unavailability by Al Afaque:</strong> If we are unable to deliver the agreed classes due to reasons within our control (e.g., no teacher available, technical failures on our end), a pro-rata refund for the undelivered classes will be issued.</li>
                <li><strong>Duplicate payments:</strong> Accidental duplicate charges will be refunded in full.</li>
                <li><strong>Technical payment errors:</strong> If your payment was deducted but enrollment was not confirmed, a full refund will be processed.</li>
              </ul>

              <h3 className="text-base font-semibold text-slate-800 mb-2">4.2 Non-Eligible Refunds</h3>
              <p className="text-slate-700 mb-3">Refunds will <strong>not</strong> be issued in the following cases:</p>
              <ul className="list-disc pl-6 text-slate-700 space-y-2">
                <li>Classes missed by the student without prior notice.</li>
                <li>Cancellations requested after 7 days of the payment date.</li>
                <li>Dissatisfaction cited after 3 or more classes have been attended in the paid cycle.</li>
                <li>Disruptions due to the student's own internet or device issues.</li>
                <li>Change of mind after the cooling-off period.</li>
              </ul>
            </div>

            {/* 5 */}
            <div>
              <h2 className="text-xl font-bold text-primary mb-3">5. How to Request a Refund</h2>
              <p className="text-slate-700 mb-3">To request a refund, please follow these steps:</p>
              <ol className="list-decimal pl-6 text-slate-700 space-y-2">
                <li>Contact us at <strong>alafaque.app@gmail.com</strong> or via WhatsApp at <strong>+91 74610 27503</strong>.</li>
                <li>Provide your registered email address, enrolled student name, and the reason for your refund request.</li>
                <li>Include your payment receipt or transaction ID (available in your email confirmation or Razorpay receipt).</li>
                <li>Our team will review your request within <strong>3 business days</strong> and respond with a decision.</li>
              </ol>
            </div>

            {/* 6 */}
            <div>
              <h2 className="text-xl font-bold text-primary mb-3">6. Refund Processing Timeline</h2>
              <p className="text-slate-700 mb-3">Once a refund is approved:</p>
              <ul className="list-disc pl-6 text-slate-700 space-y-2">
                <li>Refunds are processed within <strong>5–7 business days</strong>.</li>
                <li>The refunded amount will be credited back to the original payment method (UPI, bank account, card, or wallet) used during purchase.</li>
                <li>Al Afaque does not charge any processing fees on approved refunds.</li>
                <li>Depending on your bank or payment provider, it may take an additional 3–5 business days for the refund to reflect in your account.</li>
              </ul>
            </div>

            {/* 7 */}
            <div>
              <h2 className="text-xl font-bold text-primary mb-3">7. Missed Classes &amp; Makeup Sessions</h2>
              <ul className="list-disc pl-6 text-slate-700 space-y-2">
                <li>Classes missed by the student are <strong>not refunded</strong>, but we will make reasonable efforts to offer a makeup session subject to teacher availability.</li>
                <li>To be eligible for a makeup class, the parent/guardian must notify us at least <strong>3 hours before</strong> the scheduled session.</li>
                <li>Makeup classes are offered as a goodwill gesture and are not guaranteed.</li>
              </ul>
            </div>

            {/* 8 */}
            <div>
              <h2 className="text-xl font-bold text-primary mb-3">8. Disputes</h2>
              <p className="text-slate-700">
                If you believe a refund has been incorrectly denied, you may escalate the matter by emailing us at <strong>alafaque.app@gmail.com</strong> with the subject line "Refund Dispute". We aim to resolve all disputes within 7 business days. Our goal is always to find a fair and amicable resolution.
              </p>
            </div>

            {/* 9 */}
            <div>
              <h2 className="text-xl font-bold text-primary mb-3">9. Contact Us</h2>
              <p className="text-slate-700 mb-2">For any refund or cancellation queries, please contact us:</p>
              <div className="bg-white rounded-2xl p-6 shadow text-slate-700 space-y-1">
                <p><strong>Al Afaque</strong></p>
                <p>Email: alafaque.app@gmail.com</p>
                <p>Phone / WhatsApp: +91 74610 27503</p>
                <p>Response Time: Within 24 hours on business days</p>
              </div>
            </div>

          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default RefundPolicy;
