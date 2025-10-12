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
      "w-[123px] h-[35px] flex items-center justify-center rounded-lg font-medium text-[12px] cursor-pointer transition-all duration-300",
      variant === "primary" &&
        "bg-green-primary text-white hover:bg-green-primary-2",
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
