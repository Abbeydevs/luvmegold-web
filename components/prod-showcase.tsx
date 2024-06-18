import Image from "next/image";

import imageShowcase from "@/public/images/f1.png";
import ProductItem from "./product-item";

const ProductShowcase = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center gap-10 p-5 py-20 lg:p-20">
      <Image
        src={imageShowcase}
        alt="product showcase"
        className="w-full lg:w-1/2"
      />
      <div className="w-full lg:w-1/3 flex flex-col justify-center gap-10">
        <ProductItem
          image="/images/f2.png"
          name="3-in-1 necklace"
          price={400}
          description="This is good for gifts and presents to your loved ones."
        />
        <ProductItem
          image="/images/f3.png"
          name="Silver + Gold necklace"
          price={800}
          description="This is good for gifts and presents to your loved ones."
        />
      </div>
    </div>
  );
};

export default ProductShowcase;
