interface BadgeProps {
  variant?: "yellow" | "green" | "emerald" | "red" | "blue" | "gray" | "purple";
  children: React.ReactNode;
  className?: string;
}

export default function Badge({ variant = "gray", children, className = "" }: BadgeProps) {
  const variantStyles: Record<string, string> = {
    yellow: "text-yellow-700 border border-yellow-500 bg-yellow-300/25",
    green: "text-green-700 border border-green-500 bg-green-300/25",
    emerald: "text-emerald-700 border border-emerald-500 bg-emerald-300/25",
    red: "text-red-700 border border-red-500 bg-red-300/25",
    blue: "text-blue-700 border border-blue-500 bg-blue-300/25",
    gray: "text-gray-700 border border-gray-400 bg-gray-300/25",
    purple: "text-purple-700 border border-purple-500 bg-purple-300/25",
  };

  return (
    <div
      className={`px-3 py-1 rounded text-xs font-medium ${variantStyles[variant]} ${className}`}
    >
      {children}
    </div>
  );
}
