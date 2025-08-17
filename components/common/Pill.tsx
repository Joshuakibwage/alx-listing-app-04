import { PillProps } from "@/interfaces";



const Pill: React.FC<PillProps> = ({ label, isActive = false, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 text-sm rounded-full border transition
        ${isActive ? "bg-black text-white" : "bg-gray-200 text-gray-800 hover:bg-gray-300"}
      `}
    >
      {label}
    </button>
  );
};

export default Pill;
