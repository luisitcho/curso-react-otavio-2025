import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { Header } from "@/Components/Header";
import { Footer } from "@/Components/Footer";

import "./globals.css";
import "../scss/base/globals.scss";

const montserrat = Montserrat({
    variable: "--font-montserrat",
    subsets: ["latin"],
    display: "swap", // melhora performance do carregamento
});

export const metadata: Metadata = {
    title: "The blog - Este é um blog com Next.js",
    description: "%s | The Blog",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pt-br" className="dark">
            <body
                className={`${montserrat.variable} flex flex-col min-h-screen antialiased`}
            >
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
