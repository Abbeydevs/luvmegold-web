import { formatter } from "@/lib/utils";
import Image from "next/image";

interface ProductItemProps {
  image: string;
  name: string;
  price: number;
  description: string;
}

const ProductItem = ({ image, name, price, description }: ProductItemProps) => {
  return (
    <div>
      <div>
        <Image
          src={image}
          alt="Product Image"
          width={200}
          height={200}
          className="w-full h-auto"
        />
      </div>
      <div className="flex flex-col justify-start items-start mt-2">
        <h2 className="text-2xl font-bold">{name}</h2>
        <p className="text-muted-foreground">{description}</p>
        <p className="text-2xl font-bold mt-2">{formatter.format(price)}</p>
      </div>
    </div>
  );
};

export default ProductItem;
