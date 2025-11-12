import { notFound } from "next/navigation";
import DetailBuyCourse from "@/components/detailCourse/DetailBuyCourse";
import { courses } from "@/lib/courses";

export default async function DetailBuyCoursePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const courseBuyId = parseInt(id);
  const eventData = courses.find((t) => t.id === courseBuyId);

  if (!eventData) return notFound();

  return <DetailBuyCourse courses={eventData} />;
}
