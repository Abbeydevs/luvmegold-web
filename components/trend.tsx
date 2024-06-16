import Image from "next/image";

import trends from "@/public/images/trend-img.png";
import { Button } from "./ui/button";

const Trends = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center gap-16 p-5 py-20 lg:p-20">
      <Image
        src={trends}
        alt="trend pictures"
        className="w-[full] lg:w-[1/2]"
      />
      <div className="w-full lg:w-1/2 space-y-5 text-[#180A06]">
        <h1 className="text-6xl font-bold">Trend</h1>
        <h1 className="text-6xl font-bold pl-20">Setting</h1>
        <h1 className="text-6xl font-bold">Gold</h1>
        <h1 className="text-6xl font-bold pl-20">Fashion</h1>
        <p>
          Stay ahead with our latest gold jewelry trends. Elevate your style
          with pieces that make a statement.
        </p>
        <Button>Browse our Gallery</Button>
      </div>
    </div>
  );
};

export default Trends;
