export const metadata = {
  title: "Terms & Privacy Policy | AI1team",
  description: "Read the terms of service and privacy policy for AI1team. Understand our commitment to data security and the professional standards of our AI automation services.",
  keywords: ["AI1team Terms", "Privacy Policy", "Data Security", "AI Agency Legal", "Service Agreement"],
  openGraph: {
    title: "Terms & Privacy Policy | AI1team",
    description: "Read the terms of service and privacy policy for AI1team. Understand our commitment to data security and the professional standards of our AI automation services.",
    url: "https://ai1team.com/terms",
    siteName: "AI1team",
    type: "website",
  },
};

const TermsPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Page Hero */}
      <section 
        className="relative bg-cover bg-center bg-no-repeat min-h-[480px] flex items-center justify-center"
        style={{ backgroundImage: "url('/images/hero-terms.jpg')" }}
      >
        <div className="absolute inset-0 bg-[#0A193C] opacity-[0.85]" />
        <div className="relative z-10 text-center px-6">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Terms & Privacy Policy
          </h1>
          <p 
            className="text-xl max-w-2xl mx-auto italic"
            style={{ color: "#C8DCFF" }}
          >
            Last updated: April 2026
          </p>
        </div>
      </section>

      <div className="bg-[#F8FAFF] flex-grow py-24">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <div className="bg-white rounded-3xl p-10 md:p-16 shadow-sm border border-gray-100">
            <div className="space-y-16">
            
            {/* 1. Terms of Service */}
            <section>
              <h2 className="text-3xl font-bold text-[#1A3C6E] mb-6">1. Terms of Service</h2>
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <div>
                  <h3 className="text-xl font-semibold text-[#2E6DB4] mb-2">Acceptance of Terms</h3>
                  <p>By accessing and using the services provided by AI1team, you accept and agree to be bound by the terms and provision of this agreement.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#2E6DB4] mb-2">Services Provided</h3>
                  <p>AI1team offers specialized AI-driven automation services, including but not limited to AI Workflow Automation, CRM Optimization, and Custom AI Integrations. Scope of specific services will be clearly outlined in individual client agreements.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#2E6DB4] mb-2">Client Responsibilities</h3>
                  <p>Clients are expected to provide timely feedback, necessary brand access, and accurate business information to ensure the effective deployment of our automation strategies.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#2E6DB4] mb-2">Payment Terms (General)</h3>
                  <p>Invoices are issued according to the agreed schedule (typically monthly). Late payments may incur service interruptions or additional fees as outlined in the customized client contract.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#2E6DB4] mb-2">Intellectual Property</h3>
                  <p>All finalized automation systems and materials created during the contract period belong to the client upon full payment. AI1team retains the right to use non-confidential campaign data as generalized case studies.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#2E6DB4] mb-2">Termination of Services</h3>
                  <p>Either party may terminate the service agreement with a standard 30-day written notice, unless specified otherwise in the master service agreement.</p>
                </div>
              </div>
            </section>

            {/* 2. Privacy Policy */}
            <section>
              <h2 className="text-3xl font-bold text-[#1A3C6E] mb-6 border-t border-gray-100 pt-16">2. Privacy Policy</h2>
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <div>
                  <h3 className="text-xl font-semibold text-[#2E6DB4] mb-2">What Data We Collect</h3>
                  <p>We collect essential information required to deliver our services, including names, email addresses, company info, and basic usage data from our website interactions.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#2E6DB4] mb-2">How We Use Your Data</h3>
                  <p>We use your data strictly for service delivery, continuous optimization of AI models, client communication, and sending relevant updates (which you can opt out of at any time).</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#2E6DB4] mb-2">Data Storage and Security</h3>
                  <p>Your data is stored securely on encrypted enterprise-level servers. We employ industry-standard protocols to protect against unauthorized access, alteration, or data destruction.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#2E6DB4] mb-2">GDPR Compliance Statement</h3>
                  <p>AI1team acts in accordance with the General Data Protection Regulation (GDPR). We process personal data only when we have a legal basis to do so, prioritizing user privacy and consent.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#2E6DB4] mb-2">Third-Party Tools Used</h3>
                  <p>We leverage trusted third-party integrations to provide our services, including Google Analytics for web metrics and EmailJS for secure form transmissions.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#2E6DB4] mb-2">Your Rights</h3>
                  <p>You have the right to request access to, correction of, or deletion of your personal data at any time by contacting our support team directly.</p>
                </div>
              </div>
            </section>

            {/* 3. Cookie Policy */}
            <section>
              <h2 className="text-3xl font-bold text-[#1A3C6E] mb-6 border-t border-gray-100 pt-16">3. Cookie Policy</h2>
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <div>
                  <h3 className="text-xl font-semibold text-[#2E6DB4] mb-2">Types of Cookies Used</h3>
                  <p>We use essential cookies for site functionality and analytical cookies (like Google Analytics) to understand visitor engagement. No invasive tracking cookies are deployed.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#2E6DB4] mb-2">How to Manage Cookies</h3>
                  <p>You can instruct your browser to refuse all cookies or indicate when a cookie is being sent. However, if you do not accept cookies, some portions of our site may not function optimally.</p>
                </div>
              </div>
            </section>

            {/* 4. Disclaimer */}
            <section>
              <h2 className="text-3xl font-bold text-[#1A3C6E] mb-6 border-t border-gray-100 pt-16">4. Disclaimer</h2>
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <div>
                  <h3 className="text-xl font-semibold text-[#2E6DB4] mb-2">Results May Vary</h3>
                  <p>Automation and AI implementation results are influenced by numerous external factors. Previous case studies or testimonials are not a guarantee of identical future results.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#2E6DB4] mb-2">No Guarantee of Specific Outcomes</h3>
                  <p>While AI1team uses data-driven strategies to maximize success, we cannot guarantee specific ranking, traffic, or revenue volume outcomes.</p>
                </div>
              </div>
            </section>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsPage;
