// "use client";
// import Image from "next/image";
// import { useState } from "react";
// import { motion } from "framer-motion";




//  const styles = [
//   { id: 1, name: "Wolf Cut", img: "" },
//   { id: 2, name: "Mullet", img: "" },
//   { id: 3, name: "Wavy Hair", img: "" },
//   { id: 4, name: "Korean Perm", img: "" },
//   { id: 5, name: "Fringe Cut", img: "" },
//   { id: 6, name: "Pompadour", img: "" },
//   { id: 7, name: "Faux Hawk", img: "" },
//   { id: 8, name: "Spiky Hair", img: "" },
//   { id: 9, name: "Fade Cut", img: "" },
//   { id: 10, name: "Quiff", img: "" },
//   { id: 11, name: "Undercut", img: "" },  
//   { id: 12, name: "Textured Crop", img: "" }
// ];


// export default function GalleryPage() {
//   const [openId, setOpenId] = useState<number | null>(null);

//   return (
//     <div className="min-h-screen bg-neutral-950 px-4 py-12">
//       <div
//         className="relative h-[60vh] flex items-center justify-center bg-cover bg-center"
//         style={{
//           backgroundImage: 'url(https://images.pexels.com/photos/1570806/pexels-photo-1570806.jpeg?auto=compress&cs=tinysrgb&w=1920)',
//         }}
//       >
//         <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/50" />
//         <div className="relative text-center px-4">
//           <div className="inline-block mb-4 px-4 py-1.5 bg-blue-800/10 border border-blue-800/30 rounded-full">
//             <span className="text-blue-800 text-sm font-semibold tracking-wider">
//               Style Gallery
//             </span>
//           </div>
//           <h1 className="text-5xl md:text-7xl font-bold text-blue-800 mb-6">
//             Pick Your <span className="text-gray-300"> Next Look</span>
//           </h1>
//           <p className="text-xl text-gray-300 max-w-2xl mx-auto">
//            Explore expertly crafted hair and beard styles. Tap a look to see details and make it yours.
//           </p>
//         </div>
//       </div>

//         <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4">
//           {styles.map((style) => (
//             <div
//               key={style.id}
//               className="overflow-hidden rounded-2xl bg-neutral-900 shadow-lg transition-all"
//             >
//               {/* Image */}
//               <button
//                 onClick={() => setOpenId(openId === style.id ? null : style.id)}
//                 className="relative h-60 w-full focus:outline-none"
//               >
//                 <Image
//                   src={style.img}
//                   alt={style.name}
//                   fill
//                   className="object-cover transition-transform duration-500 hover:scale-110"
//                 />
//                 <div className="absolute inset-0 bg-black/40" />
//                 <h3 className="absolute bottom-4 left-4 text-lg font-semibold text-white">
//                   {style.name}
//                 </h3>
//               </button>
//             </div>
            
//           ))}
//         </div>
//       </div>
//   );

// }




"use client";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

const styles = [
  { id: 1, name: "Wolf Cut", img: "team/ganesh.jpeg" },
  { id: 2, name: "Mullet", img: "https://images.pexels.com/photos/3991586/pexels-photo-3991586.jpeg" },
  { id: 3, name: "Wavy Hair", img: "https://images.pexels.com/photos/3991584/pexels-photo-3991584.jpeg" },
  { id: 4, name: "Korean Perm", img: "https://images.pexels.com/photos/3991583/pexels-photo-3991583.jpeg" },
  { id: 5, name: "Fringe Cut", img: "https://images.pexels.com/photos/3991582/pexels-photo-3991582.jpeg" },
  { id: 6, name: "Pompadour", img: "https://images.pexels.com/photos/3991581/pexels-photo-3991581.jpeg" },
  { id: 7, name: "Faux Hawk", img: "https://images.pexels.com/photos/3991580/pexels-photo-3991580.jpeg" },
  { id: 8, name: "Spiky Hair", img: "https://images.pexels.com/photos/3991579/pexels-photo-3991579.jpeg" },
  { id: 9, name: "Fade Cut", img: "https://images.pexels.com/photos/3991578/pexels-photo-3991578.jpeg" },
  { id: 10, name: "Quiff", img: "https://images.pexels.com/photos/3991577/pexels-photo-3991577.jpeg" },
  { id: 11, name: "Undercut", img: "https://images.pexels.com/photos/3991576/pexels-photo-3991576.jpeg" },
  { id: 12, name: "Textured Crop", img: "https://images.pexels.com/photos/3991575/pexels-photo-3991575.jpeg" }
];

export default function GalleryPage() {
  const [openId, setOpenId] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-neutral-950 px-4 py-12">
      {/* Hero Section */}
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
              Style Gallery
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-blue-800 mb-6">
            Pick Your <span className="text-gray-300"> Next Look</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Explore expertly crafted hair and beard styles. Tap a look to see details and make it yours.
          </p>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-12">
        {styles.map((style, index) => (
          <motion.div
            key={style.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
            className="relative rounded-2xl overflow-hidden shadow-lg"
          >
            <button
              onClick={() => setOpenId(openId === style.id ? null : style.id)}
              className="relative h-64 w-full focus:outline-none"
            >
              {/* Glassmorphism Background */}
              <div className="absolute inset-0 bg-white/5  rounded-2xl border border-white/10 z-10 transition-all duration-500 hover:scale-105 hover:bg-white/10" />
              <Image
                src={style.img}
                alt={style.name}
                fill
                className="object-cover rounded-2xl transition-transform duration-500 hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/30 rounded-2xl" />
              <h3 className="absolute bottom-4 left-4 text-lg font-semibold text-white z-20">
                {style.name}
              </h3>
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
