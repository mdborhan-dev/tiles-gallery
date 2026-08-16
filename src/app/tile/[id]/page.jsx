import { getTilesDataByID } from "@/lib/dataFetch";
import Image from "next/image";

const TileDetails = async ({ params }) => {
  const { id } = await params;
  const tile = await getTilesDataByID(id);

  return (
    <div className="container mx-auto my-20 px-4">
      <div className="flex flex-col md:flex-row gap-10">
        {/* Image */}
        <div className="relative w-full md:w-1/2 h-96 md:h-125">
          <Image
            src={tile?.image}
            alt={tile.shortDescription}
            fill
            className="object-cover rounded-lg"
          />
        </div>

        {/* Details */}
        <div className="w-full md:w-1/2 flex flex-col gap-3">
          <p className="text-sm text-gray-500">{tile.brand} · {tile.sku}</p>

          <h1 className="text-4xl font-bold">{tile.shortDescription}</h1>

          <div className="flex items-center gap-2">
            <span className="text-yellow-500 font-semibold">★ {tile.rating}</span>
            <span className="text-gray-500 text-sm">({tile.reviewsCount} reviews)</span>
          </div>

          <p className="text-3xl font-bold text-primary">
            {tile.currency} {tile.price}
          </p>

          <div className={`badge ${tile.inStock ? "badge-success" : "badge-error"}`}>
            {tile.inStock ? `In Stock (${tile.stockQuantity})` : "Out of Stock"}
          </div>

          <p className="text-gray-700">{tile.description}</p>

          <div className="divider"></div>

          <div className="grid grid-cols-2 gap-y-2 text-sm">
            <p className="text-gray-500">Category</p>
            <p>{tile.category}</p>

            <p className="text-gray-500">Material</p>
            <p>{tile.material}</p>

            <p className="text-gray-500">Dimensions</p>
            <p>{tile.dimensions}</p>

            <p className="text-gray-500">Usage</p>
            <p>{tile.usage}</p>

            <p className="text-gray-500">Country of Origin</p>
            <p>{tile.countryOfOrigin}</p>

            <p className="text-gray-500">Warranty</p>
            <p>{tile.warranty}</p>
          </div>

          <div className="divider"></div>

          <div>
            <h2 className="font-semibold mb-2">Features</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              {tile.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>

          <div className="divider"></div>

          <div>
            <h2 className="font-semibold mb-2">Care Instructions</h2>
            <p className="text-gray-700">{tile.careInstructions}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TileDetails;