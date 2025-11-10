import { courses } from "@/lib/courses";
import { notFound } from "next/navigation";
import DetailCourseLayout from "@/components/detailCourses/DetailCourseLayout";


interface  DetailCoursesProps {
  params: {
    id: string;
  };
}
export default function DetailCoursesPage({ params }: DetailCoursesProps) {
    const courseId = parseInt(params.id);
    const courseData = courses.find(t => t.id === courseId);

    if (!courseData) return notFound();

    return <DetailCourseLayout course={courseData} />;
}
