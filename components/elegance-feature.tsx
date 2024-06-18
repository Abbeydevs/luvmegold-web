import Image from "next/image";
import elaganceImg from "@/public/images/elegance-img1.png";
import elaganceImg2 from "@/public/images/elegance-img2.png";

const EleganceFeature = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-start p-5 py-20 lg:p-20 gap-10">
      <div>
        <h1 className="text-5xl font-bold">Pure Elegance, Pure Gold</h1>
        <p className="mt-4 text-muted-foreground">
          Learn about our commitment to quality and purity. We source the finest
          gold to create pieces that stand the test of time
        </p>
      </div>
      <div className="flex justify-center items-end gap-3 w-1/2 mx-auto">
        <Image src={elaganceImg2} alt="elegance image" />
        <Image src={elaganceImg} alt="elegance image" />
      </div>
    </div>
  );
};

export default EleganceFeature;
