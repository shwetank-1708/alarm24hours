interface BlogProp {
  src: string;
  des: string;
}

import { FaArrowRight } from "react-icons/fa";

const Blog: React.FC<BlogProp> = ({ src, des }) => {
  return (
    <div className="">
      <img src={src} />
      <p className="text-left">{des}</p>
      <div className="flex items-center gap-1">
        {" "}
        <button>Learn More</button>
        <FaArrowRight />
      </div>
    </div>
  );
};

export default Blog;
