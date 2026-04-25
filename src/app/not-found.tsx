import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center px-4 text-center gap-6">
            <Image
                src="/404.png"
                alt="404 Not Found"
                width={400}
                height={300}
                sizes="(max-width: 640px) 90vw, 400px"
                className="object-contain"
                priority
            />
            <div className="flex flex-col items-center gap-3">
                <h1 className="font-manrope font-extrabold text-5xl md:text-6xl text-gray-900">
                    Oops !
                </h1>
                <p className="font-inter text-gray-500 text-base">
                    We can&apos;t seem to find the page you are looking for!
                </p>
                <Link
                    href="/"
                    className="font-inter text-lg font-medium text-gray-700 underline underline-offset-4 hover:text-teal-700 transition-colors duration-300"
                >
                    Go to Home Page
                </Link>
            </div>
        </div>
    );
}
