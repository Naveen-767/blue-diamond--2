 'use client';

import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

const contactInfo = [
  {
    icon: MapPin,
    title: 'Visit Us',
    details: ['No.4/101 ECR Road, Thanthai Periyar Street, Neelangarai, Chennai -600115'],
  },
  {
    icon: Phone,
    title: 'Call Us',
    details: ['+91 866805493'],
  },
  {
    icon: Mail,
    title: 'Email Us',
    details: ['bluediamondsalonspa@gmail.com'],
  },
  {
    icon: Clock,
    title: 'Hours',
    details: ['Mon-Fri: 7:00 AM - 9:00 PM', 'Sat-Sun: 6:30 AM - 10:00 PM'],
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-black pt-20">
      <div
        className="relative h-[60vh] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/1570807/pexels-photo-1570807.jpeg?auto=compress&cs=tinysrgb&w=1920)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/50" />
        <div className="relative text-center px-4">
          <div className="inline-block mb-4 px-4 py-1.5 bg-blue-800/10 border border-blue-800/30 rounded-full">
            <span className="text-blue-800 text-sm font-semibold tracking-wider">
              GET IN TOUCH
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-blue-800 mb-6">
            Contact <span className="text-gray-300">Us</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Book your appointment or reach out with any questions
          </p>
        </div>
      </div>

      <section className="py-20 bg-gradient-to-b from-zinc-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-zinc-900 to-black border border-blue-800/20 rounded-xl p-6 hover:border-blue-800/50 transition-all duration-300 group"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
                }}
              >
                <div className="mb-4 inline-block p-3 bg-blue-800/10 rounded-lg group-hover:bg-blue-800/20 transition-all duration-300">
                  <info.icon className="h-6 w-6 text-blue-800" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{info.title}</h3>
                {info.details.map((detail, i) => (
                  <p key={i} className="text-gray-400 overflow-hidden">
                    {detail}
                  </p>
                ))}
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="mb-8">
                <div className="inline-block mb-4 px-4 py-1.5 bg-blue-800/10 border border-blue-800/30 rounded-full">
                  <span className="text-blue-800 text-sm font-semibold tracking-wider">
                    BOOK NOW
                  </span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-blue-800 mb-4">
                  Schedule Your <span className="text-gray-300">Appointment</span>
                </h2>
                <p className="text-gray-400 text-lg leading-relaxed">
                  Fill out the form and we'll get back to you within 24 hours to confirm your booking.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-zinc-900 border border-blue-800/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-800 transition-colors"
                    placeholder="John Doe"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-zinc-900 border border-blue-800/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-800 transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-zinc-900 border border-blue-800/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-800 transition-colors"
                      placeholder="+91 9876543210"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">
                      Service
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-zinc-900 border border-blue-800/20 rounded-lg text-white focus:outline-none focus:border-blue-800 transition-colors"
                    >
                      <option value="">Select a service</option>
                      <option value="Haircut & Styling">Haircut & Styling</option>
                      <option value="Beard Grooming">Beard Grooming</option>
                      <option value="Hair Coloring">Hair Coloring</option>
                      <option value="Facial">Facial</option>
                      <option value="Hair Straightening & Curling">Hair Straightening & Curling</option>
                      <option value="Head Massage & Oil Treatment">Head Massage & Oil Treatment</option>
                      <option value="Others">Others</option>

                    </select>
                  </div>

                  <div>
                    <label htmlFor="date" className="block text-sm font-medium text-gray-300 mb-2">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-zinc-900 border border-blue-800/20 rounded-lg text-white focus:outline-none focus:border-blue-800 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Additional Notes
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 bg-zinc-900 border border-blue-800/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-800 transition-colors resize-none"
                    placeholder="Any specific requirements or preferences..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center space-x-2 px-8 py-4 bg-blue-800 text-black font-bold rounded-lg hover:bg-blue-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-blue-800/50"
                >
                  <span>Send Message</span>
                  <Send className="h-5 w-5" />
                </button>
              </form>
            </div>
            <div className="relative h-[600px] rounded-xl overflow-hidden border border-blue-800/30">
              {/* Buttons */}
              <div className="absolute top-4 right-4 z-20 flex gap-3">
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=12.938681,80.252754"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-blue-800 text-black font-semibold rounded-lg hover:bg-blue-600 transition"
                >
                  Get Directions
                </a>

                <a
                  href="https://www.google.com/maps/search/?api=1&query=12.938681,80.252754"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-zinc-900 text-white border border-blue-800/40 rounded-lg hover:bg-zinc-800 transition"
                >
                  Open in Maps
                </a>
              </div>

              {/* Map */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3888.3618503080934!2d80.254746!3d12.948682000000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTLCsDU2JzU1LjMiTiA4MMKwMTUnMTcuMSJF!5e0!3m2!1sen!2sin!4v1768319529172!5m2!1sen!2sin"
                className="w-full h-full"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
