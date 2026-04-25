import type { Metadata } from "next";
import About from "@/components/home/About";
import PageBanner from "@/components/layout/PageBanner";
import Philosophy from "@/components/about/Philosophy";
import WhyUs from "@/components/home/WhyUs";

export const metadata: Metadata = {
    title: "About Us",
    description: "Learn about Lumident's mission, vision, and values. We are committed to providing compassionate, high-quality dental care for patients of all ages in Dhaka.",
    openGraph: {
        title: "About Us | Lumident",
        description: "Learn about Lumident's mission, vision, and values. We are committed to providing compassionate, high-quality dental care for patients of all ages in Dhaka.",
        url: "https://lumident.com.bd/about",
    },
};

export default function AboutPage() {
    return (
        <>
            <PageBanner />
            <About />
            <Philosophy />
            <WhyUs />
        </>
    );
}
