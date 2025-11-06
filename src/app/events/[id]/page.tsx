import { courses } from "@/lib/courses";
import { notFound } from "next/navigation";
import DetailEventLayout from "@/components/event/DetailEventLayout"

interface EventDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function EventDetailPage({ params }: EventDetailPageProps) {
  const { id } = await params;
  const coursesId = parseInt(id);

  const eventData = courses.find((t) => t.id === coursesId);

  if (!eventData) {
    return notFound();
  }

  return <DetailEventLayout courses={eventData} />;
}
