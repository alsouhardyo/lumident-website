import type { Metadata } from "next";
import Faqs from "@/components/home/Faqs";
import Services from "@/components/home/Services";
import PageBanner from "@/components/layout/PageBanner";
import services from "@/lib/data/services";

export const metadata: Metadata = {
    title: "Our Services",
    description: "Explore Lumident's full range of dental services including general dentistry, cosmetic treatments, orthodontics, implants, root canals, and 3D scanning.",
    openGraph: {
        title: "Our Services | Lumident",
        description: "Explore Lumident's full range of dental services including general dentistry, cosmetic treatments, orthodontics, implants, root canals, and 3D scanning.",
        url: "https://lumident.com.bd/services",
    },
};

export default function ServicesPage() {
    return (
        <>
            <PageBanner />
            <Services services={services} />
            <Faqs />
        </>
    );
}
