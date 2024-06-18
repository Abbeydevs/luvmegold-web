import Image from "next/image";
import whyChooseUs1 from "@/public/images/why-choose-img1.png";
import whyChooseUs2 from "@/public/images/why-choose-img2.png";
import whyChooseUs3 from "@/public/images/why-choose-img3.png";
import { Verified } from "lucide-react";
import CardBox from "./card-box";

const WhyChooseUs = () => {
  return (
    <div className="bg-[#2D140D] text-white px-5 py-20 lg:p-20 text-center">
      <h1 className="text-5xl font-bold">Why Choose Us</h1>
      <p>
         These are a few of our best-selling gold chains or jewelry pieces,
        emphasizing quality, craftsmanship and unique designs
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
        <Image src={whyChooseUs1} alt="WCU images" className="w-full" />
        <CardBox
          position="01"
          icon="verified"
          title="Authenticity"
          description="These are a few of our best-selling gold chains or jewelry pieces,"
        />
        <Image src={whyChooseUs2} alt="WCU images" className="w-full" />
        <CardBox
          position="02"
          icon="thumbsUp"
          title="Customer Satisfaction"
          description="These are a few of our best-selling gold chains or jewelry pieces,"
        />
        <Image src={whyChooseUs3} alt="WCU images" className="w-full" />
        <CardBox
          position="03"
          icon="settings"
          title="Craftmanship"
          description="These are a few of our best-selling gold chains or jewelry pieces,"
        />
      </div>
    </div>
  );
};

export default WhyChooseUs;
