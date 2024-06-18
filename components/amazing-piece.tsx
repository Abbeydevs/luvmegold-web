import Image from "next/image";

import amazingImage from "@/public/images/crafting-image.png";

const AmazingPiece = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center gap-10 p-5 py-20 lg:p-20">
      <div className="w-full lg:w-1/2">
        <h1 className="text-5xl font-bold ">
          We have been crafting amazing pieced for over a Decade
        </h1>
        <p>
          For over a decade, we have been dedicated to crafting extraordinary
          pieces that stand the test of time. Our commitment to quality and
          excellence has driven us to continually refine our techniques and push
          the boundaries of creativity. Each piece we create is a testament to
          our passion for the craft, embodying the skill and attention to detail
          that only years of experience can bring. From the initial concept to
          the final product, every step of our process is infused with the
          knowledge and expertise we have gained through countless hours of
          dedication.
        </p>
      </div>
      <Image
        src={amazingImage}
        alt="amazing piece"
        className="w-full lg:w-1/3"
      />
    </div>
  );
};

export default AmazingPiece;
