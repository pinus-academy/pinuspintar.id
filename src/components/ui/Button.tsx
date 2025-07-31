import { ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";
import clsx from "clsx";

type CommonProps = {
  variant?: "primary" | "secondary";
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

  return (
    <Component
      className={clsx(
        "px-4 py-2.5 rounded-lg text-base font-medium cursor-pointer transition-all duration-300",
        variant === "primary" &&
          "bg-green-secondary shadow shadow-green-secondary/15 text-white hover:bg-green-secondary/80",
        variant === "secondary" &&
          "bg-gray-200 text-gray-800 hover:bg-gray-300",
        className
      )}
      href={href}
      {...(props as any)}
    >
      {children}
    </Component>
  );
}