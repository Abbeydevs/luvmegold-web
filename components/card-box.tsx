import { Settings, ThumbsUp, Verified } from "lucide-react";

interface CardBoxProps {
  position: string;
  icon: "verified" | "thumbsUp" | "settings";
  title: string;
  description: string;
}

const CardBox = ({ position, icon, title, description }: CardBoxProps) => {
  const iconMap = {
    verified: Verified,
    thumbsUp: ThumbsUp,
    settings: Settings,
  };

  const IconComponent = iconMap[icon];

  return (
    <div className="rounded-lg border border-[#D0905C] p-5 text-left flex flex-col justify-between">
      <p className="flex justify-end items-center text-4xl text-[#D0905C]">
        {position}
      </p>
      <div className="flex flex-col justify-start items-start mt-10">
        {IconComponent && (
          <IconComponent className="text-[#D0905C] w-10 h-10" />
        )}
        <h1 className="text-3xl my-3">{title}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default CardBox;
