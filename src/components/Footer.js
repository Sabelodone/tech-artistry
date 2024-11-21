import React, { useState, useEffect } from 'react';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import { FaArrowUp } from 'react-icons/fa';


const Footer = () => {
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [popupContent, setPopupContent] = useState("");
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  // Function to open the popup with dynamic content
  const openPopup = (content) => {
    setPopupContent(content);
    setPopupVisible(true);
  };

  // Function to close the popup and reset content after a smooth transition
  const closePopup = () => {
    setPopupVisible(false);
    setTimeout(() => setPopupContent(""), 300); // Smoothly clears content after close animation
  };

  // Show "Back to Top" button when scrolling down
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollToTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to the top of the page smoothly when the button is clicked
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Footer Section with professional layout */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto flex flex-col md:flex-row justify-between px-6">
          
          {/* Policies Section */}
          <div className="flex flex-col mb-6 md:w-1/5">
          <h3 className="text-lg font-semibold mb-3 text-gray-300 text-left">Policies</h3>

            <ul className="space-y-2">
              <li>
                
                
                <button
                  onClick={() => openPopup(<div>
                    
                    
                    <h1>Terms & Conditions</h1>
                    
                    <p>
                      
                      <strong>Terms and Conditions</strong><br />
                      Effective Date: 19 November 2024<br />
                      Welcome to www.techartistrydesigns.com (“Website”), operated by TechArtistry Designs (“Company,” “we,” “us,” or “our”). By accessing or using our Website and services, you agree to comply with and be bound by these Terms and Conditions (“Terms”). If you do not agree with these Terms, please do not use our Website or services.
                    </p>
                    <h2>1. Definitions</h2>
                    <ul>
                      <li>“Services” refers to web design and development services provided by TechArtistry Designs.</li>
                      <li>“Client” or “you” refers to the individual or business entity accessing our Website or purchasing our Services.</li>
                    </ul>
                    <h2>2. General Information</h2>
                    <ul>
                      <li>Business Name: TechArtistry Designs</li>
                      <li>Website Address: www.techartistrydesigns.com</li>
                      <li>Contact Email: info@techartistrydesigns.com</li>
                      <li>Business Address: Oakdene Parks, Oakdene, Johannesburg South, 2190</li>
                    </ul>
                    <h2>3. Use of the Website</h2>
                    <p>
                      <strong>a) Eligibility</strong><br />
                      To use our Website, you must be at least 18 years old or have parental/guardian consent.<br />
                      <strong>b) Prohibited Activities</strong><br />
                      You agree not to:
                    </p>
                    <ul>
                      <li>Use the Website for unlawful purposes.</li>
                      <li>Attempt to disrupt or interfere with the Website’s functionality.</li>
                      <li>Copy, distribute, or misuse any content from the Website without our permission.</li>
                    </ul>
                    <h2>4. Services</h2>
      <p>
        <strong>a) Scope of Services</strong><br />
        TechArtistry Designs specializes in providing web design and development services tailored for SMEs. Details of specific service packages will be outlined in project agreements.<br />
        <strong>b) Service Modifications</strong><br />
        We reserve the right to update or modify our services at any time without prior notice.
      </p>

      <h2>5. Pricing and Payment</h2>
      <p>
        <strong>a) Pricing</strong><br />
        Service fees will be detailed in the project agreement. All prices are subject to change without notice but will not affect services already agreed upon.<br />
        <strong>b) Payment Terms</strong><br />
        <ul>
          <li>Full or partial payments may be required upfront, as outlined in individual agreements.</li>
          <li>Payments can be made via bank transfer or other approved methods.</li>
          <li>Late payments may result in project delays or additional charges.</li>
        </ul>
      </p>

      <h2>6. Project Timelines and Delivery</h2>
      <p>
        We strive to deliver projects within the agreed timeline. However, delays may occur due to unforeseen circumstances or changes requested by the client.<br />
        <strong>a) Client Responsibilities</strong><br />
        Clients must provide all necessary content, feedback, and approvals within the agreed timeframe to ensure timely delivery.<br />
        <strong>b) Revisions</strong><br />
        The number of revisions included will be detailed in the project agreement. Additional revisions may incur extra costs.
      </p>

      <h2>7. Intellectual Property</h2>
      <p>
        <strong>a) Ownership</strong><br />
        Upon full payment, the Client will own the final deliverables. TechArtistry Designs retains the right to display the work in our portfolio unless otherwise agreed.<br />
        <strong>b) Third-Party Assets</strong><br />
        We may use third-party resources (e.g., stock images, plugins) in your project. Licensing terms for these resources will apply.
      </p>

      <h2>8. Refunds and Cancellations</h2>
      <p>
        <ul>
          <li>Refunds: Refund eligibility will be assessed based on the stage of the project. Completed work is non-refundable.</li>
          <li>Cancellations: Cancellations must be communicated in writing. Any completed work will be billed accordingly.</li>
        </ul>
      </p>

      <h2>9. Limitation of Liability</h2>
      <p>
        We are not liable for:
        <ul>
          <li>Indirect or consequential losses arising from the use of our Website or services.</li>
          <li>Delays or disruptions caused by third-party providers or unforeseen circumstances.</li>
        </ul>
        Our liability will not exceed the fees paid for the service in question.
      </p>

      <h2>10. Confidentiality</h2>
      <p>
        We will treat all client information as confidential unless required by law to disclose it.
      </p>

      <h2>11. Privacy</h2>
      <p>
        Our collection and use of personal data are governed by our Privacy Policy, which is incorporated into these Terms.
      </p>

      <h2>12. Termination</h2>
      <p>
        We reserve the right to terminate your access to the Website or services if you breach these Terms.
      </p>

      <h2>13. Governing Law</h2>
      <p>
        These Terms are governed by the laws of the Republic of South Africa, and any disputes will be resolved in the relevant South African courts.
      </p>

      <h2>14. Amendments to Terms</h2>
      <p>
        We may update these Terms at any time. Changes will be effective immediately upon posting on this Website.
      </p>

      <h2>15. Contact Information</h2>
      <p>
        For any questions or concerns regarding these Terms, please contact us at:
        <ul>
          <li>Email: info@techartistrydesigns.com</li>
          <li>Address: Oakdene Parks, Oakdene, Johannesburg South, 2190</li>
        </ul>
        </p>
                  </div>)}
                  className="text-gray-400 hover:text-purple-600 transition duration-300 hover:underline"
                >
                  Terms & Conditions
                </button>
              </li>

              <li>
                <button
                  onClick={() => openPopup(<div className="max-w-3xl mx-auto px-6 py-8">
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
                  </div>)}
                  className="text-gray-400 hover:text-purple-600 transition duration-300 hover:underline"
                >
                  Refunds & Returns
                </button>
              </li>

              <li>
                <button
                  onClick={() => openPopup(<div className="max-w-3xl mx-auto px-6 py-8">
                    <h1 className="text-3xl font-bold text-purple-600 mb-6">Privacy Policy</h1>
                    <p className="text-gray-700 mb-8">
                      <strong>Effective Date:</strong> 19 November 2024
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
      
                  </div>)}
                  className="text-gray-400 hover:text-purple-600 transition duration-300 hover:underline"
                >
                  Privacy Policy
                </button>
              </li>
            </ul>
          </div>

                                                                                                                                                                     {/* Solutions Section */}
                                                                                                                                                                     <div className="flex flex-col mb-6 md:w-1/5">
            <h3 className="text-lg font-semibold mb-3 text-gray-300">Solutions</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-purple-600 transition duration-300 hover:underline">
                  Web Design
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-purple-600 transition duration-300 hover:underline">
                  Web Development
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-purple-600 transition duration-300 hover:underline">
                  Software Creation
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-purple-600 transition duration-300 hover:underline">
                  e-Commerce
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-purple-600 transition duration-300 hover:underline">
                  Branding
                </a>
              </li>
            </ul>
          </div>

         {/* Social Media Links */}
         <div className="flex flex-col mb-6 md:w-1/5">
            <h3 className="text-lg font-semibold mb-3 text-gray-300">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/techartistrydesigns" target="_blank" rel="noopener noreferrer">
                <FaFacebookF className="text-gray-400 hover:text-purple-600 transition duration-300" />
              </a>
              <a href="https://www.instagram.com/techartistrydesigns" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-gray-400 hover:text-purple-600 transition duration-300" />
              </a>
              <a href="https://www.twitter.com/techartistry" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="text-gray-400 hover:text-purple-600 transition duration-300" />
              </a>
            </div>
          </div>

          {/* Contact Section */}
          <div className="flex flex-col mb-6 md:w-1/5">
            <h3 className="text-lg font-semibold mb-3 text-gray-300">Contact</h3>
            <p className="text-gray-400 text-sm">
              Email: info@techartistrydesigns.com
            </p>
            <p className="text-gray-400 text-sm">Phone: +27 123 456 789</p>
            <p className="text-gray-400 text-sm">Location: Johannesburg, South Africa</p>
          </div>   

          {/* Back to Top Button */}
          {showScrollToTop && (
            <button
              onClick={scrollToTop}
              className="fixed bottom-6 right-6 bg-purple-600 text-white p-3 rounded-full shadow-lg hover:bg-purple-500 transition duration-300"
            >
              <FaArrowUp />
            </button>
          )}
        </div>
      </footer>

       {/* Popup */}
{isPopupVisible && (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
    <div className="bg-white p-6 rounded-lg max-w-3xl w-full h-full overflow-y-auto relative flex flex-col">
      <div className="flex-1">{popupContent}</div>
      <div className="mt-4 flex justify-center">
        <button
          onClick={closePopup}
          className="px-6 py-3 bg-purple-600 text-white font-bold rounded-lg shadow-md hover:bg-purple-700 transition duration-300"
        >
          Close
        </button>
      </div>
    </div>
  </div>
)}

    </>
  );
};

export default Footer;
