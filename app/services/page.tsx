'use client';

import ServiceCard from '@/components/ServiceCard';
import { Scissors, Sparkles, Palette, Waves, Zap, Star } from 'lucide-react';

const services = [
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
    title: 'Facial',
    description: 'Refreshing facial treatment to cleanse and hydrate your skin.',
    image: '/services/facial.jpg',
    features: ['Deep Cleansing', 'Exfoliation', 'Moisturizing'],
  },
  {
    title: 'Hair Straightening & Curling',
    description: 'Professional hair straightening and curling to achieve the perfect look.',
    image: '/services/straightening_curling.jpg',
    features: ['Heat Styling', 'Smoothing Treatment', 'Long-Lasting Hold'],
  },
  {
    title: 'Head Massage & Oil Treatment',
    description: 'Relaxing head massage with nourishing oils to strengthen hair and reduce stress.',
    image: '/services/head_massage.png',
    features: ['Oil Application', 'Scalp Massage', 'Hair Nourishment'],
  },
  {
    title: 'Hair Coloring',
    description: 'Modern hair coloring techniques for a fresh, natural, and vibrant look.',
    image: '/services/hair_coloring.jpg',
    features: ['Color Consultation', 'Application', 'Aftercare Advice'],
  },
];

const addons = [
  { name: 'Hot Towel Shave', price: '$20' },
  { name: 'Hair Treatment', price: '$15' },
  { name: 'Eyebrow Trim', price: '$10' },
  { name: 'Grey Blending', price: '$25' },
];

export default function Services() {
  return (
    <div className="min-h-screen bg-black pt-20">
      <div
        className="relative h-[60vh] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/1570806/pexels-photo-1570806.jpeg?auto=compress&cs=tinysrgb&w=1920)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/50" />
        <div className="relative text-center px-4">
          <div className="inline-block mb-4 px-4 py-1.5 bg-blue-800/10 border border-blue-800/30 rounded-full">
            <span className="text-blue-800 text-sm font-semibold tracking-wider">
              PREMIUM SERVICES
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-blue-800 mb-6">
            Our <span className="text-gray-300">Services</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Exceptional grooming services crafted for the modern gentleman
          </p>
        </div>
      </div>

      <section className="py-20 bg-gradient-to-b from-zinc-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
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
        </div>
      </section>
      <section className="py-20 bg-gradient-to-b from-zinc-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-blue-800/10 to-blue-600/10 border border-blue-800/20 rounded-2xl p-12 md:p-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Look Your Best?
            </h2>
            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
              Book your appointment now and experience the EliteCuts difference
            </p>
            <button className="inline-block px-10 py-5 bg-blue-800 text-black font-bold text-lg rounded-lg hover:bg-blue-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-blue-800/50">
              Schedule Appointment
            </button>
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
