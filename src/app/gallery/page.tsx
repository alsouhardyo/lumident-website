import type { Metadata } from "next";
import PageBanner from "@/components/layout/PageBanner";
import Gallery from "@/components/gallery/Gallery";

export const metadata: Metadata = {
    title: "Gallery",
    description: "Browse Lumident's gallery to see our modern clinic facilities, caring dental team, and the beautiful smiles we have helped create.",
    openGraph: {
        title: "Gallery | Lumident",
        description: "Browse Lumident's gallery to see our modern clinic facilities, caring dental team, and the beautiful smiles we have helped create.",
        url: "https://lumident.com.bd/gallery",
    },
};

export default function GalleryPage() {
    return (
        <>
            <PageBanner />
            <Gallery />
        </>
    );
}
