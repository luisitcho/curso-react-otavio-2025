import Link from "next/link";
import React from "react";

type HeadingProps = {
    children: React.ReactNode;
    href: string;
    className?: string;
    as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
};

export function Heading({
    href,
    className,
    children,
    as: Tag = "h2",
}: HeadingProps) {
    const headingClassesMap = {
        h1: "text-4xl font-extrabold leading-tight sm:text-5xl",
        h2: "text-3xl font-bold leading-snug sm:text-4xl",
        h3: "text-2xl font-semibold leading-snug sm:text-3xl",
        h4: "text-xl font-semibold leading-snug sm:text-2xl",
        h5: "text-lg font-medium leading-snug sm:text-xl",
        h6: "text-base font-medium leading-snug sm:text-lg",
    };
    const headingClass = headingClassesMap[Tag] || "";

    return (
        <Tag className={`${headingClass} ${className}`}>
            <Link href={href}>{children}</Link>
        </Tag>
    );
}
