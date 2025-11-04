interface BadgeTalentProps {
    variant?: "yellow" | "green" | "emerald" | "red" | "blue" | "gray" | "purple" | "orange";
    children: React.ReactNode;
    className?: string;
}

export default function BadgeTalent({ variant = "gray", children, className = "" }: BadgeTalentProps) {
    const variantStyles: Record<string, string> = {
        yellow: "text-white bg-yellow-300 shadow-md",
        green: "text-white bg-young-green-primary",
        emerald: "text-white bg-emerald-300 shadow-md",
        red: "text-white bg-red-300 shadow-md",
        blue: "text-white bg-blue-primary shadow-badge shadow-blue-primary/30",
        gray: "text-white bg-gray-300 shadow-md",
        purple: "text-white bg-purple-primary shadow-badge shadow-purple-primary/30",
        orange: "text-white bg-amber-500"
        
    };

    return (
        <div
            className={`w-[94px] h-[32px] rounded text-[12px] font-semibold flex items-center justify-center ${variantStyles[variant]} ${className}`}
        >
            {children}
        </div>
    );
}
