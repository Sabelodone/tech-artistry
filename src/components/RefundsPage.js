// RefundsPage.js
import React from 'react';

const RefundsPage = () => (
  <div className="max-w-3xl mx-auto px-6 py-8">
    <h1 className="text-3xl font-bold text-purple-600 mb-6">Refunds & Returns</h1>
    <p className="text-gray-700 mb-8">
      <strong>Effective Date:</strong> 19 November 2024
    </p>
    
    <section className="mb-8">
      <h2 className="text-2xl font-semibold text-purple-600 mb-4">1. Scope of the Policy</h2>
      <p className="text-gray-600">
        This policy applies to all web design and development services purchased from TechArtistry Designs. Due to the nature of our services, refunds and returns are evaluated on a case-by-case basis, with fairness to both the customer and our business operations.
      </p>
    </section>

    <section className="mb-8">
      <h2 className="text-2xl font-semibold text-purple-600 mb-4">2. Conditions for Refunds</h2>
      <h3 className="text-xl font-semibold text-purple-600 mb-4">a) Eligibility for Refunds</h3>
      <ul className="list-inside list-disc pl-5 text-gray-600">
        <li>Non-delivery of Service: If we fail to deliver the agreed-upon services within the specified timeline, and the delay is not caused by the client.</li>
        <li>Service Deficiencies: If the delivered services significantly deviate from the agreed project scope, specifications, or expectations.</li>
        <li>Cancellation Before Work Begins: If you cancel your order before any work has commenced, a full refund may be granted.</li>
      </ul>

      <h3 className="text-xl font-semibold text-purple-600 mt-6 mb-4">b) Ineligible Situations</h3>
      <ul className="list-inside list-disc pl-5 text-gray-600">
        <li>Completed Work: Refunds will not be provided for services that have been fully delivered and accepted by the client.</li>
        <li>Change of Mind: Refunds are not granted for changes in client preferences after work has begun.</li>
        <li>Delayed Client Responses: If project delays are caused by the client’s failure to provide necessary materials, feedback, or approvals.</li>
      </ul>
    </section>

    <section className="mb-8">
      <h2 className="text-2xl font-semibold text-purple-600 mb-4">3. Refund Process</h2>
      <h3 className="text-xl font-semibold text-purple-600 mb-4">a) How to Initiate a Refund</h3>
      <p className="text-gray-600 mb-4">To request a refund, please follow these steps:</p>
      <ol className="list-decimal list-inside pl-5 text-gray-600">
        <li>Contact Us: Send an email to <a href="mailto:info@techartistrydesigns.com" className="text-purple-600">info@techartistrydesigns.com</a> with the subject line “Refund Request.”</li>
        <li>Provide Details: Include your order reference, project details, and a clear explanation of the issue or reason for the refund request.</li>
        <li>Await Response: Our team will acknowledge your request within 5 business days and may request additional information or documentation.</li>
      </ol>

      <h3 className="text-xl font-semibold text-purple-600 mt-6 mb-4">b) Evaluation</h3>
      <p className="text-gray-600 mb-4">Each refund request will be reviewed to assess eligibility. We aim to resolve all refund requests within 10 business days of receiving the necessary information.</p>

      <h3 className="text-xl font-semibold text-purple-600 mt-6 mb-4">c) Refund Method</h3>
      <p className="text-gray-600">Approved refunds will be processed using the original payment method within 10 business days of approval.</p>
    </section>

    <section className="mb-8">
      <h2 className="text-2xl font-semibold text-purple-600 mb-4">4. Adjustments and Revisions</h2>
      <p className="text-gray-600">
        If the delivered work does not meet agreed specifications, we may offer revisions or adjustments at no extra cost. The scope of revisions is subject to the original agreement and does not include requests for new features or significant changes outside the initial scope.
      </p>
    </section>

    <section className="mb-8">
      <h2 className="text-2xl font-semibold text-purple-600 mb-4">5. Fees and Costs</h2>
      <h3 className="text-xl font-semibold text-purple-600 mb-4">a) Processing Fees</h3>
      <p className="text-gray-600 mb-4">If a refund request is approved for services already in progress, TechArtistry Designs may retain a portion of the fee to cover administrative or labor costs incurred. This amount will be communicated clearly during the refund process.</p>

      <h3 className="text-xl font-semibold text-purple-600 mb-4">b) Third-Party Costs</h3>
      <p className="text-gray-600">Any third-party costs (e.g., stock images, plugins, hosting) already incurred are non-refundable.</p>
    </section>

    <section className="mb-8">
      <h2 className="text-2xl font-semibold text-purple-600 mb-4">6. Contacting Customer Support</h2>
      <p className="text-gray-600 mb-4">For all refund-related inquiries or to initiate a request, contact us:</p>
      <ul className="list-inside list-disc pl-5 text-gray-600">
        <li><strong>Email:</strong> <a href="mailto:info@techartistrydesigns.com" className="text-purple-600">info@techartistrydesigns.com</a></li>
        <li><strong>Business Address:</strong> Oakdene Parks, Oakdene, Johannesburg South, 2190</li>
      </ul>
    </section>

    <section>
      <h2 className="text-2xl font-semibold text-purple-600 mb-4">7. Amendments to This Policy</h2>
      <p className="text-gray-600">
        TechArtistry Designs reserves the right to update or modify this policy at any time. Changes will be effective immediately upon posting to www.techartistrydesigns.com. By using our services, you acknowledge that you have read, understood, and agree to this Refunds and Returns Policy.
      </p>
    </section>
  </div>
);

export default RefundsPage;
