import type { Metadata } from "next";
import Details from "@/components/contact/Details";
import PageBanner from "@/components/layout/PageBanner";

export const metadata: Metadata = {
    title: "Contact Us",
    description: "Get in touch with Lumident. Call us, WhatsApp us, or send an email to book an appointment. Visit our clinic in Dhanmondi, Dhaka, Bangladesh.",
    openGraph: {
        title: "Contact Us | Lumident",
        description: "Get in touch with Lumident. Call us, WhatsApp us, or send an email to book an appointment. Visit our clinic in Dhanmondi, Dhaka, Bangladesh.",
        url: "https://lumident.com.bd/contact",
    },
};

export default function ContactPage() {
    return (
        <>
            <PageBanner />
            <Details />
        </>
    );
}
