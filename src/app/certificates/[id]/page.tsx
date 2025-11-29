import { certificates } from '@/lib/certificates';
import Image from 'next/image';
import { notFound } from 'next/navigation';

// export const metadata: Metadata = {
//     metadataBase: new URL("https://pinuspintar.id"),
//     title: "Bootcamp Fullstack Developer - PinusPintar x Kitabisa",
//     description: "Program Bootcamp Fullstack Developer intensif bersama PT. PinusPintar Technology dan Kitabisa. Kuasai Next.js dan teknologi modern untuk karir di industri tech.",
//     keywords: ["bootcamp", "fullstack developer", "next.js", "pinuspintar", "kitabisa", "programming"],
//     authors: [{ name: "PinusPintar Technology" }],
//     openGraph: {
//         type: "website",
//         url: "https://pinuspintar.id/events/lastEvents",
//         title: "Bootcamp Fullstack Developer - PinusPintar x Kitabisa",
//         description: "Program Bootcamp Fullstack Developer intensif bersama PT. PinusPintar Technology dan Kitabisa.",
//         siteName: "PinusPintar",
//         images: [
//             {
//                 url: "https://pinuspintar.id/og-image-v2.png?v=2",
//                 width: 1200,
//                 height: 630,
//                 alt: "PinusPintar x Kitabisa Bootcamp",
//             },
//         ],
//     },
//     twitter: {
//         card: "summary_large_image",
//         title: "Bootcamp Fullstack Developer - PinusPintar x Kitabisa",
//         description: "Program Bootcamp Fullstack Developer intensif bersama PT. PinusPintar Technology dan Kitabisa.",
//         images: ["https://pinuspintar.id/og-image-v2.png?v=2"],
//     },
//     robots: {
//         index: true,
//         follow: true,
//     },
// };

export default async function CertificateDetail({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const decodedId = decodeURIComponent(id);
    const certificate = certificates.find(certificate => certificate.id === decodedId);

    if (!certificate) {
        return notFound();
    }


    return (
        <div className='py-24'>
            <Image className='mx-auto' alt={certificate.id + ' - ' + certificate.name} width={1000} height={1000} src={certificate.image}></Image>
        </div>
    )
}