'use client';

import HeroSlider from '@/components/HeroSlider';
import ServiceCard from '@/components/ServiceCard';
import { Scissors, Sparkles, Palette, Waves, Award, Users, Clock, MapPin } from 'lucide-react';
import Link from 'next/link';

const featuredServices = [
  {
    title: 'Haircut & Styling',
    description: 'Precision haircuts tailored to your face shape and personal style.',
    image: '/services/haircut.jpg',
    features: ['Style Consultation', 'Wash & Cut', 'Professional Styling'],
  },
  {
    title: 'Beard Grooming',
    description: 'Expert beard trimming, shaping, and conditioning.',
    image: '/services/beard.jpg',
    features: ['Hot Towel Treatment', 'Trim & Shape', 'Premium Beard Oil'],
  },
  {
    title: 'Facial ',
    description: 'Refreshing facial treatment to cleanse and hydrate your skin.',
    image: '/services/facial.jpg',
    features: ['Deep Cleansing', 'Exfoliation', 'Moisturizing'],
  },
];

const stats = [
  { icon: Users, value: '10K+', label: 'Happy Clients' },
  { icon: Award, value: '15+', label: 'Years Experience' },
  { icon: Scissors, value: '50K+', label: 'Haircuts Done' },
  { icon: Clock, value: '24/7', label: 'Booking Available' },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <HeroSlider />

      <section className="py-20 bg-gradient-to-b from-black to-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center group"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
                }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-800/10 rounded-full mb-4 group-hover:bg-blue-800/20 transition-all duration-300">
                  <stat.icon className="h-8 w-8 text-blue-800 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-4 py-1.5 bg-blue-800/10 border border-blue-800/30 rounded-full">
              <span className="text-blue-800 text-sm font-semibold tracking-wider">
                WHAT WE OFFER
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-blue-800 mb-4">
              Premium <span className="text-gray-300">Services</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Experience the finest grooming services tailored for the modern gentleman
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredServices.map((service, index) => (
              <div
                key={index}
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
                }}
              >
                <ServiceCard {...service} />
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-block px-8 py-4 bg-blue-800 text-black font-bold rounded-lg hover:bg-blue-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-blue-800/50"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-800/5 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block mb-4 px-4 py-1.5 bg-blue-800/10 border border-blue-800/30 rounded-full">
                <span className="text-blue-800 text-sm font-semibold tracking-wider">
                  WHY CHOOSE US
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-blue-800 mb-6">
                Excellence in Every <span className="text-gray-300">Detail</span>
              </h2>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
               At <span className="text-blue-800">Blue</span><span className="text-gray-300">Diamond</span>, we believe grooming is an art form. Since 1992, our master barbers have been combining classic techniques with modern styles to deliver exceptional results every time.
              </p>

              <div className="space-y-4">
                {[
                  'Expert Barbers with 15+ years of experience',
                  'Premium Quality Products & Tools for flawless results',
                  'Comfortable & Luxurious Environment to relax and unwind',
                  'Personalized Consultations tailored to each client’s style and needs',
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-blue-800/20 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-blue-800 rounded-full" />
                    </div>
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>

              <Link
                href="/about"
                className="inline-block mt-8 px-8 py-4 bg-transparent border-2 border-blue-800 text-blue-800 font-bold rounded-lg hover:bg-blue-800 hover:text-black transition-all duration-300"
              >
                Learn More About Us
              </Link>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-blue-800/20 blur-3xl" />
              <img
                src="https://images.pexels.com/photos/1813272/pexels-photo-1813272.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Barber at work"
                className="relative rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-zinc-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-blue-500/10 to-blue-600/10 border border-blue-500/20 rounded-2xl p-12 md:p-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready for a Fresh Look?
            </h2>
            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
              Book your appointment today and experience the EliteCuts difference
            </p>
            <Link
              href="/contact"
              className="inline-block px-10 py-5 bg-blue-500 text-black font-bold text-lg rounded-lg hover:bg-blue-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-blue-500/50"
            >
              Book Your Appointment
            </Link>
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
