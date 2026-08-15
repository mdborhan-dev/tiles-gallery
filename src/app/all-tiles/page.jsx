import AllPageTileCard from "@/components/shared/AllPageTileCard";
import { getTilesData } from "@/lib/dataFetch";

const AllTilesPage = async () => {
    const tiles = await getTilesData()
    // console.log(tiles[0])
    return (
        <div className="container mx-auto">
            <h2 className="text-center text-4xl font-bold">Browse All Tiles</h2>
            <div>

            </div>
            <div className="grid grid-cols-3 gap-4">
                {
                    tiles.map(tile=><AllPageTileCard key={tile.id} tile={tile}/>)
                }

            </div>
        </div>
    );
};

export default AllTilesPage;