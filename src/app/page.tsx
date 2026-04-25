import type { Metadata } from "next";
import HeroBanner from "@/components/home/HeroBanner";
import About from "@/components/home/About";
import Services from "@/components/home/Services";
import WhyUs from "@/components/home/WhyUs";
import Faqs from "@/components/home/Faqs";
import services from "@/lib/data/services";

export const metadata: Metadata = {
    title: "Lumident | Trusted Dental Clinic in Dhaka",
    description: "Welcome to Lumident — your trusted dental clinic in Dhaka. We offer painless, modern dental treatments including whitening, implants, braces, and more.",
    openGraph: {
        title: "Lumident | Trusted Dental Clinic in Dhaka",
        description: "Welcome to Lumident — your trusted dental clinic in Dhaka. We offer painless, modern dental treatments including whitening, implants, braces, and more.",
        url: "https://lumident.com.bd",
    },
};

export default function page() {
    return (
        <>
            <HeroBanner />
            <About />
            <Services services={services.filter((service, i) => i < 3)} />
            <WhyUs />
            <Faqs />
        </>
    );
}
