"use client";
import Image from "next/image";
import { useState } from "react";



 const styles = [
  { id: 1, name: "Wolf Cut", img: "" },
  { id: 2, name: "Mullet", img: "" },
  { id: 3, name: "Wavy Hair", img: "" },
  { id: 4, name: "Korean Perm", img: "" },
  { id: 5, name: "Fringe Cut", img: "" },
  { id: 6, name: "Pompadour", img: "" },
  { id: 7, name: "Faux Hawk", img: "" },
  { id: 8, name: "Spiky Hair", img: "" },
  { id: 9, name: "Fade Cut", img: "" },
  { id: 10, name: "Quiff", img: "" },
  { id: 11, name: "Undercut", img: "" },  
  { id: 12, name: "Textured Crop", img: "" }
];


export default function GalleryPage() {
  const [openId, setOpenId] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-neutral-950 px-4 py-12">
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

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4">
          {styles.map((style) => (
            <div
              key={style.id}
              className="overflow-hidden rounded-2xl bg-neutral-900 shadow-lg transition-all"
            >
              {/* Image */}
              <button
                onClick={() => setOpenId(openId === style.id ? null : style.id)}
                className="relative h-60 w-full focus:outline-none"
              >
                <Image
                  src={style.img}
                  alt={style.name}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40" />
                <h3 className="absolute bottom-4 left-4 text-lg font-semibold text-white">
                  {style.name}
                </h3>
              </button>

              {/* Collapse content */}
              {/* <div
                className={`overflow-hidden transition-all duration-300 ${
                  openId === style.id ? "max-h-40 p-4" : "max-h-0 p-0"
                }`}
              >
                <p className="text-sm text-neutral-300">{style.desc}</p>
                <button className="mt-3 w-full rounded-lg bg-yellow-500 px-4 py-2 text-sm font-semibold text-black hover:bg-yellow-400">
                  Book This Style
                </button>
              </div> */}
            </div>
          ))}
        </div>
      </div>
  );

}
