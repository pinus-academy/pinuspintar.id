import { talents } from "@/lib/talents";
import TalentDetailLayout from "@/components/talents/TalentDetailLayout";
import { notFound } from "next/navigation";

interface TalentDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function TalentDetailPage({ params }: TalentDetailPageProps) {
  const { id } = await params;
  const talentId = parseInt(id);

  const talentData = talents.find((t) => t.id === talentId);

  if (!talentData) {
    return notFound();
  }

  return <TalentDetailLayout talent={talentData} />;
}
