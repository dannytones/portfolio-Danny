import React from "react";

interface ShimmerButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  icon: React.ReactNode;
  position: string;
  otherClasses?: string;
  handleClick?: () => void;
  title?: string;
}

export const ShimmerButton: React.FC<ShimmerButtonProps> = ({
  title,
  position,
  icon,
  children,
  className,
  otherClasses,
  handleClick,
  ...props
}) => {
  return (
    <button
      className={`
        relative z-20 inline-flex h-12 animate-shimmer items-center justify-center 
        rounded-md border border-[#60327a] 
        bg-[linear-gradient(110deg,#1B032B,45%,#00c9b4,55%,#1B032B)] 
        bg-[length:200%_100%] px-10 font-medium text-[#FFE8FF] 
        transition-all duration-300 ease-out focus:outline-none hover:ring-2
        focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 gap-2
        ${className || ""}
      `}
      onClick={handleClick}
      {...props}
    >
      {position === "left" && icon}
      {children || "Натисніть"}
      {position === "right" && icon}
    </button>
  );
};
