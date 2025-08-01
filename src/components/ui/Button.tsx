import { ButtonHTMLAttributes } from "react";
import clsx from "clsx";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  className?: string;
}

export default function Button({
  children,
  variant = "primary",
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={clsx(
        "px-4 py-2.5 rounded-lg text-base font-medium cursor-pointer transition-all duration-300",
        variant === "primary" &&
          "bg-green-secondary shadow shadow-green-secondary/15 text-white hover:bg-green-secondary/80",
        variant === "secondary" &&
          "bg-gray-200 text-gray-800 hover:bg-gray-300",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
