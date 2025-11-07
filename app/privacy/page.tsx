import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy - Noghte Vorood Podcast',
  description: 'Privacy policy for Noghte Vorood podcast website.',
};

const PrivacyPage = () => {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      <main className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            {/* Hero Section */}
            <div className="text-center mb-16">
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
                Privacy Policy
              </h1>
              <div className="w-24 h-1 bg-[#00704A] mx-auto mb-8"></div>
              <p className="text-xl text-white/80 leading-relaxed">
                Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </div>

            {/* Main Content */}
            <div className="bg-white/5 rounded-2xl p-8 lg:p-12">
              <div className="prose prose-invert prose-lg max-w-none space-y-8">
                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">Introduction</h2>
                  <p className="text-white/90 leading-relaxed">
                    Noghte Vorood ("we," "our," or "us") is committed to protecting your privacy. 
                    This Privacy Policy explains how we collect, use, disclose, and safeguard your information 
                    when you visit our website or interact with our podcast content.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">Information We Collect</h2>
                  <p className="text-white/90 leading-relaxed mb-4">
                    We may collect information about you in a variety of ways, including:
                  </p>
                  <ul className="space-y-2 text-white/80">
                    <li><strong>Personal Data:</strong> Email addresses when you subscribe to our newsletter</li>
                    <li><strong>Usage Data:</strong> Information about how you access and use our website</li>
                    <li><strong>Cookies:</strong> Data collected through cookies and similar tracking technologies</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">How We Use Your Information</h2>
                  <p className="text-white/90 leading-relaxed mb-4">
                    We use the information we collect to:
                  </p>
                  <ul className="space-y-2 text-white/80">
                    <li>Send you newsletters and updates about new episodes</li>
                    <li>Improve our website and podcast content</li>
                    <li>Respond to your inquiries and provide customer support</li>
                    <li>Analyze usage patterns to enhance user experience</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">Third-Party Services</h2>
                  <p className="text-white/90 leading-relaxed mb-4">
                    We may use third-party services that collect, monitor, and analyze data, including but not limited to:
                  </p>
                  <ul className="space-y-2 text-white/80">
                    <li>Substack for newsletter distribution</li>
                    <li>YouTube for video hosting</li>
                    <li>Podcast hosting platforms (Spotify, Apple Podcasts, Castbox)</li>
                  </ul>
                  <p className="text-white/90 leading-relaxed mt-4">
                    These third parties have their own privacy policies addressing how they use such information.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">Data Security</h2>
                  <p className="text-white/90 leading-relaxed">
                    We use administrative, technical, and physical security measures to protect your personal information. 
                    However, no method of transmission over the Internet or electronic storage is 100% secure, 
                    and we cannot guarantee absolute security.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">Your Rights</h2>
                  <p className="text-white/90 leading-relaxed mb-4">
                    You have the right to:
                  </p>
                  <ul className="space-y-2 text-white/80">
                    <li>Access the personal information we hold about you</li>
                    <li>Request correction of inaccurate information</li>
                    <li>Request deletion of your personal information</li>
                    <li>Opt-out of marketing communications at any time</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">Children's Privacy</h2>
                  <p className="text-white/90 leading-relaxed">
                    Our website and services are not intended for children under the age of 13. 
                    We do not knowingly collect personal information from children under 13.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">Changes to This Privacy Policy</h2>
                  <p className="text-white/90 leading-relaxed">
                    We may update our Privacy Policy from time to time. We will notify you of any changes 
                    by posting the new Privacy Policy on this page and updating the "Last updated" date.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
                  <p className="text-white/90 leading-relaxed">
                    If you have any questions about this Privacy Policy, please contact us at:
                  </p>
                  <p className="text-[#00704A] font-semibold mt-2">
                    <a href="mailto:info@noghtevorood.com" className="hover:text-[#009962] transition-colors">
                      info@noghtevorood.com
                    </a>
                  </p>
                </section>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PrivacyPage;

