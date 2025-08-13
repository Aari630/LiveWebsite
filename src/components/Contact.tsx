import React, { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Optionally, integrate with a backend/email service here
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 lg:py-32 bg-gray-50 border-t border-gray-200">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Contact Us</h2>
        <div className="w-20 h-1 bg-amber-600 rounded-full mx-auto mb-8"></div>
        <p className="text-lg text-gray-600 mb-10">
          Questions, custom saddle requests, wholesale inquiries? We’d love to hear from you!
        </p>
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-10">
          {submitted ? (
            <div className="text-green-600 font-bold text-xl py-8">Thank you! We'll be in touch soon.</div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:ring-amber-500 focus:border-amber-500"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                  className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:ring-amber-500 focus:border-amber-500"
                />
              </div>
              <div>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  rows={5}
                  required
                  className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:ring-amber-500 focus:border-amber-500"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-amber-600 text-white font-semibold py-3 rounded-lg hover:bg-amber-700 transition-colors text-lg shadow-md"
              >
                Send Message
              </button>
            </form>
          )}
        </div>
        <div className="text-gray-600 text-base space-y-2">
          <div><span className="font-semibold">Email:</span> info@your-saddleshop.com</div>
          <div><span className="font-semibold">Phone:</span> +1 (555) 123-4567</div>
          <div><span className="font-semibold">Address:</span> 123 Saddle Lane, Horse City, Country</div>
        </div>
      </div>
    </section>
  );
}
