'use client';

import ServiceCard from '@/components/ServiceCard';
import { Scissors, Sparkles, Palette, Waves, Zap, Star } from 'lucide-react';

const services = [

  {
    title: 'Haircut & Styling',
    description:
      'Precision haircuts tailored to your face shape and personal style.',
    image: '/services/haircut.jpg',
    features: ['Style Consultation', 'Wash & Cut', 'Professional Styling'],
  },
  {
    title: 'Beard Grooming',
    description:
      'Expert beard trimming, shaping, and premium grooming care.',
    image: '/services/beard.jpg',
    features: ['Hot Towel Treatment', 'Trim & Shape', 'Premium Beard Oil'],
  },
  {
    title: 'Hair Straightening',
    description:
      'Professional straightening treatment for smooth and manageable hair.',
    image: '/services/straightening_curling.jpg',
    features: ['Hair Analysis', 'Smoothing Process', 'Long-Lasting Results'],
  },
  {
    title: 'Hair Smoothening',
    description:
      'Advanced smoothening treatment to reduce frizz and add shine.',
    image: '/services/smoothening.jpg',
    features: ['Frizz Control', 'Soft Finish', 'Damage Protection'],
  },
  {
    title: 'Keratin Treatment',
    description:
      'Keratin-based treatment to strengthen, smooth, and repair damaged hair.',
    image: '/services/keratin.jpg',
    features: ['Protein Infusion', 'Hair Repair', 'Glossy Finish'],
  },
  {
    title: 'Botox Treatment',
    description:
      'Deep conditioning treatment that restores moisture and hair health.',
    image: '/services/botox.jpg',
    features: ['Deep Nourishment', 'Hair Repair', 'Instant Shine'],
  },
  {
    title: 'Nanoplastia Treatment',
    description:
      'Advanced hair treatment for smooth, straight, and healthy hair.',
    image: '/services/nanoplastia.jpg',
    features: ['Formaldehyde-Free', 'Long-Lasting Effect', 'Hair Strength'],
  },
  {
    title: 'Head Oil Massage',
    description:
      'Relaxing head massage with nourishing oils for scalp health.',
    image: '/services/head_massage.png',
    features: ['Oil Application', 'Scalp Massage', 'Stress Relief'],
  },
  {
    title: 'Bleaching',
    description:
      'Professional bleaching service to brighten skin tone and remove tan.',
    image: '/services/bleaching.jpg',
    features: ['Even Skin Tone', 'Gentle Products', 'Instant Glow'],
  },
  {
    title: 'Clean-Up',
    description:
      'Quick skin clean-up treatment to remove impurities and refresh your face.',
    image: '/services/cleanup.jpg',
    features: ['Deep Cleansing', 'Exfoliation', 'Skin Refresh'],
  },
  {
    title: 'De-Tan',
    description:
      'Effective de-tan treatment to remove sun tan and restore natural skin tone.',
    image: '/services/detan.jpg',
    features: ['Tan Removal', 'Cooling Mask', 'Brightening Effect'],
  },
  {
    title: 'Facial (Normal / Advanced)',
    description:
      'Customized facial treatments for healthy, glowing, and rejuvenated skin.',
    image: '/services/facial.jpg',
    features: ['Skin Analysis', 'Massage Therapy', 'Hydration & Glow'],
  },
  {
    title: 'Manicure',
    description:
      'Complete hand care treatment for clean, soft, and well-groomed hands.',
    image: '/services/manicure.jpg',
    features: ['Nail Shaping', 'Cuticle Care', 'Hand Massage'],
  },
  {
    title: 'Pedicure',
    description:
      'Relaxing foot care treatment for healthy, smooth, and refreshed feet.',
    image: '/services/pedicure.jpg',
    features: ['Foot Soak', 'Heel Care', 'Foot Massage'],
  },
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
