
import React, { useState, useEffect } from 'react';
import { Shield, Clock, CheckCircle, AlertTriangle } from 'lucide-react';

export default function Warranty() {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setShowModal(true);
  }, []);

  return (
    <div>
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-xl shadow-lg p-8 max-w-md w-full relative">
            <button
              className="absolute top-2 right-2 text-gray-400 hover:text-gray-700 text-2xl font-bold"
              onClick={() => setShowModal(false)}
              aria-label="Close Modal"
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold mb-3 text-gray-900">Important Notice</h2>
            <p className="text-gray-700 mb-2">Welcome to our Warranty page!</p>
            <p className="text-gray-600">Review the policy details below. Contact us if you have any questions about coverage or claims.</p>
          </div>
        </div>
      )}
      <div className="min-h-screen bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Warranty Policy</h1>
          <div className="w-20 h-1 bg-amber-600 rounded-full mx-auto mb-6"></div>
          <p className="text-lg text-gray-600">
            We stand behind the quality of our handcrafted saddles and equestrian equipment.
          </p>
          <p className="text-sm text-gray-500 mt-4">Effective from January 2024</p>
        </div>

        {/* Content */}
        <div className="bg-white rounded-2xl shadow-lg p-8 space-y-8">
          <section>
            <div className="flex items-center mb-4">
              <Shield className="h-6 w-6 text-amber-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">Warranty Coverage</h2>
            </div>
            <div className="text-gray-600 space-y-4">
              <p>Saddle Fusion provides warranty coverage for:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Manufacturing defects</strong> in materials and workmanship</li>
                <li><strong>Structural integrity</strong> of the saddle tree and frame</li>
                <li><strong>Hardware failures</strong> including buckles, rings, and fittings</li>
                <li><strong>Leather quality issues</strong> such as premature cracking or splitting</li>
                <li><strong>Stitching defects</strong> that affect product functionality</li>
              </ul>
            </div>
          </section>

          <section>
            <div className="flex items-center mb-4">
              <Clock className="h-6 w-6 text-amber-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">Warranty Periods</h2>
            </div>
            <div className="text-gray-600 space-y-4">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-amber-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Premium Saddles</h3>
                  <p><strong>2 Years</strong> comprehensive warranty</p>
                </div>
                <div className="bg-amber-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Standard Saddles</h3>
                  <p><strong>1 Year</strong> comprehensive warranty</p>
                </div>
                <div className="bg-amber-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Accessories</h3>
                  <p><strong>6 Months</strong> limited warranty</p>
                </div>
                <div className="bg-amber-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Custom Orders</h3>
                  <p><strong>1 Year</strong> manufacturing defects only</p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <div className="flex items-center mb-4">
              <CheckCircle className="h-6 w-6 text-amber-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">What's Covered</h2>
            </div>
            <div className="text-gray-600 space-y-4">
              <p>Our warranty covers repairs or replacement for:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Defective materials or poor workmanship</li>
                <li>Broken or faulty hardware components</li>
                <li>Premature wear under normal usage conditions</li>
                <li>Structural failures in the saddle tree</li>
                <li>Manufacturing-related leather defects</li>
              </ul>
            </div>
          </section>

          <section>
            <div className="flex items-center mb-4">
              <AlertTriangle className="h-6 w-6 text-amber-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">What's Not Covered</h2>
            </div>
            <div className="text-gray-600 space-y-4">
              <p>This warranty does not cover:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Normal wear and tear from regular use</li>
                <li>Damage from misuse, abuse, or accidents</li>
                <li>Damage from improper storage or care</li>
                <li>Modifications made by unauthorized persons</li>
                <li>Damage from extreme weather conditions</li>
                <li>Color fading or minor surface scratches</li>
                <li>Damage from improper cleaning products</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Warranty Claims</h2>
            <div className="text-gray-600 space-y-4">
              <p>To make a warranty claim:</p>
              <ol className="list-decimal pl-6 space-y-2">
                <li>Contact us within the warranty period</li>
                <li>Provide proof of purchase and photos of the issue</li>
                <li>Allow us to inspect the product (may require return shipping)</li>
                <li>We will repair, replace, or provide store credit at our discretion</li>
              </ol>
              <div className="bg-blue-50 p-4 rounded-lg mt-6">
                <p className="font-medium text-blue-900">
                  For warranty claims, shipping costs to our facility are customer's responsibility. 
                  Return shipping for valid warranty claims is covered by Saddle Fusion.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact for Warranty</h2>
            <div className="text-gray-600">
              <p>For warranty claims and support:</p>
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
  </div>
  );
}
