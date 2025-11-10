import { notFound } from "next/navigation";
import DetailCourseLayout from "@/components/detailCourse/DetailCourseLayout"
import { courses } from "@/lib/courses";

interface DetailCoursePageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function DetailCoursePage({ params }: DetailCoursePageProps) {
  const { id } = await params;
  const courseId = parseInt(id);

  const eventData = courses.find((t) => t.id === courseId);

  if (!eventData) {
    return notFound();
  }

  return <DetailCourseLayout courses={eventData} />;
}
