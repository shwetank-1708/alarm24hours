interface FeaturesProps {
  src: string;
  heading: string;
  des: string;
}

const Features: React.FC<FeaturesProps> = ({ src, heading, des }) => {
  return (
    <div className="flex flex-col gap-2 items-center text-[#434343] px-4 py-8 rounded-2xl shadow-custom">
      <img src={src} className="w-[400px] m-[25px] rounded-2xl" />
      <h3 className="font-bold text-2xl">{heading}</h3>
      <p>{des}</p>
    </div>
  );
};

export default Features;
