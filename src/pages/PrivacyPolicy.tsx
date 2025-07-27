
import React from 'react';
import { Shield, Lock, Eye, Database } from 'lucide-react';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
          <div className="w-20 h-1 bg-amber-600 rounded-full mx-auto mb-6"></div>
          <p className="text-lg text-gray-600">
            Your privacy is important to us. This policy explains how we collect, use, and protect your information.
          </p>
          <p className="text-sm text-gray-500 mt-4">Last updated: January 2024</p>
        </div>

        {/* Content */}
        <div className="bg-white rounded-2xl shadow-lg p-8 space-y-8">
          <section>
            <div className="flex items-center mb-4">
              <Database className="h-6 w-6 text-amber-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">Information We Collect</h2>
            </div>
            <div className="space-y-4 text-gray-600">
              <p>We collect information you provide directly to us when you:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Contact us through our website forms</li>
                <li>Place orders for our products</li>
                <li>Subscribe to our newsletter</li>
                <li>Interact with our social media accounts</li>
              </ul>
              <p>This may include your name, email address, phone number, shipping address, and payment information.</p>
            </div>
          </section>

          <section>
            <div className="flex items-center mb-4">
              <Eye className="h-6 w-6 text-amber-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">How We Use Your Information</h2>
            </div>
            <div className="space-y-4 text-gray-600">
              <p>We use the information we collect to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Process and fulfill your orders</li>
                <li>Communicate with you about your purchases</li>
                <li>Send you promotional materials (with your consent)</li>
                <li>Improve our products and services</li>
                <li>Comply with legal obligations</li>
              </ul>
            </div>
          </section>

          <section>
            <div className="flex items-center mb-4">
              <Shield className="h-6 w-6 text-amber-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">Information Protection</h2>
            </div>
            <div className="space-y-4 text-gray-600">
              <p>We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. This includes:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Secure data transmission using SSL encryption</li>
                <li>Limited access to personal information</li>
                <li>Regular security assessments</li>
                <li>Secure payment processing through trusted providers</li>
              </ul>
            </div>
          </section>

          <section>
            <div className="flex items-center mb-4">
              <Lock className="h-6 w-6 text-amber-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">Your Rights</h2>
            </div>
            <div className="space-y-4 text-gray-600">
              <p>You have the right to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Access your personal information</li>
                <li>Correct inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Opt-out of marketing communications</li>
                <li>File a complaint with relevant authorities</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
            <div className="text-gray-600">
              <p>If you have questions about this Privacy Policy, please contact us:</p>
              <div className="mt-4 space-y-2">
                <p><strong>Email:</strong> Asifinternational225@gmail.com</p>
                <p><strong>Phone:</strong> +91 7880722916</p>
                <p><strong>Address:</strong> 12/4, Juhi Safed Colony, Kanpur – 208014, India</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
