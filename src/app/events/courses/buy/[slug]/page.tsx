import { notFound } from "next/navigation";
import DetailBuyCourse from "@/components/detailCourse/DetailBuyCourse";
import { courses } from "@/lib/courses";

export default async function DetailBuyCoursePage({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>;
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const { slug } = await params;
  const eventData = courses.find((t) => t.slug === slug);

  const resolvedSearchParams = await searchParams;
  const resultCode = typeof resolvedSearchParams?.resultCode === "string" ? resolvedSearchParams.resultCode : undefined;

  if (!eventData) return notFound();

  return <DetailBuyCourse courses={eventData} resultCode={resultCode} />;
}
