
import React from 'react';
import { FileText, AlertCircle, Users, CreditCard } from 'lucide-react';

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms of Service</h1>
          <div className="w-20 h-1 bg-amber-600 rounded-full mx-auto mb-6"></div>
          <p className="text-lg text-gray-600">
            Please read these terms carefully before using our services or purchasing our products.
          </p>
          <p className="text-sm text-gray-500 mt-4">Last updated: January 2024</p>
        </div>

        {/* Content */}
        <div className="bg-white rounded-2xl shadow-lg p-8 space-y-8">
          <section>
            <div className="flex items-center mb-4">
              <FileText className="h-6 w-6 text-amber-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">Acceptance of Terms</h2>
            </div>
            <div className="text-gray-600 space-y-4">
              <p>
                By accessing our website or purchasing our products, you agree to be bound by these Terms of Service. 
                If you disagree with any part of these terms, you may not access our service or purchase our products.
              </p>
            </div>
          </section>

          <section>
            <div className="flex items-center mb-4">
              <Users className="h-6 w-6 text-amber-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">Products and Services</h2>
            </div>
            <div className="text-gray-600 space-y-4">
              <p>Saddle Fusion specializes in handcrafted saddles and equestrian equipment. We guarantee:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>All products are handcrafted with premium materials</li>
                <li>Each saddle undergoes quality inspection before shipment</li>
                <li>Products are made to order and may require processing time</li>
                <li>Custom modifications are available upon request</li>
              </ul>
            </div>
          </section>

          <section>
            <div className="flex items-center mb-4">
              <CreditCard className="h-6 w-6 text-amber-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">Orders and Payment</h2>
            </div>
            <div className="text-gray-600 space-y-4">
              <p>When placing an order with us:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>All prices are listed in Indian Rupees (INR)</li>
                <li>Payment is required before production begins</li>
                <li>We accept various payment methods including bank transfer and UPI</li>
                <li>Custom orders require 50% advance payment</li>
                <li>Delivery times vary based on product complexity and location</li>
              </ul>
            </div>
          </section>

          <section>
            <div className="flex items-center mb-4">
              <AlertCircle className="h-6 w-6 text-amber-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">Returns and Exchanges</h2>
            </div>
            <div className="text-gray-600 space-y-4">
              <p>Due to the custom nature of our products:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Returns are accepted only for manufacturing defects</li>
                <li>Custom-made products cannot be returned unless defective</li>
                <li>Return requests must be made within 7 days of delivery</li>
                <li>Products must be in original condition for returns</li>
                <li>Return shipping costs are borne by the customer unless the item is defective</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Limitation of Liability</h2>
            <div className="text-gray-600 space-y-4">
              <p>
                Saddle Fusion shall not be liable for any indirect, incidental, special, consequential, 
                or punitive damages resulting from your use of our products or services.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h2>
            <div className="text-gray-600">
              <p>For questions about these Terms of Service:</p>
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
