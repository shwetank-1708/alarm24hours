interface FooterLiProps {
  text: string;
}

import { BiSolidRightArrow } from "react-icons/bi";

const FooterLi: React.FC<FooterLiProps> = ({ text }) => {
  return (
    <div className="flex items-center gap-1">
      {" "}
      <BiSolidRightArrow />
      {text}
    </div>
  );
};

export default FooterLi;
