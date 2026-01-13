'use client';

import { Award, Target, Heart, Users, TrendingUp, Shield } from 'lucide-react';
import Image from 'next/image';

const values = [
  {
    icon: Award,
    title: 'Excellence',
    description: 'Committed to delivering the highest quality service in every cut',
  },
  {
    icon: Heart,
    title: 'Passion',
    description: 'We love what we do and it shows in every detail',
  },
  {
    icon: Users,
    title: 'Community',
    description: 'Building lasting relationships with our clients',
  },
  {
    icon: TrendingUp,
    title: 'Innovation',
    description: 'Staying ahead with the latest trends and techniques',
  },
  {
    icon: Shield,
    title: 'Trust',
    description: 'Your comfort and satisfaction are our top priorities',
  },
  {
    icon: Target,
    title: 'Precision',
    description: 'Meticulous attention to detail in every service',
  },
];

const team = [
  {
    name: 'Moorthy',
    role: 'Master Barber',
    experience: '35+ Years',
    image: '',
  },
  {
    name: 'Bharath',
    role: 'Senior Stylist',
    experience: '7 Years',
    image: '',
  },

];

export default function About() {
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
              OUR STORY
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-blue-800 mb-6">
            About <span className="text-gray-300">BlueDiamond</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Crafting excellence in men's grooming since 1989
          </p>
        </div>
      </div>

      <section className="py-20 bg-gradient-to-b from-zinc-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-blue-800 mb-6">
                Our <span className="text-gray-300">Journey</span>
              </h2>
              <p className="text-gray-400 text-lg mb-6 leading-relaxed">
                Founded in 1989, <span className="text-blue-800 font-semibold">Blue</span><span className="text-gray-300 font-semibold">Diamond</span> was established with a clear purpose: to deliver exceptional grooming services that blend classic barbering techniques with modern style and precision.
              </p>
              <p className="text-gray-400 text-lg mb-6 leading-relaxed">
                What began as a trusted local barbershop has grown into a respected grooming destination, serving generations of loyal clients. Our reputation is built on quality craftsmanship, personalized service, and attention to detail.
              </p>
              <p className="text-gray-400 text-lg leading-relaxed">
                Today, <span className="text-blue-800 font-semibold">Blue</span><span className="text-gray-300 font-semibold">Diamond</span> continues to set the standard in men’s grooming-offering premium haircuts, beard styling, and complete grooming solutions while honoring the traditions that define our legacy.
              </p>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-blue-800/20 blur-3xl" />
              <img
                src="https://images.pexels.com/photos/1319461/pexels-photo-1319461.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Barbershop interior"
                className="relative rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-4 py-1.5 bg-blue-800/10 border border-blue-800/30 rounded-full">
              <span className="text-blue-800 text-sm font-semibold tracking-wider">
                WHAT WE STAND FOR
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-blue-800 mb-4">
              Our <span className="text-gray-300">Values</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-zinc-900 to-black border border-blue-800/20 rounded-xl p-8 hover:border-blue-800/50 transition-all duration-500"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
                }}
              >
                <div className="mb-4 inline-block p-4 bg-blue-800/10 rounded-xl group-hover:bg-blue-800/20 transition-all duration-300">
                  <value.icon className="h-8 w-8 text-blue-800 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-800 transition-colors duration-300">
                  {value.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-zinc-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-4 py-1.5 bg-blue-800/10 border border-blue-800/30 rounded-full">
              <span className="text-blue-800 text-sm font-semibold tracking-wider">
                MEET THE EXPERTS
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-blue-800 mb-4">
              Our <span className="text-gray-300">Master Barbers</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Experienced professionals dedicated to making you look your best
            </p>
          </div>
          <div className="flex justify-center gap-8 flex-wrap">
            {team.map((member, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-zinc-900 to-black 
      border border-blue-800/20 rounded-xl overflow-hidden 
      hover:border-blue-800/50 transition-all duration-500 w-[300px]"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
                }}
              >
                <div className="relative h-80 overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 300px"
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                </div>

                <div className="p-6 text-center">
                  <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-blue-800 transition">
                    {member.name}
                  </h3>

                  <p className="text-blue-800 font-semibold">
                    {member.role}
                  </p>

                  <p className="text-gray-400 text-sm mt-1">
                    {member.experience} Experience
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section >

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
    </div >
  );
}
