import React from 'react';

const PrivacyPolicyPage = () => (
  <div className="bg-gray-50 text-gray-800 min-h-screen px-4 sm:px-8 py-10">
    <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-6">
      <h1 className="text-3xl font-semibold text-center text-purple-700 mb-8">Privacy Policy</h1>

      <p className="text-lg text-gray-700 leading-relaxed mb-4">
        <strong>Effective Date: November 19, 2024</strong>
      </p>

      <p className="text-base text-gray-600 mb-6">
        At TechArtistry Designs, accessible at <a href="https://www.techartistrydesigns.com" className="text-purple-600">www.techartistrydesigns.com</a>, we are committed to protecting your privacy and ensuring the security of any personal information you provide to us. This Privacy Policy outlines how we collect, use, and protect your data in compliance with the General Data Protection Regulation (GDPR) and other relevant privacy laws.
      </p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-purple-600 mb-4">1. Who We Are</h2>
        <ul className="list-disc pl-5 text-gray-600">
          <li><strong>Business Name:</strong> TechArtistry Designs</li>
          <li><strong>Website Address:</strong> <a href="https://www.techartistrydesigns.com" className="text-purple-600">www.techartistrydesigns.com</a></li>
          <li><strong>Contact Email:</strong> <a href="mailto:info@techartistrydesigns.com" className="text-purple-600">info@techartistrydesigns.com</a></li>
          <li><strong>Business Address:</strong> Oakdene Parks, Oakdene, Johannesburg South, 2190</li>
        </ul>
        <p className="mt-4 text-gray-600">
          TechArtistry Designs specializes in web design and development services for small and medium-sized enterprises (SMEs).
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-purple-600 mb-4">2. Information We Collect</h2>
        <p className="text-gray-600 mb-2">We may collect and process the following types of personal data:</p>
        <div className="space-y-4">
          <div>
            <strong>Information You Provide</strong>
            <ul className="list-inside list-disc pl-5 text-gray-600">
              <li>Contact Information: Name, email address, phone number, and business details.</li>
              <li>Payment Information: Billing address and payment details.</li>
            </ul>
          </div>
          <div>
            <strong>Automatically Collected Information</strong>
            <ul className="list-inside list-disc pl-5 text-gray-600">
              <li>Cookies and Tracking Data: Information such as IP address, browser type, device type, and pages viewed.</li>
              <li>Usage Data: Time spent on our website and interactions with our site.</li>
            </ul>
          </div>
          <div>
            <strong>Third-Party Data</strong>
            <p className="text-gray-600">
              We may receive information from third-party tools, such as payment processors, to complete transactions or improve service delivery.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-purple-600 mb-4">3. How We Use Your Information</h2>
        <p className="text-gray-600 mb-2">Your information is used for the following purposes:</p>
        <ul className="list-inside list-disc pl-5 text-gray-600">
          <li>Service Delivery: To process your requests, create and deliver websites, and communicate project updates.</li>
          <li>Payment Processing: To process payments for services rendered.</li>
          <li>Marketing: To send you newsletters, promotions, and updates (with your consent).</li>
          <li>Website Improvement: To analyze usage patterns and enhance website functionality.</li>
          <li>Legal Compliance: To comply with applicable laws and regulations.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-purple-600 mb-4">4. Legal Basis for Processing Your Data</h2>
        <ul className="list-inside list-disc pl-5 text-gray-600">
          <li><strong>Consent:</strong> When you have explicitly provided your consent for specific purposes.</li>
          <li><strong>Contractual Necessity:</strong> To fulfill our contractual obligations to you.</li>
          <li><strong>Legal Obligation:</strong> To comply with regulatory and legal requirements.</li>
          <li><strong>Legitimate Interest:</strong> To operate and improve our business, except where overridden by your rights.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-purple-600 mb-4">5. How We Share Your Data</h2>
        <p className="text-gray-600 mb-2">We do not sell or rent your personal data to third parties. However, we may share your information with the following entities:</p>
        <ul className="list-inside list-disc pl-5 text-gray-600">
          <li><strong>Service Providers:</strong> Third-party providers that assist with payment processing, hosting, or analytics.</li>
          <li><strong>Legal Authorities:</strong> When required to comply with legal obligations or protect our rights.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-purple-600 mb-4">6. Data Retention</h2>
        <p className="text-gray-600">We retain your personal data for as long as necessary to fulfill the purposes outlined in this policy, unless a longer retention period is required by law.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-purple-600 mb-4">7. Your Rights Under GDPR</h2>
        <p className="text-gray-600 mb-2">As a data subject, you have the following rights:</p>
        <ul className="list-inside list-disc pl-5 text-gray-600">
          <li><strong>Access:</strong> Request access to your personal data.</li>
          <li><strong>Correction:</strong> Rectify inaccurate or incomplete information.</li>
          <li><strong>Deletion:</strong> Request deletion of your personal data, where legally permissible.</li>
          <li><strong>Restriction:</strong> Request restriction of processing under certain conditions.</li>
          <li><strong>Data Portability:</strong> Receive a copy of your data in a structured, machine-readable format.</li>
          <li><strong>Objection:</strong> Object to the processing of your data for marketing or other purposes.</li>
          <li><strong>Withdraw Consent:</strong> Withdraw consent where processing is based on consent.</li>
        </ul>
        <p className="text-gray-600 mt-4">To exercise your rights, please contact us at <a href="mailto:info@techartistrydesigns.com" className="text-purple-600">info@techartistrydesigns.com</a>.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-purple-600 mb-4">8. Cookies and Tracking</h2>
        <p className="text-gray-600 mb-2">We use cookies to improve your browsing experience and analyze website usage.</p>
        <ul className="list-inside list-disc pl-5 text-gray-600">
          <li><strong>Essential Cookies:</strong> Required for basic website functionality.</li>
          <li><strong>Analytical Cookies:</strong> Help us understand how you use our site.</li>
          <li><strong>Marketing Cookies:</strong> Used to deliver targeted advertisements.</li>
        </ul>
        <p className="text-gray-600 mt-4">You can manage or disable cookies via your browser settings.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-purple-600 mb-4">9. Data Security</h2>
        <p className="text-gray-600">We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-purple-600 mb-4">10. Changes to this Policy</h2>
        <p className="text-gray-600">We may update this Privacy Policy from time to time. All updates will be posted on this page with the updated "Effective Date." We encourage you to review this policy periodically.</p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-purple-600 mb-4">11. Contact Us</h2>
        <p className="text-gray-600">If you have any questions about this Privacy Policy or wish to exercise your rights, please contact us at:</p>
        <ul className="list-inside list-disc pl-5 text-gray-600">
          <li><strong>Email:</strong> <a href="mailto:info@techartistrydesigns.com" className="text-purple-600">info@techartistrydesigns.com</a></li>
          <li><strong>Business Address:</strong> Oakdene Parks, Oakdene, Johannesburg South, 2190</li>
        </ul>
      </section>
    </div>
  </div>
);

export default PrivacyPolicyPage;
