export interface TalentCardProps {
    id: number;
    name: string;
    type: string;
    role: string;
    skill: string;
    description: string;
    photo: string;
    experiences: {
      position: string;
      company: string;
      year: string;
      tech: string;
      responsibility: string;
    }[];
    education: {
      year: string;
      name: string;
    }[];
    skillset: {
      key: string;
      value: string;
    }[];
  }
  