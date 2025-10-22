import React from "react";

interface ShimmerButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  icon: React.ReactNode;
  position: string;
}

export const ShimmerButton: React.FC<ShimmerButtonProps> = ({
  position,
  icon,
  children,
  className,
  ...props
}) => {
  return (
    <button
      className={`
        relative z-20 inline-flex h-12 animate-shimmer items-center justify-center 
        rounded-md border border-slate-800 
        bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] 
        bg-[length:200%_100%] px-10 font-medium text-slate-400 
        transition-all duration-250 ease-out focus:outline-none hover:ring-2
        focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 gap-2
        ${className || ""}
      `}
      {...props}
    >
      {position === "left" && icon}
      {children || "Натисніть"}
      {position === "right" && icon}
    </button>
  );
};
