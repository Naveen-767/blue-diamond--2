import Image from 'next/image';

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  features: string[];
}

export default function ServiceCard({
  title,
  description,
  image,
  features,
}: ServiceCardProps) {
  return (
    <div className="group relative bg-gradient-to-br from-zinc-900 to-black border border-blue-800/20 rounded-xl overflow-hidden hover:border-blue-800/50 transition-all duration-500">

      {/* Background hover glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-800/0 to-blue-800/0 group-hover:from-blue-800/5 group-hover:to-blue-800/10 transition-all duration-500" />

      {/* Image section */}
      <div className="relative h-56 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative p-8">
        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-800 transition-colors duration-300">
          {title}
        </h3>

        <p className="text-gray-400 mb-4 leading-relaxed">
          {description}
        </p>

        <ul className="space-y-2 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-gray-300">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-800 mr-3" />
              {feature}
            </li>
          ))}
        </ul>

        <button className="w-full py-3 bg-transparent border-2 border-blue-800/30 text-blue-800 font-semibold rounded-lg hover:bg-blue-800 hover:text-black hover:border-blue-800 transition-all duration-300 group-hover:scale-105">
          Book Now
        </button>
      </div>

      {/* Corner glow */}
      <div className="absolute -bottom-10 -right-10 h-32 w-32 bg-blue-800/5 rounded-full blur-3xl group-hover:bg-blue-800/10 transition-all duration-500" />
    </div>
  );
}
