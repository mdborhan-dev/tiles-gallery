import TilesBrowser from "@/components/tiles/TilesBrowser";
import { getTilesData } from "@/lib/dataFetch";

export const metadata = {
  title: "Tilora - Browse all tiles",
  description: "Tilora - Find all the tiles you need",
};

const AllTilesPage = async () => {
    const tiles = await getTilesData()
    return (
        <div className="container mx-auto">
            <div className="">
                <TilesBrowser tiles={tiles}/>
            </div>
        </div>
    );
};

export default AllTilesPage;