interface ReviewProps {
  des: string;
  src: string;
  customer_name: string;
  position: string;
}

import { FaStar } from "react-icons/fa";

const Review: React.FC<ReviewProps> = ({
  des,
  src,
  customer_name,
  position,
}) => {
  return (
    <div className="flex flex-col gap-4">
      <p className="bg-white p-10 shadow-custom min-h-[180px] rounded-md">
        {des}
      </p>
      <div className="flex items-center justify-between">
        <div className="flex gap-4">
          <img src={src} className="w-[60px] rounded-full" />
          <div>
            <h4 className="border-2 text-left font-bold">{customer_name}</h4>
            <p className="border-2 text-left">{position}</p>
          </div>
        </div>

        <div className="text-yellow-500 flex">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </div>
      </div>
    </div>
  );
};

export default Review;
