"use client";

import Image from "next/image";
import { useState } from "react";
import { useSpring, animated } from "@react-spring/web";
import Link from "next/link";
import cardImageNotFound from "@/assets/cardImageNotFound.png"

const AllPageTileCard = ({ tile }) => {
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

  return (
    <Link href={`/tile/${tile.id}`}>
        <animated.div
      style={cardSpring}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="p-5 card rounded-lg"
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

      <div className="divider"></div>

      <div className="flex justify-between">
        <h2 className="text-2xl font-bold">{tile.title}</h2>
        <h2 className="text-2xl font-bold text-primary">${tile.price}</h2>
      </div>

      <div className="flex justify-between">
        <p>{tile.material}</p>
        <p>{tile.dimensions}</p>
      </div>
    </animated.div>
    </Link>
  );
};

export default AllPageTileCard;