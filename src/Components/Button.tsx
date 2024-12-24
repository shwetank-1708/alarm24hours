interface ButtonProps {
  text: string;
}

const Button: React.FC<ButtonProps> = ({ text }) => {
  return (
    <div>
      <button className="text-sky-400 bg-white font-bold p-4 rounded-xl shadow-custom">
        {text}
      </button>
    </div>
  );
};

export default Button;
