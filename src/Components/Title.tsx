interface TitleProps {
  heading: string;
  des: string;
}

const Title: React.FC<TitleProps> = ({ heading, des }) => {
  return (
    <div className="p-[50px] flex flex-col gap-2 text-[#434343]">
      <h2 className="text-3xl text-center font-bold">{heading}</h2>
      <p className="text-center">{des}</p>
    </div>
  );
};

export default Title;
