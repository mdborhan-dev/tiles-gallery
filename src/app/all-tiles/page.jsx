import TilesBrowser from "@/components/tiles/TilesBrowser";
import { getTilesData } from "@/lib/dataFetch";

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