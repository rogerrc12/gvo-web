import { StarIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

interface TestimonialItemProps {
  description: string;
  name: string;
  position: string;
  rewiew: number;
  image: string;
}

function TestimonialItem({ description, name, position, rewiew, image }: TestimonialItemProps) {
  return (
    <div>
      <div className="bg-gray-100 p-6 min-h-[10rem] rounded-lg">
        <p className="leading-[26px] text-gray-500">{description}</p>
        <div className="flex items-center gap-1 mt-4">
          {Array.from({ length: rewiew }).map((_, index) => (
            <StarIcon key={index} className="w-4 h-4" color="#F97948" />
          ))}
        </div>
      </div>
      <div className="flex items-center gap-x-3 mt-6">
        <Image src={image} width={50} height={50} className="object-contain rounded-full" alt={name} />
        <div>
          <h3 className="text-lg font-bold">{name}</h3>
          <p className="text-gray-500">{position}</p>
        </div>
      </div>
    </div>
  );
}

export default TestimonialItem;
