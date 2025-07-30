interface BadgeProps {
    variant?: "yellow" | "green" | "emerald" | "red" | "blue" | "gray" | "purple";
    children: React.ReactNode;
    className?: string;
  }
  
  export default function Badge({ variant = "gray", children, className = "" }: BadgeProps) {
    const variantStyles: Record<string, string> = {
      yellow: "text-yellow-700 bg-yellow-100",
      green: "text-green-700 bg-green-100",
      emerald: "text-emerald-700 bg-emerald-100",
      red: "text-red-700 bg-red-100",
      blue: "text-blue-700 bg-blue-100",
      gray: "text-gray-700 bg-gray-100",
      purple: "bg-purple-100 text-purple-700"
    };
  
    return (
      <div
        className={`px-3 py-1 rounded text-xs font-medium ${variantStyles[variant]} ${className}`}
      >
        {children}
      </div>
    );
  }
  