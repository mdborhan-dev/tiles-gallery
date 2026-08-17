import { getMarqueeData } from "@/lib/dataFetch";
import Marquee from "react-fast-marquee";

export default async function TopMarquee() {
  const marqueeData = await getMarqueeData();
  return (
    <Marquee
      speed={50}
      gradient={true}
      gradientColor={[255, 255, 255]}
      pauseOnHover={true}
      className="bg-primary text-primary-content py-2"
    >
      {marqueeData.map((item, index) => (
        <span key={item.id} className="mx-8 font-medium">
          {item.text}
          {index !== marqueeData.length - 1 && (
            <span className="mx-8 opacity-50">|</span>
          )}
        </span>
      ))}
    </Marquee>
  );
}
