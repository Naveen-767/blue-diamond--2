import Image from "next/image";
import Link from "next/link";

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
    <div className="group relative bg-zinc-950 border border-zinc-800 rounded-2xl overflow-hidden transition-all duration-500 hover:border-blue-800/60 hover:-translate-y-2 hover:shadow-[0_25px_60px_-15px_rgba(30,64,175,0.4)]">

      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width:768px) 100vw, (max-width:1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Image overlay for text contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

        {/* Floating title */}
        <h3 className="absolute bottom-4 left-4 text-xl sm:text-2xl font-bold text-white">
          {title}
        </h3>
      </div>

      {/* Content */}
      <div className="p-4 sm:p-6">
        <p className="text-gray-400 leading-relaxed mb-5">
          {description}
        </p>

        <ul className="space-y-2 mb-4">
          {features.map((feature, index) => (
            <li
              key={index}
              className="flex items-center text-gray-300 text-sm sm:text-base"
            >
              <span className="h-1 w-1.5 rounded-full bg-blue-800 mr-3" />
              {feature}
            </li>
          ))}
        </ul>

        <Link href="/contact">
          <button className="w-full py-1 rounded-xl bg-blue-800 text-black font-semibold tracking-wide transition-all duration-300 hover:bg-blue-700 hover:scale-[1.03] active:scale-95">
            Book Now
          </button>
        </Link>
      </div>

      {/* Accent line */}
      <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-blue-800/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </div>
  );
}
