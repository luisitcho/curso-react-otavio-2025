import Link from "next/link";
import React from "react";

type PostHeadingProps = {
    children: React.ReactNode;
    href: string;
    className?: string;
    as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
};

export function PostHeading({
    href,
    className,
    children,
    as: Tag = "h2",
}: PostHeadingProps) {
    const headingClassesMap = {
        h1: "text-4xl font-extrabold leading-tight sm:text-5xl transition duration-300 hover:text-gray-500 group-hover:text-gray-500",
        h2: "text-3xl font-bold leading-snug sm:text-4xl transition duration-300 hover:text-gray-500 group-hover:text-gray-500",
        h3: "text-2xl font-semibold leading-snug sm:text-3xl transition duration-300 hover:text-gray-500 group-hover:text-gray-500",
        h4: "text-xl font-semibold leading-snug sm:text-2xl transition duration-300 hover:text-gray-500 group-hover:text-gray-500",
        h5: "text-lg font-medium leading-snug sm:text-xl transition duration-300 hover:text-gray-500 group-hover:text-gray-500",
        h6: "text-base font-medium leading-snug sm:text-lg transition duration-300 hover:text-gray-500 group-hover:text-gray-500",
    };

    const headingClass = headingClassesMap[Tag] || "";

    return (
        <Tag className={`${headingClass} ${className}`}>
            <Link href={href}>{children}</Link>
        </Tag>
    );
}
