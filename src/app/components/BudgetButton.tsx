import { ReactNode } from "react";

interface BudgetButtonProps {
  onClick: () => void;
  variant: "success" | "danger" | "secondary";
  icon: ReactNode;
  label: string;
  fullWidth?: boolean;
}

const BudgetButton = ({ onClick, variant, icon, label, fullWidth }: BudgetButtonProps) => {
  const baseClasses = "flex items-center justify-center gap-3 px-6 py-4 rounded-xl font-semibold transition-all duration-200 transform active:scale-95 hover:scale-105 backdrop-blur-sm border";
  
  const variantClasses = {
    success: "bg-green-500/20 hover:bg-green-500/30 border-green-400/30 text-green-300 hover:text-green-200",
    danger: "bg-red-500/20 hover:bg-red-500/30 border-red-400/30 text-red-300 hover:text-red-200",
    secondary: "bg-white/10 hover:bg-white/20 border-white/20 text-white/80 hover:text-white"
  };

  const widthClass = fullWidth ? "w-full" : "";

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${variantClasses[variant]} ${widthClass}`}
    >
      {icon}
      <span>{label}</span>
    </button>
  );
};

export default BudgetButton;