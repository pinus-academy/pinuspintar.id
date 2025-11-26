export interface newsProps {
    id: number;
    title: string;
    date: string;
    logo: string|null;
    media: string;
    description: string;
    image: string;
    url: string;
}

export interface eventProps{
    id: number;
    title: string;
    startDate: string;
    endDate: string;
    logo: string|null;
    icon: string|null;
    media: string;
    description: string;
    image: string;
    url: string;
}