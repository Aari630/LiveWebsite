import React, { useState, useEffect } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    const element = document.getElementById("contact");
    if (element) observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Image/Side */}
          <div
            className={`relative transition-all duration-1000 transform ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0"}`}
          >
            <div className="relative">
              <img
                src="contact.jpg"
                alt="Contact our Saddle Shop"
                className="w-full h-96 lg:h-[500px] object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl"></div>
              {/* Overlay Card */}
              <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-xl shadow-xl max-w-xs text-left flex flex-col gap-3">
                <div className="flex items-center text-amber-600 font-bold text-lg"><Mail className="mr-2 h-5 w-5" /> Asifinternational225@gmail.com</div>
                <div className="flex items-center text-amber-600 font-bold text-lg"><Phone className="mr-2 h-5 w-5" /> +91 7880722916</div>
                <div className="flex items-center text-gray-600 font-semibold text-base"><MapPin className="mr-2 h-5 w-5" /> 12/4, Juhi Safed Colony,Kanpur – 208014</div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div
            className={`space-y-8 transition-all duration-1000 delay-300 transform ${isVisible ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"}`}
          >
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">Contact Us</h2>
              <div className="w-20 h-1 bg-amber-600 rounded-full"></div>
            </div>
            <p className="text-lg text-gray-600 leading-relaxed">
              Questions, custom saddle requests, or wholesale inquiries? We’d love to hear from you. Fill out the form and our team will respond promptly!
            </p>

            <div className="bg-gray-50 rounded-2xl shadow-xl p-8">
              {submitted ? (
                <div className="text-green-600 font-bold text-xl py-8 flex items-center justify-center space-x-3">
                  <Send className="inline-block h-6 w-6" />
                  <span>Thank you! We'll be in touch soon.</span>
                </div>
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
                    className="w-full bg-amber-600 text-white font-semibold py-3 rounded-lg hover:bg-amber-700 transition-colors text-lg shadow-md flex items-center justify-center gap-2"
                  >
                    <Send className="h-5 w-5" /> Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
