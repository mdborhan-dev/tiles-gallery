"use client";

import Image from "next/image";

const AllPageTileCard = ({ tile }) => {
  return (
    <div className=" p-5 card shadow-md rounded-lg">
      <div className="relative w-full h-76">
        <Image
          src={tile.image}
          alt={tile.shortDescription}
          fill
          className="object-cover rounded-sm"
        />
      </div>

      <div className="divider"></div>

      <div className="flex justify-between">
        <h2 className="text-2xl font-bold text-left">{tile.title}</h2>
        <h2 className="text-2xl font-bold text-primary text-right">
          ${tile.price}
        </h2>
      </div>
      <div className="flex justify-end gap-3">
        <p className="text-left">{tile.material}:</p>
        <p className="text-right">{tile.dimensions}</p>
      </div>
    </div>
  );
};

export default AllPageTileCard;
