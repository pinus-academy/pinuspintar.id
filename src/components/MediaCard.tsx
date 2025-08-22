"use client";
import { useState, useEffect } from "react";
import Image from "next/image";


type MediaProps = {
  type: "image" | "video";
  src: string;
  alt: string;
};

export default function MediaCard({ type, src, alt }: MediaProps) {
  const [showOverlay, setShowOverlay] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
   useEffect(() => {
    setIsVisible(true);
  }, []);

  const handlePlay = () => {
    setShowOverlay(false);
  };

  return (
    <div className="aspect-square relative">
      {type === "video" ? (
        <video
          src={src}
          className="object-cover w-full h-full"
          muted
          loop
          autoPlay
          playsInline
          onPlay={handlePlay} 
        />
      ) : (
        <Image
          src={src}
          alt={alt}
          width={500}
          height={500}
          loading="lazy"
          className="object-cover w-full h-full"
        />
      )}

      
      {type === "video" && showOverlay && (
        <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300">
          <div className="w-10 h-10 bg-white bg-opacity-80 rounded-full flex items-center justify-center">
            ▶
          </div>
        </div>
      )}
    </div>
  );
}
