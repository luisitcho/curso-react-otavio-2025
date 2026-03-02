import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MenuAdmin } from "@/components/Admin/MenuAdmin";


export default function AdminPostLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <MenuAdmin />
            {children}
        </>
    );
}
