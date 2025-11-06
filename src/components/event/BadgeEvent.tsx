interface BadgeEventProps {
  variant?: "yellow" | "green" | "emerald" | "red" | "blue" | "gray" | "purple" | "orange";
  children: React.ReactNode;
  className?: string;
}

export default function BadgeEvent({ variant = "gray", children, className = "" }: BadgeEventProps) {
  const variantStyles: Record<string, string> = {
    yellow: "text-yellow-700 border border-yellow-500 bg-yellow-300",
    green: "text-green-700 border border-green-500 bg-green-300",
    emerald: "text-emerald-700 border border-emerald-500 bg-emerald-300",
    red: "text-red-700 border border-red-500 bg-red-300",
    blue: "text-blue-700 border border-blue-500 bg-blue-300",
    gray: "text-gray-700 border border-gray-400 bg-gray-300",
    purple: "text-purple-700 border border-purple-500 bg-purple-300",
    orange: "text-orange-700 border border-orange-500 bg-orange-300"
  };

  return (
    <div
      className={`h-[30px] px-4 rounded text-xs font-medium flex items-center justify-center ${variantStyles[variant]} ${className}`}
    >
      {children}
    </div>
  );
}
