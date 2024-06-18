import Image from "next/image";
import image1 from "@/public/images/img1-home.png";
import image2 from "@/public/images/img2-home.png";
import image3 from "@/public/images/img3-home.png";
import image4 from "@/public/images/img4-home.png";

const Features = () => {
  return (
    <div className="text-center px-5 py-20 lg:p-20 bg-white">
      <h1 className="text-5xl font-bold">Featured Products</h1>
      <p className="mt-5 text-muted-foreground">
         These are a few of our best-selling gold chains or jewelry pieces,
        emphasizing quality, craftsmanship and unique designs.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 lg:grid-flow-col gap-4 mt-10">
        <Image
          className="row-span-3 rounded-lg mx-auto"
          src={image1}
          alt="featured images"
        />
        <div className="lg:col-span-2 lg:grid lg:grid-cols-2 lg:gap-4 lg:w-[500px]">
          <Image
            src={image2}
            alt="featured images"
            className="rounded-lg w-full"
          />
          <Image
            src={image3}
            alt="featured images"
            className="rounded-lg w-full mt-4 lg:mt-0"
          />
        </div>
        <Image
          className="lg:row-span-2 rounded-lg"
          src={image4}
          alt="featured images"
        />
      </div>
    </div>
  );
};

export default Features;
