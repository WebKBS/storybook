interface ButtonProps {
  label: string;
}

const Button = ({ label }: ButtonProps) => {
  return (
    <button className="bg-purple-500 px-4 py-2 text-white rounded-lg">
      {label}
    </button>
  );
};

export default Button;
