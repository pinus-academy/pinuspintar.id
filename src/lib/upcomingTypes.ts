export interface upcomingProps {
    id: number;
    title: string;
    type: string;
    date: string;
    time: string;
    description: string;
    image: string;
    price: number;
    discountPrice: number;
    typeClass: string;
    education: {
        key: string;
        value: string;
    } [];
    benefit: {
        key: string;
        value: string;
    } [];
    mentor: {
        image: string;
        name: string;
        role: string;
    } [];
}