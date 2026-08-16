"use client";

import Image from "next/image";
import { useState } from "react";
import { useSpring, animated } from "@react-spring/web";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import cardImageNotFound from "@/assets/cardImageNotFound.png"

const ShowCaseHomepage = ({ tile }) => {
  const [hovered, setHovered] = useState(false);

  const cardSpring = useSpring({
    transform: hovered ? "translateY(-8px)" : "translateY(0px)",
    boxShadow: hovered
      ? "0px 20px 30px rgba(0,0,0,0.25)"
      : "0px 4px 6px rgba(0,0,0,0.1)",
    config: { tension: 300, friction: 20 },
  });

  const imageSpring = useSpring({
    transform: hovered ? "scale(1.1)" : "scale(1)",
    config: { tension: 300, friction: 20 },
  });

  const buttonSpring = useSpring({
    opacity: hovered ? 1 : 0,
    maxHeight: hovered ? 52 : 0,
    marginTop: hovered ? 16 : 0,
    config: { tension: 300, friction: 20 },
  });

  return (
    <Link href={`/tile/${tile.id}`} className="h-full block">
      <animated.div
        style={cardSpring}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="p-5 card rounded-lg h-full flex flex-col relative"
      >
        <div className="relative w-full h-72 overflow-hidden rounded-sm">
          <animated.div style={imageSpring} className="relative w-full h-full">
            <Image
              src={tile?.image || cardImageNotFound}
              alt={tile.shortDescription}
              fill
              className="object-cover rounded-sm"
            />
          </animated.div>
        </div>

        <div className="divider my-4"></div>

        {/* Title and Price */}
        <div className="flex justify-between items-start gap-3">
          <h2 className="text-xl font-bold leading-tight line-clamp-2">
            {tile.shortDescription}
          </h2>
          <h2 className="text-xl font-bold text-primary whitespace-nowrap">
            ${tile.price}
          </h2>
        </div>

        {/* Material and Dimensions - pushed to bottom */}
        <div className="mt-auto pt-4">
          <div className="flex justify-between text-sm text-base-content/70 gap-3">
            <p className="truncate">{tile.material}</p>
            <p className="truncate">{tile.dimensions}</p>
          </div>
        </div>

        {/* Button - visible on mobile, animated on desktop */}
        <animated.div 
          style={buttonSpring} 
          className="overflow-hidden mt-auto hidden sm:block"
        >
          <button className="btn btn-primary btn-block group">
            <span>View Details</span>
            <FiArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </animated.div>

        {/* Mobile button - always visible */}
        <div className="sm:hidden mt-4">
          <button className="btn btn-primary btn-block w-full">
            <span>View Details</span>
            <FiArrowRight className="w-4 h-4" />
          </button>
        </div>
      </animated.div>
    </Link>
  );
};

export default ShowCaseHomepage;