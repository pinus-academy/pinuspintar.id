type DurationType = "days" | "weeks" | "months";

export interface CourseCardProps {
  id: number;
  slug: string;
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
  categories: string[];
  featured: boolean;
  image: string;
  url?: string;
  location: string;
  time: string;
  mentor: {
    image: string;
    name: string;
    role: string;
  }[];
  education: {
    key: string;
    value: string;
  }[];
  learningFlow: {
    modul: number;
    title: string;
    description: string;
  }[];
}
