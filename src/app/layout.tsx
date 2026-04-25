import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import LenisProvider from "@/lib/utils/LenisScroll";

const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
});

const manrope = Manrope({
    variable: "--font-manrope",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: {
        default: "Lumident | Modern Dental Care in Bogura",
        template: "%s | Lumident",
    },
    description: "Lumident is a trusted dental clinic in Bogura, Bangladesh offering general, cosmetic, orthodontic, and restorative dental treatments for the whole family.",
    keywords: ["dental clinic", "dentist Bogura", "teeth whitening", "dental implants", "orthodontics", "Lumident", "Bangladesh dentist"],
    authors: [{ name: "Lumident" }],
    robots: {
        index: true,
        follow: true,
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="en"
            className={`${inter.variable} ${manrope.variable} font-inter h-full antialiased overflow-x-hidden`}
        >
            <body
                className="min-h-full flex flex-col"
                cz-shortcut-listen="true"
            >
                <LenisProvider>
                    <Header />
                    {children}
                    <Footer />
                </LenisProvider>
            </body>
        </html>
    );
}
