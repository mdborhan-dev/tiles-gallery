import Banner from "@/components/homepage/Banner";
import TopMarquee from "@/components/homepage/Marquee";
import ShowCaseHomepage from "@/components/homepage/ShowCase";
import { getTilesData } from "@/lib/dataFetch";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";


export default async function Home() {
  const tiles = await getTilesData();
  return (
    <div className=" mx-auto">
      <Banner />
      <TopMarquee />
      {/* showcase */}
      <div className="container mx-auto flex flex-col gap-4 my-10">
        <h2 className="text-5xl text-center font-bold">Featured</h2>
        <div className="divider"></div>
        <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 items-stretch">
          {tiles.slice(0, 4).map((tile) => (
            <ShowCaseHomepage key={tile.id} tile={tile} />
          ))}
        </div>
        <Link href={"/all-tiles"} className='btn btn-primary border-0 btn-xl cursor-pointer hover:gap-3 -skew-x-12 mx-auto w-fit  mt-4'><span>Browse All</span> <span>|</span> <FaArrowRightLong/></Link>
      </div>
    </div>
  );
}
