interface FeaturesProps {
  src: string;
  heading: string;
  des: string;
}

const Features: React.FC<FeaturesProps> = ({ src, heading, des }) => {
  return (
    <div className="flex flex-col gap-2 items-center text-[#434343]">
      <img src={src} className="w-[80px] m-[25px]" />
      <h3 className="font-bold">{heading}</h3>
      <p>{des}</p>
    </div>
  );
};

export default Features;
