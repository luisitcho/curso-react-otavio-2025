import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

import "./globals.css";
import "../scss/base/globals.scss";
import { ToastifyContainer } from "@/components/ToastifyContainer";

const montserrat = Montserrat({
    variable: "--font-montserrat",
    subsets: ["latin"],
    display: "swap", // melhora performance do carregamento
});

export const metadata: Metadata = {
    title: {
        default: "The blog - Este é um blog com Next.js",
        template: "%s | The Blog",
    },
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

                <ToastifyContainer />
            </body>
        </html>
    );
}
