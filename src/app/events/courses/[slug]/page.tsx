import { notFound } from "next/navigation";
import DetailCourseLayout from "@/components/detailCourse/DetailCourseLayout"
import { courses } from "@/lib/courses";

interface DetailCoursePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function DetailCoursePage({ params }: DetailCoursePageProps) {
  const { slug } = await params;

  const eventData = courses.find((t) => t.slug === slug);

  if (!eventData) {
    return notFound();
  }

  return <DetailCourseLayout courses={eventData} />;
}
