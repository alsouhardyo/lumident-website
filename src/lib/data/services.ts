import type { Service } from "@/types";
import { Stethoscope, Sparkles, Smile, ShieldPlus, Syringe, ScanFace } from "lucide-react";

const services: Service[] = [
    {
        title: "General Dentistry",
        description:
            "Preventive care, routine checkups, and cleanings to keep your teeth healthy.",
        icon: Stethoscope,
        image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=2000&q=80",
    },
    {
        title: "Cosmetic Dentistry",
        description:
            "Smile makeovers with whitening, veneers, and bonding treatments.",
        icon: Sparkles,
        image: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=2000&q=80",
    },
    {
        title: "Orthodontics",
        description:
            "Braces and Invisalign solutions for a perfectly aligned smile.",
        icon: Smile,
        image: "https://images.unsplash.com/photo-1629909615184-74f495363b67?w=2000&q=80",
    },
    {
        title: "Dental Implants",
        description:
            "Permanent tooth replacement that looks and feels completely natural.",
        icon: ShieldPlus,
        image: "https://images.unsplash.com/photo-1593022356769-11f762e25ed9?w=2000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8RGVudGFsJTIwaW1wbGFudHN8ZW58MHx8MHx8fDA%3D",
    },
    {
        title: "Root Canal Therapy",
        description:
            "Pain-free root canal treatments to save and restore damaged teeth.",
        icon: Syringe,
        image: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=2000&q=80",
    },
    {
        title: "3D Dental Scanning",
        description:
            "Advanced digital imaging for precise diagnosis and treatment planning.",
        icon: ScanFace,
        image: "https://images.unsplash.com/photo-1581595219315-a187dd40c322?w=2000&q=80",
    },
];

export default services;