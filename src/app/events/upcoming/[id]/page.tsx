import { upcoming } from "@/lib/upcoming";
import { notFound } from "next/navigation";
import DetailUpcomingEventLayout from "@/components/upcomingEvent/DetailUpcomingEventLayout"

interface UpcomingEventDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function UpcomingEventDetailPage({ params }: UpcomingEventDetailPageProps) {
  const { id } = await params;
  const upcomingId = parseInt(id);

  const eventData = upcoming.find((t) => t.id === upcomingId);

  if (!eventData) {
    return notFound();
  }

  return <DetailUpcomingEventLayout upcoming={eventData} />;
}
