import { talents } from "@/lib/talents"; 
import TalentDetailLayout from "@/components/talents/TalentDetailLayout";
import { notFound } from "next/navigation"; 

interface TalentDetailPageProps {
    params: {
        id: string; 
    };
}

export default function TalentDetailPage({ params }: TalentDetailPageProps) {
    const talentId = parseInt(params.id);

    const talentData = talents.find(t => t.id === talentId);

    if (!talentData) {
        return notFound();
    }

    return <TalentDetailLayout talent={talentData} />;
}

