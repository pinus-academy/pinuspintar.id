import Image from "next/image";

interface BenefitItemProps {
  src: string;
  alt: string;
  label: string;
  imgWidth?: number;
  imgHeight?: number;
  className?: string; // opsional tambahan styling
}

export default function BenefitItem({
  src,
  alt,
  label,
  imgWidth = 80,
  imgHeight = 80,
  className = "",
}: BenefitItemProps) {
  return (
    <div className={`flex flex-col items-center space-y-2 ${className}`}>
      <Image src={src} alt={alt} width={imgWidth} height={imgHeight} />
      <span className="text-sm text-gray-700 font-medium">{label}</span>
    </div>
  );
}
