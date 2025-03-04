"use client";

type Props = {
  options: string[];
  onClick: (option: string) => void;
};

const MenuOptions: React.FC<Props> = ({ options, onClick }) => {
  return (
    <ul className="absolute top-[45px] left-0 w-full border border-black rounded-lg bg-white shadow-lg">
      {options.map((option, key) => (
        <li key={key}>
          <button
            type="button"
            onClick={() => onClick(option)}
            className="w-full px-2 py-1 text-center hover:bg-gray-200 focus:bg-gray-200 rounded-md cursor-pointer"
          >
            {option}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default MenuOptions;
