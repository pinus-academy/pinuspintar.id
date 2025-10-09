type DurationType = "days" | "weeks";

export interface CourseCardProps {
  id: number;
  title: string;
  description: string;
  benefits: string[];
  price: number;
  discountPrice: number;
  startDate: string;
  duration: number;
  durationType: DurationType; // pakai union type
  level: string;
  type: string;
  category: string;
  featured: boolean;
  image: string;
  url?: string;
}