interface AboutTitleProps {
  title: string;
}

const AboutTitle: React.FC<AboutTitleProps> = ({ title }) => {
  return (
    <div>
      <h3 className="font-bold text-2xl">{title}</h3>
    </div>
  );
};

export default AboutTitle;
