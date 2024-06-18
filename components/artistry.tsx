import Image from "next/image";
import artistryImage from "@/public/images/artistry-img.png";

const Artistry = () => {
  return (
    <div className="text-center p-5 py-20 lg:py-20">
      <div>
        <h1 className="text-6xl font-bold">Artistry in Every detail</h1>
        <p>
          Learn about our commitment to quality and purity. We source the finest
          gold to create pieces that stand the test of time
        </p>
      </div>
      <Image
        src={artistryImage}
        alt="artistry image"
        className="w-full lg:w-1/2 mx-auto mt-16"
      />
    </div>
  );
};

export default Artistry;
