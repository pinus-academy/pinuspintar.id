import { ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";
import clsx from "clsx";

type CommonProps = {
  variant?: "primary" | "secondary" | "ghost" | "outline";
  className?: string;
  children?: React.ReactNode;
};

interface ButtonAsButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  href?: undefined;
}

interface ButtonAsLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
}

type ButtonProps = CommonProps & (ButtonAsButtonProps | ButtonAsLinkProps);

export default function Button({
  children,
  variant = "primary",
  className,
  href,
  ...props
}: ButtonProps) {
  const Component = href ? 'a' : 'button';

  const baseStyles = "px-4 py-2.5 rounded-lg text-base font-medium cursor-pointer transition-all duration-300 inline-flex items-center justify-center";

  return (
    <Component
      className={clsx(
        baseStyles,
        variant === "primary" &&
          "bg-green-secondary shadow shadow-green-secondary/15 text-white hover:bg-green-secondary/80",
        variant === "secondary" &&
          "bg-gray-200 text-gray-800 hover:bg-gray-300",
        variant === "ghost" &&
          "bg-transparent text-green-primary hover:bg-gray-100",
        variant === "outline" &&
          "border border-green-primary text-green-primary hover:bg-green-primary hover:text-white",
        className
      )}
      href={href}
      {...(props as any)}
    >
      {children}
    </Component>
  );
}